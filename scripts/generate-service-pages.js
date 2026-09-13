#!/usr/bin/env node
/**
 * Generates the Next.js route file and SEO metadata record for every
 * service page content module in src/content/servicePages.
 *
 * Usage:
 *   node scripts/generate-service-pages.js            # write routes + missing metadata
 *   node scripts/generate-service-pages.js --dry      # report only, change nothing
 *   node scripts/generate-service-pages.js --force    # also overwrite existing metadata
 *   node scripts/generate-service-pages.js --force --keep=/service/web-development
 *
 * `--keep` names routes whose existing metadata must never be overwritten, so a
 * hand-written SEO record survives a regeneration that refreshes the rest.
 *
 * Content stays the single source of truth: this script only derives the thin
 * page.tsx wrapper and the data/metadata/*.json record that the admin SEO panel
 * and sitemap.ts read.
 */
const fs = require('fs')
const path = require('path')
const vm = require('vm')
const ts = require('typescript')

const ROOT = path.resolve(__dirname, '..')
const CONTENT_DIR = path.join(ROOT, 'src', 'content', 'servicePages')
const APP_DIR = path.join(ROOT, 'src', 'app', '(innerpage)')
const METADATA_DIR = path.join(ROOT, 'data', 'metadata')
const SITE_URL = 'https://www.attechglobal.com'
const OG_IMAGE = '/assets/img/page_header.jpg'

const args = process.argv.slice(2)
const DRY = args.includes('--dry')
const FORCE = args.includes('--force')
const KEEP = new Set(
  args
    .filter((arg) => arg.startsWith('--keep='))
    .flatMap((arg) => arg.slice('--keep='.length).split(','))
    .map((route) => route.trim())
    .filter(Boolean)
)

/** Transpiles a content module to CommonJS and evaluates it in a sandbox. */
function loadContent(filePath) {
  const source = fs.readFileSync(filePath, 'utf8')
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2019,
      esModuleInterop: true,
    },
    fileName: filePath,
  })

  const module = { exports: {} }
  const sandbox = { module, exports: module.exports, require, console }
  vm.runInNewContext(outputText, sandbox, { filename: filePath })

  const content = module.exports.default || Object.values(module.exports)[0]
  if (!content || typeof content !== 'object') {
    throw new Error(`${path.basename(filePath)} does not export a content object`)
  }
  return content
}

/** Validates the shape of a content module before anything is written. */
function validate(content, file) {
  const problems = []
  const need = (condition, message) => {
    if (!condition) problems.push(message)
  }

  need(content.slug, 'missing slug')
  need(content.route && content.route.startsWith('/'), 'route must start with "/"')
  need(content.route === `/${content.slug}` || content.route.endsWith(`/${content.slug}`),
    `route "${content.route}" does not end with slug "${content.slug}"`)
  need(content.breadcrumbTitle, 'missing breadcrumbTitle')
  need(content.breadcrumbImage, 'missing breadcrumbImage')
  need(content.seo && content.seo.metaTitle, 'missing seo.metaTitle')
  need(content.seo && content.seo.metaDescription, 'missing seo.metaDescription')
  need(content.intro && content.intro.heading, 'missing intro.heading')
  need(Array.isArray(content.intro?.paragraphs) && content.intro.paragraphs.length >= 2,
    'intro.paragraphs needs at least 2 entries')
  need(content.highlights?.length === 3, `highlights should have 3 items, has ${content.highlights?.length}`)
  need(content.features?.items?.length === 6, `features.items should have 6 items, has ${content.features?.items?.length}`)
  need(content.process?.steps?.length === 5, `process.steps should have 5 items, has ${content.process?.steps?.length}`)
  need(content.deliverables?.items?.length >= 6, 'deliverables.items needs at least 6 entries')
  need(content.faqs?.items?.length >= 6, 'faqs.items needs at least 6 entries')
  need(content.related?.length >= 4, 'related needs at least 4 links')

  const metaLength = content.seo?.metaDescription?.length ?? 0
  if (metaLength < 120 || metaLength > 175) {
    problems.push(`seo.metaDescription is ${metaLength} chars (aim for 140-160)`)
  }

  for (const [group, items] of [
    ['highlights', content.highlights],
    ['features.items', content.features?.items],
  ]) {
    for (const item of items ?? []) {
      if (!item.icon || !item.icon.endsWith('.svg')) {
        problems.push(`${group}: "${item.title}" needs a .svg icon name`)
      }
      if (!fs.existsSync(path.join(ROOT, 'public', 'assets', 'img', 'icons', item.icon))) {
        problems.push(`${group}: icon file "${item.icon}" does not exist`)
      }
    }
  }

  for (const step of content.process?.steps ?? []) {
    if (step.text.length > 110) {
      problems.push(`process step "${step.title}" text is ${step.text.length} chars (two-line clamp allows ~90)`)
    }
  }

  return problems
}

function renderPage(content) {
  return `import React from 'react';
import { Metadata } from 'next';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import ServicePageSections from '@/app/Components/Services/ServicePageSections';
import Contact2 from '@/app/Components/Contact/Contact2';
import { getMetadata } from '@/lib/jsonDatabase';
import { convertToNextJsMetadata } from '@/lib/fileSeoUtils';
import content from '@/content/servicePages/${content.slug}';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata('${content.route}');
  if (metadata) {
    return convertToNextJsMetadata(metadata);
  }
  return {
    title: content.seo.metaTitle,
    description: content.seo.metaDescription,
    keywords: content.seo.keywords
      .split(',')
      .map((keyword) => keyword.trim())
      .filter(Boolean),
    alternates: { canonical: \`${SITE_URL}${content.route}\` },
  };
}

const page = () => {
  return (
    <div>
      <BreadCumb bgimg={content.breadcrumbImage} Title={content.breadcrumbTitle} />
      <ServicePageSections content={content} />
      <Contact2 />
    </div>
  );
};

export default page;
`
}

function metadataPathFor(route) {
  const parts = route.split('/').filter(Boolean)
  return path.join(METADATA_DIR, ...parts.slice(0, -1), `${parts[parts.length - 1]}.json`)
}

function renderMetadata(content, now) {
  const canonical = `${SITE_URL}${content.route}`
  return {
    id: Number(`${Date.now()}${Math.floor(Math.random() * 1000)}`),
    route: content.route,
    page_name: content.seo.pageName,
    title: content.seo.metaTitle,
    meta_title: content.seo.metaTitle,
    meta_description: content.seo.metaDescription,
    keywords: content.seo.keywords,
    og_title: content.seo.ogTitle,
    og_description: content.seo.ogDescription,
    og_image: OG_IMAGE,
    canonical_url: canonical,
    robots_index: true,
    robots_follow: true,
    twitter_title: content.seo.ogTitle,
    twitter_description: content.seo.ogDescription,
    twitter_image: OG_IMAGE,
    created_at: now,
    updated_at: now,
  }
}

function main() {
  if (!fs.existsSync(CONTENT_DIR)) {
    console.error(`No content directory at ${CONTENT_DIR}`)
    process.exit(1)
  }

  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith('.ts') && file !== 'index.ts')
    .sort()

  const now = new Date().toISOString()
  let routesWritten = 0
  let metadataWritten = 0
  let metadataKept = 0
  const failures = []

  for (const file of files) {
    const filePath = path.join(CONTENT_DIR, file)

    let content
    try {
      content = loadContent(filePath)
    } catch (error) {
      failures.push(`${file}: ${error.message}`)
      continue
    }

    const problems = validate(content, file)
    if (problems.length) {
      failures.push(`${file}: ${problems.join('; ')}`)
      continue
    }

    const routeDir = path.join(APP_DIR, ...content.route.split('/').filter(Boolean))
    const pageFile = path.join(routeDir, 'page.tsx')
    const metadataFile = metadataPathFor(content.route)

    if (!DRY) {
      fs.mkdirSync(routeDir, { recursive: true })
      fs.writeFileSync(pageFile, renderPage(content), 'utf8')
      routesWritten++

      const metadataExists = fs.existsSync(metadataFile)
      if (KEEP.has(content.route) && metadataExists) {
        metadataKept++
      } else if (FORCE || !metadataExists) {
        fs.mkdirSync(path.dirname(metadataFile), { recursive: true })
        fs.writeFileSync(metadataFile, `${JSON.stringify(renderMetadata(content, now), null, 2)}\n`, 'utf8')
        metadataWritten++
      } else {
        metadataKept++
      }
    } else {
      routesWritten++
      if (fs.existsSync(metadataFile)) metadataKept++
      else metadataWritten++
    }
  }

  console.log(`Content modules:   ${files.length}`)
  console.log(`Routes ${DRY ? 'planned' : 'written'}:   ${routesWritten}`)
  console.log(`Metadata ${DRY ? 'planned' : 'written'}: ${metadataWritten}`)
  console.log(`Metadata preserved (already existed): ${metadataKept}`)

  if (failures.length) {
    console.error(`\n${failures.length} module(s) failed validation:`)
    for (const failure of failures) console.error(`  - ${failure}`)
    process.exit(1)
  }
}

main()

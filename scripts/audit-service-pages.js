#!/usr/bin/env node
/**
 * Audits the service page content set for the problems that a per-file
 * validator cannot catch:
 *
 *   1. Internal links in `related` that point at routes with no page.
 *   2. Duplicated headings, eyebrows, FAQ questions and step titles across pages.
 *   3. Near-duplicate prose between two pages, measured by token overlap.
 *
 * Usage: node scripts/audit-service-pages.js
 * Exits non-zero when a hard problem (broken link, duplicated block) is found.
 */
const fs = require('fs')
const path = require('path')
const vm = require('vm')
const ts = require('typescript')

const ROOT = path.resolve(__dirname, '..')
const CONTENT_DIR = path.join(ROOT, 'src', 'content', 'servicePages')
const APP_DIR = path.join(ROOT, 'src', 'app')

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
  vm.runInNewContext(outputText, { module, exports: module.exports, require, console }, { filename: filePath })
  return module.exports.default || Object.values(module.exports)[0]
}

/** Collects every route that actually has a page.tsx on disk. */
function collectRoutes(dir = APP_DIR, routes = new Set()) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      collectRoutes(full, routes)
    } else if (entry.name === 'page.tsx' || entry.name === 'page.jsx') {
      const rel = path.relative(APP_DIR, dir).split(path.sep).filter((p) => !p.startsWith('(')).join('/')
      routes.add(`/${rel}`)
    }
  }
  return routes
}

const STOP_WORDS = new Set(
  'a an the and or but if then than that this these those for with without from into onto of to in on at by as is are was were be been being we you your our their it its they them he she his her not no do does did done can could should would will shall may might must have has had more most other some such only own same so too very just also about across after again against all any because before below between both each few further here how i if more nor now once out over under until up down off why what when where who whom which while'.split(
    ' '
  )
)

function tokens(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((word) => word.length > 2 && !STOP_WORDS.has(word))
}

/** Jaccard similarity between two strings, 0 to 1. */
function similarity(a, b) {
  const setA = new Set(tokens(a))
  const setB = new Set(tokens(b))
  if (!setA.size || !setB.size) return 0
  let shared = 0
  for (const token of setA) if (setB.has(token)) shared++
  return shared / (setA.size + setB.size - shared)
}

function main() {
  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith('.ts'))
    .sort()

  const pages = files.map((file) => ({ file, content: loadContent(path.join(CONTENT_DIR, file)) }))
  const routes = collectRoutes()

  console.log(`Auditing ${pages.length} content module(s) against ${routes.size} existing routes.\n`)

  const hardProblems = []
  const warnings = []

  // 1. Internal link integrity
  for (const { file, content } of pages) {
    for (const link of content.related ?? []) {
      if (!routes.has(link.href)) {
        hardProblems.push(`${file}: related link "${link.href}" has no page.tsx`)
      }
      if (link.href === content.route) {
        hardProblems.push(`${file}: related link points at its own route`)
      }
    }
  }

  // 2. Duplicated blocks across pages
  // Headings and FAQ questions must be unique; shorter labels are allowed to
  // repeat across pages (sharing a related-link label is normal navigation).
  const blockFields = [
    ['intro.heading', 'error', (c) => [c.intro?.heading]],
    ['intro.eyebrow', 'error', (c) => [c.intro?.eyebrow]],
    ['features.heading', 'error', (c) => [c.features?.heading]],
    ['process.heading', 'error', (c) => [c.process?.heading]],
    ['deliverables.heading', 'error', (c) => [c.deliverables?.heading]],
    ['faqs.heading', 'error', (c) => [c.faqs?.heading]],
    ['FAQ question', 'error', (c) => (c.faqs?.items ?? []).map((f) => f.question)],
    ['process step title', 'warn', (c) => (c.process?.steps ?? []).map((s) => s.title)],
    ['feature title', 'warn', (c) => (c.features?.items ?? []).map((i) => i.title)],
    ['highlight title', 'warn', (c) => (c.highlights ?? []).map((i) => i.title)],
  ]

  for (const [label, severity, extract] of blockFields) {
    const seen = new Map()
    for (const { file, content } of pages) {
      for (const value of extract(content) ?? []) {
        if (!value) continue
        const key = value.trim().toLowerCase()
        if (!seen.has(key)) seen.set(key, [])
        seen.get(key).push(file)
      }
    }
    for (const [value, owners] of seen) {
      if (owners.length > 1) {
        const ownersLabel = [...new Set(owners)].join(', ')
        const message = `Duplicate ${label} "${value}" in: ${ownersLabel}`
        if (severity === 'error') hardProblems.push(message)
        else warnings.push(message)
      }
    }
  }

  // 3. Near-duplicate prose between page pairs
  const prose = (c) =>
    [c.intro?.heading, ...(c.intro?.paragraphs ?? []), ...(c.faqs?.items ?? []).map((f) => f.answer)].join(' ')

  for (let i = 0; i < pages.length; i++) {
    for (let j = i + 1; j < pages.length; j++) {
      const score = similarity(prose(pages[i].content), prose(pages[j].content))
      if (score >= 0.45) {
        hardProblems.push(
          `Near-duplicate content (${(score * 100).toFixed(0)}% overlap): ${pages[i].file} vs ${pages[j].file}`
        )
      } else if (score >= 0.32) {
        warnings.push(
          `Review overlap (${(score * 100).toFixed(0)}%): ${pages[i].file} vs ${pages[j].file}`
        )
      }
    }
  }

  // 4. Related links should include at least one sibling for internal linking value
  for (const { file, content } of pages) {
    if ((content.related ?? []).length < 4) {
      warnings.push(`${file}: only ${content.related?.length ?? 0} related links`)
    }
  }

  if (warnings.length) {
    console.log(`${warnings.length} warning(s):`)
    for (const warning of warnings) console.log(`  ~ ${warning}`)
    console.log('')
  }

  if (hardProblems.length) {
    console.error(`${hardProblems.length} problem(s):`)
    for (const problem of hardProblems) console.error(`  - ${problem}`)
    process.exit(1)
  }

  console.log('No duplicate content and no broken internal links.')
}

main()

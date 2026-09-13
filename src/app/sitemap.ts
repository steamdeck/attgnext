import { MetadataRoute } from 'next'
import fs from 'fs/promises'
import path from 'path'

const baseUrl = 'https://www.attechglobal.com'
const metadataDir = path.join(process.cwd(), 'data', 'metadata')
const appDir = path.join(process.cwd(), 'src', 'app')

interface MetadataRecord {
  route?: string
  updated_at?: string
  [key: string]: unknown
}

/** True when the path exists and is a file. */
async function isFile(target: string): Promise<boolean> {
  try {
    return (await fs.stat(target)).isFile()
  } catch {
    return false
  }
}

/**
 * Builds the set of routes that actually have a page.
 *
 * Route groups such as `(innerpage)` are stripped because they do not appear in
 * the URL, while `admin` and `api` are skipped because they are not public
 * content pages.
 */
async function collectPageRoutes(dir: string = appDir, routes = new Set<string>()): Promise<Set<string>> {
  const entries = await fs.readdir(dir, { withFileTypes: true }).catch(() => [])

  for (const entry of entries) {
    const full = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      if (entry.name === 'api' || entry.name === 'admin') continue
      await collectPageRoutes(full, routes)
    } else if (entry.name === 'page.tsx' || entry.name === 'page.jsx') {
      const relative = path
        .relative(appDir, dir)
        .split(path.sep)
        .filter((segment) => segment && !segment.startsWith('('))
        .join('/')
      routes.add(relative ? `/${relative}` : '/')
    }
  }

  return routes
}

/**
 * Recursively reads every metadata record and derives its route from the file
 * layout, which mirrors the URL structure one-to-one:
 * `data/metadata/service/web-development.json` -> `/service/web-development`.
 *
 * The `route` field inside the records is deliberately not trusted: historical
 * records contain values like `\`, `\blog\blog-details` and `/` (for non-home
 * pages), which produced malformed sitemap entries.
 */
async function collectMetadataRoutes(
  dir: string = metadataDir,
  prefix = ''
): Promise<Map<string, MetadataRecord>> {
  const records = new Map<string, MetadataRecord>()
  const entries = await fs.readdir(dir, { withFileTypes: true }).catch(() => [])

  for (const entry of entries) {
    const full = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      const nested = await collectMetadataRoutes(full, `${prefix}${entry.name}/`)
      for (const [route, record] of nested) records.set(route, record)
    } else if (entry.name.endsWith('.json')) {
      const route = `/${prefix}${entry.name.replace(/\.json$/, '')}`
      try {
        records.set(route, JSON.parse(await fs.readFile(full, 'utf8')) as MetadataRecord)
      } catch (error) {
        console.warn(`Sitemap: skipping ${route} - ${(error as Error).message}`)
      }
    }
  }

  return records
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ]

  try {
    const [pageRoutes, metadataRoutes] = await Promise.all([
      collectPageRoutes(),
      collectMetadataRoutes(),
    ])

    for (const [route, record] of metadataRoutes) {
      if (route === '/home' || route === '/') continue // Home is added above

      // Only publish routes that resolve to a real page, which keeps aggregate
      // records such as `services.json` out of the sitemap.
      if (pageRoutes.size > 0 && !pageRoutes.has(route)) continue

      const isBlogPost = route.startsWith('/blog/')
      const depth = route.split('/').length

      routes.push({
        url: `${baseUrl}${route}`,
        lastModified: new Date(record.updated_at || new Date()),
        changeFrequency: isBlogPost ? 'weekly' : 'monthly',
        priority: isBlogPost ? 0.7 : depth > 2 ? 0.6 : 0.8,
      })
    }

    return routes
  } catch (error) {
    console.error('Error generating sitemap:', error)
    return routes
  }
}

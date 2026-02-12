import fs from 'fs/promises'
import path from 'path'
import { PageMetadataRecord } from './database'

// Map route paths to actual file locations
const ROUTE_TO_FILE_MAP: Record<string, string> = {
  '/about': '(innerpage)/about/page.tsx',
  '/contact': '(innerpage)/contact/page.tsx',
  '/services': '(innerpage)/service/page.tsx',
  '/services/seo': '(innerpage)/service/seo/page.tsx',
  '/services/digital-marketing': '(innerpage)/service/digital-marketing/page.tsx',
  '/services/web-development': '(innerpage)/service/web-development/page.tsx',
  '/services/mobile-application': '(innerpage)/service/mobile-application/page.tsx',
  '/services/ecommerce': '(innerpage)/service/ecommerce/page.tsx',
  '/services/crm': '(innerpage)/service/crm/page.tsx',
  '/services/erp': '(innerpage)/service/erp/page.tsx',
  '/services/lms': '(innerpage)/service/lms/page.tsx',
  '/services/ppc': '(innerpage)/service/ppc/page.tsx',
  '/services/smm': '(innerpage)/service/smm/page.tsx',
  '/services/email-marketing': '(innerpage)/service/email-marketing/page.tsx',
  '/services/whatsapp-marketing': '(innerpage)/service/whatsapp-marketing/page.tsx',
  '/blog': '(innerpage)/blog/page.tsx',
  '/blog-sidebar': '(innerpage)/blog-sidebar/page.tsx',
  '/pricing': '(innerpage)/pricing/page.tsx',
  '/faq': '(innerpage)/faq/page.tsx',
  '/team': '(innerpage)/team/page.tsx',
  '/privacy-policy': '(innerpage)/privacy-policy/page.tsx',
  '/terms-and-conditions': '(innerpage)/terms-and-conditions/page.tsx',
  '/project': '(innerpage)/project/page.tsx',
  '/': 'page.tsx'
}

// Reverse mapping for file to route conversion
const FILE_TO_ROUTE_MAP: Record<string, string> = Object.entries(ROUTE_TO_FILE_MAP).reduce(
  (acc, [route, file]) => ({ ...acc, [file]: route }),
  {}
)

export interface FileBasedPageMetadata extends PageMetadataRecord {
  filePath: string
  fileName: string
}

/**
 * Convert metadata object to Next.js metadata format
 */
function convertToNextJsMetadata(metadata: Partial<PageMetadataRecord>): any {
  const nextJsMetadata: any = {}

  if (metadata.title) {
    nextJsMetadata.title = metadata.title
  }

  if (metadata.meta_description) {
    nextJsMetadata.description = metadata.meta_description
  }

  if (metadata.keywords) {
    nextJsMetadata.keywords = metadata.keywords.split(',').map(k => k.trim()).filter(Boolean)
  }

  // Robots configuration
  if (metadata.robots_index !== undefined || metadata.robots_follow !== undefined) {
    nextJsMetadata.robots = {
      index: metadata.robots_index ?? true,
      follow: metadata.robots_follow ?? true,
      googleBot: {
        index: metadata.robots_index ?? true,
        follow: metadata.robots_follow ?? true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      }
    }
  }

  // Open Graph
  if (metadata.og_title || metadata.og_description || metadata.og_image) {
    nextJsMetadata.openGraph = {}
    if (metadata.og_title) nextJsMetadata.openGraph.title = metadata.og_title
    if (metadata.og_description) nextJsMetadata.openGraph.description = metadata.og_description
    if (metadata.og_image) {
      nextJsMetadata.openGraph.images = [{
        url: metadata.og_image,
        width: 1200,
        height: 630,
        alt: metadata.og_title || metadata.title || ''
      }]
    }
    nextJsMetadata.openGraph.url = metadata.canonical_url || `https://attechglobal.com${metadata.route}`
    nextJsMetadata.openGraph.siteName = 'AT Tech Global'
    nextJsMetadata.openGraph.locale = 'en_US'
    nextJsMetadata.openGraph.type = 'website'
  }

  // Twitter
  if (metadata.twitter_title || metadata.twitter_description || metadata.twitter_image) {
    nextJsMetadata.twitter = {
      card: 'summary_large_image'
    }
    if (metadata.twitter_title) nextJsMetadata.twitter.title = metadata.twitter_title
    if (metadata.twitter_description) nextJsMetadata.twitter.description = metadata.twitter_description
    if (metadata.twitter_image) nextJsMetadata.twitter.images = [metadata.twitter_image]
    nextJsMetadata.twitter.creator = '@attechglobal'
  }

  // Canonical URL
  if (metadata.canonical_url) {
    nextJsMetadata.alternates = {
      canonical: metadata.canonical_url
    }
  }

  return nextJsMetadata
}

/**
 * Parse existing metadata from a component file
 */
export async function parseComponentMetadata(filePath: string): Promise<FileBasedPageMetadata | null> {
  try {
    const fullPath = path.join(process.cwd(), 'src/app', filePath)
    const content = await fs.readFile(fullPath, 'utf8')
    
    // Extract route from file path
    const route = FILE_TO_ROUTE_MAP[filePath] || `/${filePath.replace('(innerpage)/', '').replace('/page.tsx', '').replace('page.tsx', '')}`
    
    // Extract page name from comments or file structure
    const pageNameMatch = content.match(/\/\/\s*(.+?)\s*Page\s*$/m) || 
                         content.match(/const\s+(\w+)Page\s*=/) ||
                         content.match(/export\s+default\s+(\w+)/)
    const pageName = pageNameMatch ? pageNameMatch[1].replace(/Page$/, '') + ' Page' : filePath.split('/').pop()?.replace('.tsx', '') || 'Page'
    
    // Extract metadata values using regex patterns
    const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/)
    const descriptionMatch = content.match(/description:\s*['"`]([^'"`]+)['"`]/)
    const keywordsMatch = content.match(/keywords:\s*\[([^\]]+)\]/)
    
    // Extract Open Graph values
    const ogTitleMatch = content.match(/openGraph:\s*{[^}]*title:\s*['"`]([^'"`]+)['"`]/)
    const ogDescriptionMatch = content.match(/openGraph:\s*{[^}]*description:\s*['"`]([^'"`]+)['"`]/)
    const ogImageMatch = content.match(/openGraph:\s*{[^}]*images:\s*\[\s*{\s*url:\s*['"`]([^'"`]+)['"`]/)
    
    // Extract robots values
    const robotsIndexMatch = content.match(/index:\s*(true|false)/)
    const robotsFollowMatch = content.match(/follow:\s*(true|false)/)
    
    return {
      id: 0, // Will be set when listing
      route,
      page_name: pageName,
      title: titleMatch?.[1] || '',
      meta_title: titleMatch?.[1] || '',
      meta_description: descriptionMatch?.[1] || '',
      keywords: keywordsMatch ? keywordsMatch[1].replace(/['"`]/g, '').split(',').map(s => s.trim()).join(', ') : '',
      og_title: ogTitleMatch?.[1] || '',
      og_description: ogDescriptionMatch?.[1] || '',
      og_image: ogImageMatch?.[1] || '',
      canonical_url: '',
      robots_index: robotsIndexMatch ? robotsIndexMatch[1] === 'true' : true,
      robots_follow: robotsFollowMatch ? robotsFollowMatch[1] === 'true' : true,
      twitter_title: '',
      twitter_description: '',
      twitter_image: '',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      filePath,
      fileName: path.basename(filePath, '.tsx')
    }
  } catch (error) {
    console.error(`Error parsing component ${filePath}:`, error)
    return null
  }
}

/**
 * Update component file with new metadata
 */
export async function updateComponentMetadata(
  filePath: string, 
  metadata: Partial<PageMetadataRecord>
): Promise<boolean> {
  try {
    const fullPath = path.join(process.cwd(), 'src/app', filePath)
    let content = await fs.readFile(fullPath, 'utf8')
    
    // More robust regex patterns that handle multiline and various quote types
    const escapeQuotes = (str: string) => str.replace(/'/g, "\\'").replace(/"/g, '\\"')
    
    // Update title - handles both single and double quotes, multiline
    // Use meta_title if provided, otherwise fall back to title
    const titleValue = metadata.meta_title !== undefined ? metadata.meta_title : metadata.title
    if (titleValue !== undefined) {
      const titlePatterns = [
        /(export const metadata:\s*Metadata\s*=\s*{[^}]*?)title:\s*['"`]([^'"`]*?)['"`]/gs,
        /(export const metadata:[^}]*?)title:\s*(['"`])((?:(?!\2).)*)\2/gs
      ]
      
      for (const pattern of titlePatterns) {
        if (pattern.test(content)) {
          content = content.replace(pattern, `$1title: '${escapeQuotes(titleValue)}'`)
          break
        }
      }
    }
    
    // Update description - handles multiline strings
    if (metadata.meta_description !== undefined) {
      const descPatterns = [
        /(export const metadata:\s*Metadata\s*=\s*{[^}]*?)description:\s*['"`]([^'"`]*?)['"`]/gs,
        /(export const metadata:[^}]*?)description:\s*(['"`])((?:(?!\2).)*)\2/gs
      ]
      
      for (const pattern of descPatterns) {
        if (pattern.test(content)) {
          content = content.replace(pattern, `$1description: '${escapeQuotes(metadata.meta_description)}'`)
          break
        }
      }
    }
    
    // Update keywords
    if (metadata.keywords !== undefined) {
      const keywordsArray = metadata.keywords.split(',').map(k => k.trim()).filter(Boolean)
      const keywordsString = keywordsArray.map(k => `'${escapeQuotes(k)}'`).join(', ')
      
      const keywordsPattern = /(export const metadata:[^}]*?)keywords:\s*\[[^\]]*\]/gs
      if (keywordsPattern.test(content)) {
        content = content.replace(keywordsPattern, `$1keywords: [${keywordsString}]`)
      }
    }
    
    // Update Open Graph title
    if (metadata.og_title !== undefined) {
      const ogTitlePattern = /(openGraph:\s*{[^}]*?)title:\s*(['"`])((?:(?!\2).)*)\2/gs
      if (ogTitlePattern.test(content)) {
        content = content.replace(ogTitlePattern, `$1title: '${escapeQuotes(metadata.og_title)}'`)
      }
    }
    
    // Update Open Graph description
    if (metadata.og_description !== undefined) {
      const ogDescPattern = /(openGraph:\s*{[^}]*?)description:\s*(['"`])((?:(?!\2).)*)\2/gs
      if (ogDescPattern.test(content)) {
        content = content.replace(ogDescPattern, `$1description: '${escapeQuotes(metadata.og_description)}'`)
      }
    }
    
    // Update Open Graph image
    if (metadata.og_image !== undefined) {
      const ogImagePattern = /(openGraph:\s*{[^}]*?images:\s*\[\s*{\s*)url:\s*(['"`])((?:(?!\2).)*)\2/gs
      if (ogImagePattern.test(content)) {
        content = content.replace(ogImagePattern, `$1url: '${escapeQuotes(metadata.og_image)}'`)
      }
    }
    
    // Update robots index
    if (metadata.robots_index !== undefined) {
      const robotsIndexPattern = /(robots:\s*{[^}]*?)index:\s*(true|false)/gs
      if (robotsIndexPattern.test(content)) {
        content = content.replace(robotsIndexPattern, `$1index: ${metadata.robots_index}`)
      }
    }
    
    // Update robots follow
    if (metadata.robots_follow !== undefined) {
      const robotsFollowPattern = /(robots:\s*{[^}]*?)follow:\s*(true|false)/gs
      if (robotsFollowPattern.test(content)) {
        content = content.replace(robotsFollowPattern, `$1follow: ${metadata.robots_follow}`)
      }
    }
    
    // Write updated content back to file
    await fs.writeFile(fullPath, content, 'utf8')
    return true
  } catch (error) {
    console.error(`Error updating component ${filePath}:`, error)
    return false
  }
}

/**
 * Get all component files that have metadata
 */
export async function getAllComponentFiles(): Promise<FileBasedPageMetadata[]> {
  const pages: FileBasedPageMetadata[] = []
  
  for (const [route, filePath] of Object.entries(ROUTE_TO_FILE_MAP)) {
    const metadata = await parseComponentMetadata(filePath)
    if (metadata) {
      metadata.id = pages.length + 1
      pages.push(metadata)
    }
  }
  
  return pages
}

/**
 * Get component file path for a route
 */
export function getComponentFilePath(route: string): string | null {
  return ROUTE_TO_FILE_MAP[route] || null
}

/**
 * Get route for a component file path
 */
export function getRouteFromFilePath(filePath: string): string | null {
  return FILE_TO_ROUTE_MAP[filePath] || null
}
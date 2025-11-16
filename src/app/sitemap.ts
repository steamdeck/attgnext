import { MetadataRoute } from 'next'
import { readdirSync, statSync } from 'fs'
import { join } from 'path'
import { 
  getBlogPosts, 
  getProjectRoutes, 
  getTeamMemberRoutes, 
  getRouteMetadata, 
  getLastModified 
} from '../lib/sitemap-utils'

// Enable dynamic sitemap generation with ISR (Incremental Static Regeneration)
// Revalidate every 24 hours (86400 seconds) or on-demand
// This allows the sitemap to update automatically without requiring a full rebuild
export const revalidate = 86400 // 24 hours in seconds

// Store page paths with their file paths for lastModified lookup
interface PageInfo {
  route: string
  filePath: string
}

// Function to recursively get all page files with their paths
function getAllPages(dir: string, basePath: string = '', baseDir: string = dir): PageInfo[] {
  const pages: PageInfo[] = []
  
  try {
    const items = readdirSync(dir)
    
    for (const item of items) {
      const fullPath = join(dir, item)
      const stat = statSync(fullPath)
      
      if (stat.isDirectory()) {
        // Skip certain directories
        if (['node_modules', '.next', 'Components', 'assets', 'favicon.ico', 'api', 'admin'].includes(item)) {
          continue
        }
        
        // Handle route groups (directories with parentheses)
        if (item.startsWith('(') && item.endsWith(')')) {
          // For route groups, don't add them to the path
          pages.push(...getAllPages(fullPath, basePath, baseDir))
        } else {
          // Regular directory
          const newBasePath = basePath ? `${basePath}/${item}` : item
          pages.push(...getAllPages(fullPath, newBasePath, baseDir))
        }
      } else if (item === 'page.tsx' || item === 'page.ts') {
        // Found a page file - store the route and file path
        const route = basePath ? `/${basePath}` : '/'
        pages.push({
          route,
          filePath: fullPath
        })
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error)
  }
  
  return pages
}

// Function to get dynamic routes (for blogs, projects, etc.)
async function getDynamicRoutes(): Promise<string[]> {
  const dynamicRoutes: string[] = []
  
  try {
    // Get blog posts
    const blogPosts = await getBlogPosts()
    blogPosts.forEach(post => dynamicRoutes.push(`/blog/${post}`))
    
    // Get project routes
    const projectRoutes = await getProjectRoutes()
    projectRoutes.forEach(project => dynamicRoutes.push(`/project/${project}`))
    
    // Get team member routes
    const teamRoutes = await getTeamMemberRoutes()
    teamRoutes.forEach(member => dynamicRoutes.push(`/team/${member}`))
  } catch (error) {
    console.error('Error fetching dynamic routes:', error)
  }
  
  return dynamicRoutes
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get the base URL dynamically based on environment
  let baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  
  if (!baseUrl) {
    if (process.env.NODE_ENV === 'development') {
      // In development, try to detect the actual port
      const port = process.env.PORT || process.env.NEXT_PORT || 3000
      baseUrl = `http://localhost:${port}`
    } else {
      // In production, use your actual domain
      baseUrl = 'https://yourdomain.com'
    }
  }
  
  // Get all static pages with their file paths
  const appDir = join(process.cwd(), 'src/app')
  const staticPages = getAllPages(appDir)
  
  // Create a Set of existing routes to avoid duplicates
  const existingRoutes = new Set(staticPages.map(page => page.route))
  
  // Get dynamic routes (from database/CMS - not file-based)
  const dynamicRoutes = await getDynamicRoutes()
  
  // Convert dynamic routes to PageInfo format (no file path for dynamic routes)
  // Only include routes that aren't already discovered by getAllPages
  const dynamicPages: PageInfo[] = dynamicRoutes
    .filter(route => !existingRoutes.has(route))
    .map(route => ({
      route,
      filePath: '' // Dynamic routes from CMS/database don't have file paths
    }))
  
  // Combine all routes (static pages first, then non-duplicate dynamic routes)
  const allPages = [...staticPages, ...dynamicPages]
  
  // Generate sitemap entries with actual file modification dates
  const sitemapEntries: MetadataRoute.Sitemap = allPages.map((pageInfo) => {
    const { priority, changeFrequency } = getRouteMetadata(pageInfo.route)
    
    // Get last modified date from actual file if available
    let lastModified: Date
    if (pageInfo.filePath) {
      try {
        const stats = statSync(pageInfo.filePath)
        lastModified = stats.mtime
      } catch (error) {
        // Fallback to utility function if file can't be read
        lastModified = getLastModified(pageInfo.route)
      }
    } else {
      // For dynamic routes, use utility function
      lastModified = getLastModified(pageInfo.route)
    }
    
    return {
      url: `${baseUrl}${pageInfo.route}`,
      lastModified,
      changeFrequency,
      priority,
    }
  })
  
  return sitemapEntries
}

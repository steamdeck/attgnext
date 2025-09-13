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

// Required for static export
export const dynamic = 'force-static'
export const revalidate = false

// Function to recursively get all page files
function getAllPages(dir: string, basePath: string = ''): string[] {
  const pages: string[] = []
  
  try {
    const items = readdirSync(dir)
    
    for (const item of items) {
      const fullPath = join(dir, item)
      const stat = statSync(fullPath)
      
      if (stat.isDirectory()) {
        // Skip certain directories
        if (['node_modules', '.next', 'Components', 'assets', 'favicon.ico'].includes(item)) {
          continue
        }
        
        // Handle route groups (directories with parentheses)
        if (item.startsWith('(') && item.endsWith(')')) {
          // For route groups, don't add them to the path
          pages.push(...getAllPages(fullPath, basePath))
        } else {
          // Regular directory
          const newBasePath = basePath ? `${basePath}/${item}` : item
          pages.push(...getAllPages(fullPath, newBasePath))
        }
      } else if (item === 'page.tsx' || item === 'page.ts') {
        // Found a page file
        if (basePath) {
          pages.push(`/${basePath}`)
        } else {
          // Root page
          pages.push('/')
        }
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
  
  // Get all static pages
  const appDir = join(process.cwd(), 'src/app')
  const staticPages = getAllPages(appDir)
  
  // Get dynamic routes
  const dynamicRoutes = await getDynamicRoutes()
  
  // Combine all routes
  const allRoutes = [...staticPages, ...dynamicRoutes]
  
  // Generate sitemap entries
  const sitemapEntries: MetadataRoute.Sitemap = allRoutes.map((route) => {
    const { priority, changeFrequency } = getRouteMetadata(route)
    
    return {
      url: `${baseUrl}${route}`,
      lastModified: getLastModified(route),
      changeFrequency,
      priority,
    }
  })
  
  return sitemapEntries
}

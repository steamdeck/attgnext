// Utility functions for sitemap generation
import { readdirSync, statSync } from 'fs'
import { join } from 'path'

export interface SitemapEntry {
  url: string
  lastModified: Date
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

// Function to get blog posts from file system or API
export async function getBlogPosts(): Promise<string[]> {
  try {
    // Check if blog directory exists
    const blogDir = join(process.cwd(), 'src/app/(innerpage)/blog')
    
    // Try to read from file system
    if (typeof window === 'undefined') {
      try {
        const items = readdirSync(blogDir)
        const blogPosts: string[] = []
        
        for (const item of items) {
          const itemPath = join(blogDir, item)
          const stat = statSync(itemPath)
          
          // Only include directories that contain page.tsx (dynamic blog posts)
          // Exclude the main blog page and blog-details template
          if (stat.isDirectory() && item !== 'blog-details') {
            const pagePath = join(itemPath, 'page.tsx')
            try {
              const pageStat = statSync(pagePath)
              if (pageStat.isFile()) {
                blogPosts.push(item)
              }
            } catch {
              // Page file doesn't exist, skip
            }
          }
        }
        
        return blogPosts
      } catch (error) {
        // Directory doesn't exist or can't be read, fall through to other methods
        console.warn('Could not read blog directory from file system:', error)
      }
    }
    
    // Future: Fetch from API or database
    // Example: const response = await fetch('https://your-api.com/blog-posts')
    // const posts = await response.json()
    // return posts.map(post => post.slug)
    
    return []
  } catch (error) {
    console.error('Error getting blog posts:', error)
    return []
  }
}

// Function to get dynamic project routes
export async function getProjectRoutes(): Promise<string[]> {
  try {
    // Check if project directory exists
    const projectDir = join(process.cwd(), 'src/app/(innerpage)/project')
    
    // Try to read from file system
    if (typeof window === 'undefined') {
      try {
        const items = readdirSync(projectDir)
        const projects: string[] = []
        
        for (const item of items) {
          const itemPath = join(projectDir, item)
          const stat = statSync(itemPath)
          
          // Only include directories that contain page.tsx (dynamic project pages)
          // Exclude the main project page and project-details template
          if (stat.isDirectory() && item !== 'project-details') {
            const pagePath = join(itemPath, 'page.tsx')
            try {
              const pageStat = statSync(pagePath)
              if (pageStat.isFile()) {
                projects.push(item)
              }
            } catch {
              // Page file doesn't exist, skip
            }
          }
        }
        
        return projects
      } catch (error) {
        console.warn('Could not read project directory from file system:', error)
      }
    }
    
    // Future: Fetch from API or database
    return []
  } catch (error) {
    console.error('Error getting project routes:', error)
    return []
  }
}

// Function to get team member routes
export async function getTeamMemberRoutes(): Promise<string[]> {
  try {
    // Check if team directory exists
    const teamDir = join(process.cwd(), 'src/app/(innerpage)/team')
    
    // Try to read from file system
    if (typeof window === 'undefined') {
      try {
        const items = readdirSync(teamDir)
        const teamMembers: string[] = []
        
        for (const item of items) {
          const itemPath = join(teamDir, item)
          const stat = statSync(itemPath)
          
          // Only include directories that contain page.tsx (dynamic team member pages)
          // Exclude the main team page and team-details template
          if (stat.isDirectory() && item !== 'team-details') {
            const pagePath = join(itemPath, 'page.tsx')
            try {
              const pageStat = statSync(pagePath)
              if (pageStat.isFile()) {
                teamMembers.push(item)
              }
            } catch {
              // Page file doesn't exist, skip
            }
          }
        }
        
        return teamMembers
      } catch (error) {
        console.warn('Could not read team directory from file system:', error)
      }
    }
    
    // Future: Fetch from API or database
    return []
  } catch (error) {
    console.error('Error getting team member routes:', error)
    return []
  }
}

// Function to determine route priority and change frequency
export function getRouteMetadata(route: string): {
  priority: number
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
} {
  let priority = 0.5
  let changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly'
  
  if (route === '/') {
    priority = 1.0
    changeFrequency = 'daily'
  } else if (route.startsWith('/service')) {
    priority = 0.8
    changeFrequency = 'weekly'
  } else if (route.startsWith('/blog')) {
    priority = 0.7
    changeFrequency = 'weekly'
  } else if (route.startsWith('/project')) {
    priority = 0.7
    changeFrequency = 'monthly'
  } else if (['/about', '/contact', '/pricing', '/team'].includes(route)) {
    priority = 0.8
    changeFrequency = 'monthly'
  } else if (route.includes('details')) {
    priority = 0.6
    changeFrequency = 'monthly'
  }
  
  return { priority, changeFrequency }
}

// Function to get the last modified date for a route
export function getLastModified(route: string): Date {
  // You can implement more sophisticated logic here
  // For example, reading file modification dates or fetching from a database
  
  // For now, return current date
  // In a real implementation, you might:
  // 1. Read the actual file modification date
  // 2. Get the last updated date from your CMS
  // 3. Use a database timestamp
  
  return new Date()
}

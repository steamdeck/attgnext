// Utility functions for sitemap generation

export interface SitemapEntry {
  url: string
  lastModified: Date
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

// Function to get blog posts (customize this based on your blog structure)
export async function getBlogPosts(): Promise<string[]> {
  // If you have a blog with dynamic posts, implement this function
  // For example, if you fetch from an API or read from a directory:
  
  // Example 1: If you have blog posts in a directory
  // const blogDir = join(process.cwd(), 'content/blog')
  // const files = readdirSync(blogDir)
  // return files.map(file => file.replace('.md', ''))
  
  // Example 2: If you fetch from an API
  // const response = await fetch('https://your-api.com/blog-posts')
  // const posts = await response.json()
  // return posts.map(post => post.slug)
  
  // For now, return empty array - you can implement this later
  return []
}

// Function to get dynamic project routes
export async function getProjectRoutes(): Promise<string[]> {
  // If you have dynamic project pages, implement this function
  // Similar to getBlogPosts but for projects
  
  return []
}

// Function to get team member routes
export async function getTeamMemberRoutes(): Promise<string[]> {
  // If you have dynamic team member pages, implement this function
  
  return []
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

import { MetadataRoute } from 'next'
import fs from 'fs/promises'
import path from 'path'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.attechglobal.com'
  const metadataDir = path.join(process.cwd(), 'data', 'metadata')
  
  try {
    const files = await fs.readdir(metadataDir)
    const routes: MetadataRoute.Sitemap = []

    // Always include home page first
    routes.push({
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    })

    for (const file of files) {
      if (file.endsWith('.json') && file !== 'home.json') {
        const filePath = path.join(metadataDir, file)
        const content = await fs.readFile(filePath, 'utf8')
        const metadata = JSON.parse(content)
        
        // Use the route from metadata, or fallback to filename
        let route = metadata.route
        
        if (route === '/') continue // Already added home

        // Ensure route starts with /
        if (!route.startsWith('/')) {
          route = `/${route}`
        }

        routes.push({
          url: `${baseUrl}${route}`,
          lastModified: new Date(metadata.updated_at || new Date()),
          changeFrequency: 'monthly',
          priority: route.split('/').length > 2 ? 0.6 : 0.8,
        })
      }
    }

    // Add any nested directories in metadata (like blog posts)
    const blogDir = path.join(metadataDir, 'blog')
    try {
      const blogFiles = await fs.readdir(blogDir)
      for (const file of blogFiles) {
        if (file.endsWith('.json')) {
          const filePath = path.join(blogDir, file)
          const content = await fs.readFile(filePath, 'utf8')
          const metadata = JSON.parse(content)
          
          let route = metadata.route || `/blog/${file.replace('.json', '')}`
          if (!route.startsWith('/')) route = `/${route}`

          routes.push({
            url: `${baseUrl}${route}`,
            lastModified: new Date(metadata.updated_at || new Date()),
            changeFrequency: 'weekly',
            priority: 0.7,
          })
        }
      }
    } catch (e) {
      // Blog dir might not exist or be empty
    }

    return routes
  } catch (error) {
    console.error('Error generating sitemap:', error)
    // Fallback to basic sitemap
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
    ]
  }
}

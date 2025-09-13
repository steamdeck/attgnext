import { MetadataRoute } from 'next'

// Required for static export
export const dynamic = 'force-static'
export const revalidate = false

export default function robots(): MetadataRoute.Robots {
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
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/private/',
        '/admin/',
        '/api/',
        '/_next/',
        '/Components/',
        '/assets/',
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

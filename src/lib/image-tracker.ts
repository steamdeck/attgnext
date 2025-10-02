// Utility functions for tracking image usage across pages

export interface ImageUsageContext {
  pagePath: string
  pageTitle: string
  context: string
  imagePath: string
}

// Track image usage on a page
export async function trackImageUsage(imagePath: string, context: ImageUsageContext) {
  try {
    // Find the image in the database by file path
    const response = await fetch('/api/images', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('admin_token')}`
      }
    })

    if (!response.ok) return

    const data = await response.json()
    const image = data.images.find((img: any) => img.file_path === imagePath)
    
    if (!image) return

    // Add usage record
    await fetch(`/api/images/${image.id}/usage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('admin_token')}`
      },
      body: JSON.stringify({
        page_path: context.pagePath,
        page_title: context.pageTitle,
        usage_context: context.context
      })
    })
  } catch (error) {
    console.warn('Could not track image usage:', error)
  }
}

// Scan a page for images and track their usage
export function scanPageForImages(pagePath: string, pageTitle: string) {
  if (typeof window === 'undefined') return

  const images = document.querySelectorAll('img')
  
  images.forEach((img, index) => {
    const src = img.src
    if (src.startsWith(window.location.origin)) {
      const imagePath = src.replace(window.location.origin, '')
      const context = `Image ${index + 1} on ${pageTitle}`
      
      trackImageUsage(imagePath, {
        pagePath,
        pageTitle,
        context,
        imagePath
      })
    }
  })
}

// React hook for tracking images on a page
export function useImageTracking(pagePath: string, pageTitle: string) {
  const { useEffect } = require('react')
  
  useEffect(() => {
    if (typeof window === 'undefined') return

    const timer = setTimeout(() => {
      scanPageForImages(pagePath, pageTitle)
    }, 1000) // Wait 1 second for images to load

    return () => clearTimeout(timer)
  }, [pagePath, pageTitle])
}

// Component wrapper for automatic image tracking
export function ImageTracker({ 
  children, 
  pagePath, 
  pageTitle 
}: { 
  children: any
  pagePath: string
  pageTitle: string 
}) {
  useImageTracking(pagePath, pageTitle)
  return children
}

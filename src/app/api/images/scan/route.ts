import { NextRequest, NextResponse } from 'next/server'
export const dynamic = 'force-dynamic'
import { initDatabase, getDatabase, getQuery, runQuery } from '../../../../lib/database'
import path from 'path'
import fs from 'fs'

// Initialize database on first request
let dbInitialized = false
async function ensureDatabase() {
  if (!dbInitialized) {
    await initDatabase()
    dbInitialized = true
  }
}

// POST /api/images/scan - Scan existing images and populate database
export async function POST(request: NextRequest) {
  try {
    await ensureDatabase()

    const publicDir = path.join(process.cwd(), 'public')
    const assetsDir = path.join(publicDir, 'assets', 'img')
    const uploadsDir = path.join(publicDir, 'uploads')

    const scannedImages: any[] = []

    // Function to scan directory recursively
    const scanDirectory = async (dir: string, basePath: string = '') => {
      if (!fs.existsSync(dir)) return

      const items = fs.readdirSync(dir)
      
      for (const item of items) {
        const itemPath = path.join(dir, item)
        const relativePath = path.join(basePath, item).replace(/\\/g, '/')
        const publicPath = `/${relativePath}`

        const stat = fs.statSync(itemPath)
        
        if (stat.isDirectory()) {
          await scanDirectory(itemPath, relativePath)
        } else if (stat.isFile()) {
          const ext = path.extname(item).toLowerCase()
          if (['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'].includes(ext)) {
            // Check if image already exists in database
            const existingImage = await getQuery('SELECT id FROM images WHERE file_path = ?', [publicPath])
            
            if (!existingImage) {
              // Get file stats
              const fileSize = stat.size
              const uploadDate = stat.birthtime
              
              // Get image dimensions (for non-SVG images)
              let width = 0
              let height = 0
              if (ext !== '.svg') {
                try {
                  const sharp = require('sharp')
                  const metadata = await sharp(itemPath).metadata()
                  width = metadata.width || 0
                  height = metadata.height || 0
                } catch (error) {
                  console.warn(`Could not get dimensions for ${itemPath}:`, error)
                }
              }

              // Generate filename
              const filename = `${Date.now()}_${Math.random().toString(36).substring(2)}${ext}`
              
              // Insert into database
              const insertQuery = `
                INSERT INTO images (
                  filename, original_name, title, alt_text, caption, description,
                  file_path, file_size, width, height, format, tags, upload_date, seo_score
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
              `
              
              const result = await runQuery(insertQuery, [
                filename,
                item,
                '', // title
                '', // alt_text
                '', // caption
                '', // description
                publicPath,
                fileSize,
                width,
                height,
                `image/${ext.substring(1)}`,
                '', // tags
                uploadDate.toISOString(),
                0 // seo_score
              ])

              scannedImages.push({
                id: result.id,
                filename: item,
                path: publicPath,
                size: fileSize,
                dimensions: `${width}×${height}`
              })
            }
          }
        }
      }
    }

    // Scan assets directory
    await scanDirectory(assetsDir, 'assets/img')
    
    // Scan uploads directory
    await scanDirectory(uploadsDir, 'uploads')

    return NextResponse.json({
      message: 'Image scan completed',
      scannedCount: scannedImages.length,
      images: scannedImages
    })

  } catch (error) {
    console.error('Error scanning images:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
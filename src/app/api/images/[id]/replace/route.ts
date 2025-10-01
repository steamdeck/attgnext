import { NextRequest, NextResponse } from 'next/server'
export const dynamic = 'force-dynamic'
import { initDatabase, getDatabase, getQuery, runQuery } from '../../../../../lib/database'
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

// POST /api/images/[id]/replace - Replace image file
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await ensureDatabase()

    const resolvedParams = await params
    const imageId = parseInt(resolvedParams.id)
    if (isNaN(imageId)) {
      return NextResponse.json({ error: 'Invalid image ID' }, { status: 400 })
    }

    // Get existing image
    const existingImage = await getQuery('SELECT * FROM images WHERE id = ?', [imageId])
    if (!existingImage) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 })
    }

    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml']
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: 'Invalid file type' }, { status: 400 })
    }

    // Validate file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: 'File too large' }, { status: 400 })
    }

    // Delete old file
    const oldFilePath = path.join(process.cwd(), 'public', existingImage.file_path)
    if (fs.existsSync(oldFilePath)) {
      fs.unlinkSync(oldFilePath)
    }

    // Generate new filename
    const timestamp = Date.now()
    const extension = path.extname(file.name)
    const filename = `${timestamp}_${Math.random().toString(36).substring(2)}${extension}`
    
    // Create uploads directory
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads')
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true })
    }

    const newFilePath = path.join(uploadsDir, filename)
    const relativePath = `/uploads/${filename}`

    // Save new file
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    fs.writeFileSync(newFilePath, buffer)

    // Get image dimensions (for non-SVG images)
    let width = 0
    let height = 0
    if (file.type !== 'image/svg+xml') {
      try {
        const sharp = require('sharp')
        const metadata = await sharp(buffer).metadata()
        width = metadata.width || 0
        height = metadata.height || 0
      } catch (error) {
        console.warn('Could not get image dimensions:', error)
      }
    }

    // Update database record
    const updateQuery = `
      UPDATE images 
      SET filename = ?, original_name = ?, file_path = ?, file_size = ?, 
          width = ?, height = ?, format = ?, last_modified = CURRENT_TIMESTAMP
      WHERE id = ?
    `
    
    await runQuery(updateQuery, [
      filename,
      file.name,
      relativePath,
      file.size,
      width,
      height,
      file.type,
      imageId
    ])

    // Get updated image
    const updatedImage = await getQuery('SELECT * FROM images WHERE id = ?', [imageId])

    return NextResponse.json({
      message: 'Image replaced successfully',
      image: updatedImage
    })

  } catch (error) {
    console.error('Error replacing image:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
import { NextRequest, NextResponse } from 'next/server'
export const dynamic = 'force-dynamic'
import { initDatabase, getDatabase, allQuery, runQuery, getQuery } from '../../../lib/database'
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

// GET /api/images - Get all images with pagination and filtering
export async function GET(request: NextRequest) {
  try {
    await ensureDatabase()

    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')
    const search = searchParams.get('search') || ''
    const sortBy = searchParams.get('sortBy') || 'upload_date'
    const sortOrder = searchParams.get('sortOrder') || 'DESC'

    const offset = (page - 1) * limit

    // Build query
    let whereClause = ''
    let params: any[] = []

    if (search) {
      whereClause = 'WHERE filename LIKE ? OR title LIKE ? OR alt_text LIKE ? OR tags LIKE ?'
      const searchTerm = `%${search}%`
      params = [searchTerm, searchTerm, searchTerm, searchTerm]
    }

    // Get total count
    const countQuery = `SELECT COUNT(*) as total FROM images ${whereClause}`
    const countResult = await getQuery(countQuery, params)
    const total = countResult.total

    // Get images
    const imagesQuery = `
      SELECT * FROM images 
      ${whereClause}
      ORDER BY ${sortBy} ${sortOrder}
      LIMIT ? OFFSET ?
    `
    const images = await allQuery(imagesQuery, [...params, limit, offset])

    // Get usage count for each image
    for (const image of images) {
      const usageQuery = 'SELECT COUNT(*) as count FROM image_usage WHERE image_id = ?'
      const usageResult = await getQuery(usageQuery, [image.id])
      image.usage_count = usageResult.count
    }

    return NextResponse.json({
      images,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    })

  } catch (error) {
    console.error('Error fetching images:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST /api/images - Upload new image
export async function POST(request: NextRequest) {
  try {
    await ensureDatabase()

    const formData = await request.formData()
    const file = formData.get('file') as File
    const title = formData.get('title') as string
    const altText = formData.get('alt_text') as string
    const caption = formData.get('caption') as string
    const description = formData.get('description') as string
    const tags = formData.get('tags') as string

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

    // Generate unique filename
    const timestamp = Date.now()
    const extension = path.extname(file.name)
    const filename = `${timestamp}_${Math.random().toString(36).substring(2)}${extension}`
    
    // Create uploads directory
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads')
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true })
    }

    const filePath = path.join(uploadsDir, filename)
    const relativePath = `/uploads/${filename}`

    // Save file
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    fs.writeFileSync(filePath, buffer)

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

    // Calculate SEO score
    let seoScore = 0
    if (title) seoScore += 20
    if (altText) seoScore += 30
    if (caption) seoScore += 15
    if (description) seoScore += 20
    if (tags) seoScore += 15

    // Insert into database
    const insertQuery = `
      INSERT INTO images (
        filename, original_name, title, alt_text, caption, description,
        file_path, file_size, width, height, format, tags, seo_score
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `
    
    const result = await runQuery(insertQuery, [
      filename,
      file.name,
      title || '',
      altText || '',
      caption || '',
      description || '',
      relativePath,
      file.size,
      width,
      height,
      file.type,
      tags || '',
      seoScore
    ])

    // Get the inserted image
    const newImage = await getQuery('SELECT * FROM images WHERE id = ?', [result.id])

    return NextResponse.json({
      message: 'Image uploaded successfully',
      image: newImage
    })

  } catch (error) {
    console.error('Error uploading image:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
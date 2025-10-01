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

// GET /api/images/[id] - Get specific image details
export async function GET(
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

    // Get image details
    const image = await getQuery('SELECT * FROM images WHERE id = ?', [imageId])
    if (!image) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 })
    }

    // Get usage information
    const usageQuery = `
      SELECT * FROM image_usage 
      WHERE image_id = ? 
      ORDER BY created_at DESC
    `
    const usage = await getQuery(usageQuery, [imageId])

    return NextResponse.json({
      image,
      usage
    })

  } catch (error) {
    console.error('Error fetching image:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// PUT /api/images/[id] - Update image metadata
export async function PUT(
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

    const body = await request.json()
    const { title, alt_text, caption, description, tags } = body

    // Check if image exists
    const existingImage = await getQuery('SELECT * FROM images WHERE id = ?', [imageId])
    if (!existingImage) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 })
    }

    // Calculate new SEO score
    let seoScore = 0
    if (title) seoScore += 20
    if (alt_text) seoScore += 30
    if (caption) seoScore += 15
    if (description) seoScore += 20
    if (tags) seoScore += 15

    // Update image metadata
    const updateQuery = `
      UPDATE images 
      SET title = ?, alt_text = ?, caption = ?, description = ?, tags = ?, 
          seo_score = ?, last_modified = CURRENT_TIMESTAMP
      WHERE id = ?
    `
    
    await runQuery(updateQuery, [
      title || existingImage.title,
      alt_text || existingImage.alt_text,
      caption || existingImage.caption,
      description || existingImage.description,
      tags || existingImage.tags,
      seoScore,
      imageId
    ])

    // Get updated image
    const updatedImage = await getQuery('SELECT * FROM images WHERE id = ?', [imageId])

    return NextResponse.json({
      message: 'Image updated successfully',
      image: updatedImage
    })

  } catch (error) {
    console.error('Error updating image:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// DELETE /api/images/[id] - Delete image
export async function DELETE(
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

    // Get image details
    const image = await getQuery('SELECT * FROM images WHERE id = ?', [imageId])
    if (!image) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 })
    }

    // Delete usage records
    await runQuery('DELETE FROM image_usage WHERE image_id = ?', [imageId])

    // Delete image record
    await runQuery('DELETE FROM images WHERE id = ?', [imageId])

    // Delete physical file
    const filePath = path.join(process.cwd(), 'public', image.file_path)
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath)
    }

    return NextResponse.json({
      message: 'Image deleted successfully'
    })

  } catch (error) {
    console.error('Error deleting image:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
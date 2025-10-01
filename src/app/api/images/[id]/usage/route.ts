import { NextRequest, NextResponse } from 'next/server'
export const dynamic = 'force-dynamic'
import { initDatabase, getDatabase, allQuery, runQuery } from '../../../../../lib/database'

// Initialize database on first request
let dbInitialized = false
async function ensureDatabase() {
  if (!dbInitialized) {
    await initDatabase()
    dbInitialized = true
  }
}

// GET /api/images/[id]/usage - Get image usage across pages
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

    // Get usage information
    const usageQuery = `
      SELECT * FROM image_usage 
      WHERE image_id = ? 
      ORDER BY created_at DESC
    `
    const usage = await allQuery(usageQuery, [imageId])

    return NextResponse.json({
      usage
    })

  } catch (error) {
    console.error('Error fetching image usage:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST /api/images/[id]/usage - Add usage record
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

    const body = await request.json()
    const { page_path, page_title, usage_context } = body

    if (!page_path) {
      return NextResponse.json({ error: 'Page path is required' }, { status: 400 })
    }

    // Insert usage record
    const insertQuery = `
      INSERT INTO image_usage (image_id, page_path, page_title, usage_context)
      VALUES (?, ?, ?, ?)
    `
    
    const result = await runQuery(insertQuery, [
      imageId,
      page_path,
      page_title || '',
      usage_context || ''
    ])

    // Update usage count in images table
    await runQuery(
      'UPDATE images SET usage_count = usage_count + 1 WHERE id = ?',
      [imageId]
    )

    return NextResponse.json({
      message: 'Usage record added successfully',
      usage_id: result.id
    })

  } catch (error) {
    console.error('Error adding usage record:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
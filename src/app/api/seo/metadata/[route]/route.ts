import { NextRequest, NextResponse } from 'next/server'
import { initDatabase, allQuery, runQuery } from '@/lib/database'

export const dynamic = 'force-dynamic'

// Initialize database on first request
let dbInitialized = false
async function ensureDatabase() {
  if (!dbInitialized) {
    await initDatabase()
    dbInitialized = true
  }
}

// GET /api/seo/metadata/[route] - Get specific page metadata
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ route: string }> }
) {
  try {
    await ensureDatabase()
    
    const { route } = await params
    const decodedRoute = decodeURIComponent(route)
    
    const pages = await allQuery(
      'SELECT * FROM page_metadata WHERE route = ?',
      [decodedRoute]
    )
    
    if (pages.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Page metadata not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({
      success: true,
      data: pages[0]
    })
  } catch (error) {
    console.error('Error fetching page metadata:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch page metadata' },
      { status: 500 }
    )
  }
}

// PUT /api/seo/metadata/[route] - Update page metadata
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ route: string }> }
) {
  try {
    await ensureDatabase()
    
    const { route } = await params
    const decodedRoute = decodeURIComponent(route)
    const body = await request.json()
    
    const {
      page_name,
      title,
      meta_title,
      meta_description,
      keywords,
      og_title,
      og_description,
      og_image,
      canonical_url,
      robots_index,
      robots_follow,
      twitter_title,
      twitter_description,
      twitter_image
    } = body
    
    // Check if page exists
    const existing = await allQuery(
      'SELECT id FROM page_metadata WHERE route = ?',
      [decodedRoute]
    )
    
    if (existing.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Page metadata not found' },
        { status: 404 }
      )
    }
    
    const result = await runQuery(`
      UPDATE page_metadata SET
        page_name = COALESCE(?, page_name),
        title = COALESCE(?, title),
        meta_title = COALESCE(?, meta_title),
        meta_description = COALESCE(?, meta_description),
        keywords = COALESCE(?, keywords),
        og_title = COALESCE(?, og_title),
        og_description = COALESCE(?, og_description),
        og_image = COALESCE(?, og_image),
        canonical_url = COALESCE(?, canonical_url),
        robots_index = COALESCE(?, robots_index),
        robots_follow = COALESCE(?, robots_follow),
        twitter_title = COALESCE(?, twitter_title),
        twitter_description = COALESCE(?, twitter_description),
        twitter_image = COALESCE(?, twitter_image),
        updated_at = CURRENT_TIMESTAMP
      WHERE route = ?
    `, [
      page_name, title, meta_title, meta_description, keywords,
      og_title, og_description, og_image, canonical_url,
      robots_index, robots_follow, twitter_title, twitter_description, twitter_image,
      decodedRoute
    ])
    
    const updatedRecord = await allQuery(
      'SELECT * FROM page_metadata WHERE route = ?',
      [decodedRoute]
    )
    
    return NextResponse.json({
      success: true,
      data: updatedRecord[0],
      message: 'Page metadata updated successfully'
    })
  } catch (error) {
    console.error('Error updating page metadata:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to update page metadata' },
      { status: 500 }
    )
  }
}

// DELETE /api/seo/metadata/[route] - Delete page metadata
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ route: string }> }
) {
  try {
    await ensureDatabase()
    
    const { route } = await params
    const decodedRoute = decodeURIComponent(route)
    
    // Check if page exists
    const existing = await allQuery(
      'SELECT id FROM page_metadata WHERE route = ?',
      [decodedRoute]
    )
    
    if (existing.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Page metadata not found' },
        { status: 404 }
      )
    }
    
    await runQuery('DELETE FROM page_metadata WHERE route = ?', [decodedRoute])
    
    return NextResponse.json({
      success: true,
      message: 'Page metadata deleted successfully'
    })
  } catch (error) {
    console.error('Error deleting page metadata:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to delete page metadata' },
      { status: 500 }
    )
  }
}
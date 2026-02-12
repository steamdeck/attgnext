import { NextRequest, NextResponse } from 'next/server'
import { initDatabase, getDatabase, allQuery, runQuery } from '../../../../lib/database'

export const dynamic = 'force-dynamic'

// Initialize database on first request
let dbInitialized = false
async function ensureDatabase() {
  if (!dbInitialized) {
    await initDatabase()
    dbInitialized = true
  }
}

// GET /api/seo/metadata - Get all page metadata
export async function GET(request: NextRequest) {
  try {
    await ensureDatabase()
    
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '50')
    const search = searchParams.get('search') || ''
    const offset = (page - 1) * limit
    
    let query = 'SELECT * FROM page_metadata'
    let countQuery = 'SELECT COUNT(*) as count FROM page_metadata'
    const params: any[] = []
    let searchTerm = ''
    
    if (search) {
      query += ' WHERE route LIKE ? OR page_name LIKE ? OR title LIKE ?'
      countQuery += ' WHERE route LIKE ? OR page_name LIKE ? OR title LIKE ?'
      searchTerm = `%${search}%`
      params.push(searchTerm, searchTerm, searchTerm)
    }
    
    query += ' ORDER BY route LIMIT ? OFFSET ?'
    params.push(limit, offset)
    
    const [pages, countResult] = await Promise.all([
      allQuery(query, params),
      allQuery(countQuery, search ? [searchTerm, searchTerm, searchTerm] : [])
    ])
    
    const totalCount = countResult[0]?.count || 0
    
    return NextResponse.json({
      success: true,
      data: pages,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalCount / limit),
        totalCount,
        hasNext: page * limit < totalCount,
        hasPrev: page > 1
      }
    })
  } catch (error) {
    console.error('Error fetching page metadata:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch page metadata' },
      { status: 500 }
    )
  }
}

// POST /api/seo/metadata - Create new page metadata
export async function POST(request: NextRequest) {
  try {
    await ensureDatabase()
    
    const body = await request.json()
    const {
      route,
      page_name,
      title,
      meta_title,
      meta_description,
      keywords,
      og_title,
      og_description,
      og_image,
      canonical_url,
      robots_index = true,
      robots_follow = true,
      twitter_title,
      twitter_description,
      twitter_image
    } = body
    
    if (!route || !page_name) {
      return NextResponse.json(
        { success: false, error: 'Route and page name are required' },
        { status: 400 }
      )
    }
    
    // Check if route already exists
    const existing = await allQuery('SELECT id FROM page_metadata WHERE route = ?', [route])
    if (existing.length > 0) {
      return NextResponse.json(
        { success: false, error: 'Page metadata for this route already exists' },
        { status: 400 }
      )
    }
    
    const result = await runQuery(`
      INSERT INTO page_metadata (
        route, page_name, title, meta_title, meta_description, keywords,
        og_title, og_description, og_image, canonical_url,
        robots_index, robots_follow, twitter_title, twitter_description, twitter_image
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      route, page_name, title || '', meta_title || '', meta_description || '', keywords || '',
      og_title || '', og_description || '', og_image || '', canonical_url || '',
      robots_index, robots_follow, twitter_title || '', twitter_description || '', twitter_image || ''
    ])
    
    const newRecord = await allQuery('SELECT * FROM page_metadata WHERE id = ?', [result.id])
    
    return NextResponse.json({
      success: true,
      data: newRecord[0],
      message: 'Page metadata created successfully'
    })
  } catch (error) {
    console.error('Error creating page metadata:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create page metadata' },
      { status: 500 }
    )
  }
}
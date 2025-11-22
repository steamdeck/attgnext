export const dynamic = 'force-dynamic'
import { NextRequest, NextResponse } from 'next/server'
import { initDatabase, allQuery, getQuery } from '@/lib/database'

// Initialize database on first request
let dbInitialized = false
async function ensureDatabase() {
  if (!dbInitialized) {
    await initDatabase()
    dbInitialized = true
  }
}

// GET /api/blogs - Get all blogs with pagination and filtering
export async function GET(request: NextRequest) {
  try {
    await ensureDatabase()

    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '10')
    const offset = parseInt(searchParams.get('offset') || '0')
    const category = searchParams.get('category') || ''

    // Build query
    let whereClause = "WHERE status = 'published'"
    let params: any[] = []

    if (category) {
      whereClause += ' AND category = ?'
      params.push(category)
    }

    // Get blogs sorted by published_date (latest first), fallback to created_at
    const blogsQuery = `
      SELECT * FROM blogs 
      ${whereClause}
      ORDER BY COALESCE(published_date, created_at) DESC
      LIMIT ? OFFSET ?
    `
    const blogs = await allQuery(blogsQuery, [...params, limit, offset])

    // Get total count
    const countQuery = `SELECT COUNT(*) as total FROM blogs ${whereClause}`
    const countResult = await getQuery(countQuery, params)
    const total = countResult?.total || 0

    return NextResponse.json({
      blogs,
      pagination: {
        limit,
        offset,
        total,
        totalPages: Math.ceil(total / limit)
      }
    })

  } catch (error) {
    console.error('Error fetching blogs:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}


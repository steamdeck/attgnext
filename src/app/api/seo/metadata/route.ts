import { NextRequest, NextResponse } from 'next/server'
import { getAllMetadata, createMetadata } from '../../../../lib/jsonDatabase'

export const dynamic = 'force-dynamic'

// GET /api/seo/metadata - Get all page metadata
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '50')
    const search = searchParams.get('search') || ''
    
    const { data, pagination } = await getAllMetadata(page, limit, search)
    
    return NextResponse.json({
      success: true,
      data: data,
      pagination: pagination
    })
  } catch (error) {
    console.error('Error fetching all page metadata:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch all page metadata' },
      { status: 500 }
    )
  }
}

// POST /api/seo/metadata - Create new page metadata
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const newRecord = await createMetadata(body)
    
    return NextResponse.json({
      success: true,
      data: newRecord,
      message: 'Page metadata created successfully'
    })
  } catch (error: any) {
    console.error('Error creating page metadata:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to create page metadata' },
      { status: 500 }
    )
  }
}
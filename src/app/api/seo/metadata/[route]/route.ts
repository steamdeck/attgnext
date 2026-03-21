import { NextRequest, NextResponse } from 'next/server'
import { getMetadata, updateMetadata, deleteMetadata } from '@/lib/jsonDatabase'

export const dynamic = 'force-dynamic'

// GET /api/seo/metadata/[route] - Get specific page metadata
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ route: string }> }
) {
  try {
    const { route } = await params
    const decodedRoute = decodeURIComponent(route)
    
    const metadata = await getMetadata(decodedRoute)
    
    if (!metadata) {
      return NextResponse.json(
        { success: false, error: `Page metadata not found for route: ${decodedRoute}` },
        { status: 404 }
      )
    }
    
    return NextResponse.json({
      success: true,
      data: metadata
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
    const { route } = await params
    const decodedRoute = decodeURIComponent(route)
    const body = await request.json()
    
    const updatedRecord = await updateMetadata(decodedRoute, body)
    
    if (!updatedRecord) {
      return NextResponse.json(
        { success: false, error: `Page metadata not found for route: ${decodedRoute}` },
        { status: 404 }
      )
    }
    
    return NextResponse.json({
      success: true,
      data: updatedRecord,
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
    const { route } = await params
    const decodedRoute = decodeURIComponent(route)
    
    const success = await deleteMetadata(decodedRoute)
    
    if (!success) {
      return NextResponse.json(
        { success: false, error: `Page metadata not found for route: ${decodedRoute}` },
        { status: 404 }
      )
    }
    
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
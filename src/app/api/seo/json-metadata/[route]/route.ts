import { NextRequest, NextResponse } from 'next/server'
import { getMetadata } from '@/lib/jsonDatabase'

export const dynamic = 'force-dynamic'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ route: string }> }
) {
  try {
    const { route } = await params
    const decodedRoute = decodeURIComponent(route)
    
    const metadata = await getMetadata(decodedRoute)
    
    if (!metadata) {
      return NextResponse.json({
        success: false,
        error: `Metadata not found for route: ${decodedRoute}`
      }, { status: 404 })
    }
    
    return NextResponse.json({
      success: true,
      data: metadata
    })
  } catch (error) {
    console.error('Error reading metadata from JSON file:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch metadata'
    }, { status: 500 })
  }
}

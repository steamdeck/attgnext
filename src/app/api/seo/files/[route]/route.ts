import { NextRequest, NextResponse } from 'next/server'
import { parseComponentMetadata, updateComponentMetadata, getComponentFilePath } from '@/lib/fileSeoUtils'
import { PageMetadataRecord } from '@/lib/database'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ route: string }> }
) {
  try {
    const { route } = await params;
    const decodedRoute = decodeURIComponent(route)
    const filePath = getComponentFilePath(decodedRoute)
    
    if (!filePath) {
      return NextResponse.json({
        success: false,
        error: `No component file found for route: ${decodedRoute}`
      }, { status: 404 })
    }
    
    const metadata = await parseComponentMetadata(filePath)
    
    if (!metadata) {
      return NextResponse.json({
        success: false,
        error: 'Failed to parse component metadata'
      }, { status: 500 })
    }
    
    return NextResponse.json({
      success: true,
      data: metadata
    })
  } catch (error) {
    console.error('Error fetching file-based metadata:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch metadata'
    }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ route: string }> }
) {
  try {
    const { route } = await params;
    const decodedRoute = decodeURIComponent(route)
    const filePath = getComponentFilePath(decodedRoute)
    
    if (!filePath) {
      return NextResponse.json({
        success: false,
        error: `No component file found for route: ${decodedRoute}`
      }, { status: 404 })
    }
    
    const updates: Partial<PageMetadataRecord> = await request.json()
    
    const success = await updateComponentMetadata(filePath, updates)
    
    if (success) {
      const updatedMetadata = await parseComponentMetadata(filePath)
      return NextResponse.json({
        success: true,
        data: updatedMetadata
      })
    } else {
      return NextResponse.json({
        success: false,
        error: 'Failed to update component file'
      }, { status: 500 })
    }
  } catch (error) {
    console.error('Error updating file-based metadata:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to process request'
    }, { status: 500 })
  }
}
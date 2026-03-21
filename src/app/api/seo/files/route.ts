import { NextRequest, NextResponse } from 'next/server'
import { getAllComponentFiles, parseComponentMetadata, updateComponentMetadata, getComponentFilePath } from '@/lib/fileSeoUtils'
import { PageMetadataRecord } from '@/lib/jsonDatabase'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const pageParam = searchParams.get('page')
    const limitParam = searchParams.get('limit')
    const searchParam = searchParams.get('search')
    
    const page = parseInt(pageParam || '1')
    const limit = parseInt(limitParam || '20')
    const search = searchParam || ''
    
    // Get all component files with metadata
    let allPages = await getAllComponentFiles()
    
    // Apply search filter if provided
    if (search) {
      const searchTerm = search.toLowerCase()
      allPages = allPages.filter(page => 
        page.page_name.toLowerCase().includes(searchTerm) ||
        page.route.toLowerCase().includes(searchTerm) ||
        page.title.toLowerCase().includes(searchTerm)
      )
    }
    
    // Calculate pagination
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedPages = allPages.slice(startIndex, endIndex)
    
    return NextResponse.json({
      success: true,
      data: paginatedPages,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(allPages.length / limit),
        totalCount: allPages.length,
        hasNext: endIndex < allPages.length,
        hasPrev: startIndex > 0
      }
    })
  } catch (error) {
    console.error('Error fetching file-based metadata:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch metadata'
    }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data: Omit<PageMetadataRecord, 'id' | 'created_at' | 'updated_at'> = await request.json()
    
    // For file-based system, we can only update existing files, not create new ones
    // So we'll treat this as an update operation
    const filePath = getComponentFilePath(data.route)
    
    if (!filePath) {
      return NextResponse.json({
        success: false,
        error: `No component file found for route: ${data.route}`
      }, { status: 404 })
    }
    
    const success = await updateComponentMetadata(filePath, data)
    
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
    console.error('Error creating/updating file-based metadata:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to process request'
    }, { status: 500 })
  }
}
import { NextRequest, NextResponse } from 'next/server'
import { seedInitialPageMetadata } from '../../../../lib/seed-metadata'

export async function POST(request: NextRequest) {
  try {
    await seedInitialPageMetadata()
    
    return NextResponse.json({
      success: true,
      message: 'Initial page metadata seeded successfully'
    })
  } catch (error) {
    console.error('Error seeding page metadata:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to seed page metadata' },
      { status: 500 }
    )
  }
}
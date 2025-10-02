import { NextRequest, NextResponse } from 'next/server';

// Mock data for build-time compatibility
const mockPages = [
  {
    route: '/',
    name: 'Home Page',
    components: [
      {
        id: 'text-1',
        name: 'Hero Title - Line 39',
        path: '1',
        type: 'title' as const,
        content: 'Digital Marketing Solutions.',
        position: { line: 39, column: 0 },
        context: '<h1 className="cs_hero_title cs_extra_bold wow fadeInDown">'
      },
      {
        id: 'text-2',
        name: 'Hero Subtitle - Line 38',
        path: '1',
        type: 'text' as const,
        content: 'Best Of Your Growth, Our Mission',
        position: { line: 38, column: 0 },
        context: '<p className="cs_hero_subtitle cs_accent_color cs_semibold">'
      },
      {
        id: 'text-3',
        name: 'Hero Description - Line 41',
        path: '1',
        type: 'description' as const,
        content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even',
        position: { line: 41, column: 0 },
        context: '<p className="cs_hero_text cs_medium wow fadeInRight">'
      }
    ],
    filePath: 'src/app/page.tsx'
  },
  {
    route: '/about',
    name: 'About Page',
    components: [
      {
        id: 'text-4',
        name: 'About Title - Line 17',
        path: '1',
        type: 'title' as const,
        content: 'we\'re strategic digital marketing agency',
        position: { line: 17, column: 0 },
        context: '<h2 className="cs_fs_48 cs_mb_21 wow fadeInDown">'
      },
      {
        id: 'text-5',
        name: 'About Description - Line 18',
        path: '1',
        type: 'description' as const,
        content: 'In order to scale new customer acquisition and retention for e-commerce brands, we work across the entire customer journey.',
        position: { line: 18, column: 0 },
        context: '<p className="cs_section_heading_text mb-0">'
      }
    ],
    filePath: 'src/app/(innerpage)/about/page.tsx'
  }
];

export async function GET() {
  try {
    // For now, return mock data to avoid build issues
    // In production, you would implement the actual file system operations
    return NextResponse.json({ success: true, pages: mockPages });
  } catch (error) {
    console.error('Error fetching pages:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch pages' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { filePath, componentId, oldContent, newContent } = await request.json();
    
    if (!filePath || !oldContent || !newContent) {
      return NextResponse.json(
        { success: false, error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    // For now, simulate successful update to avoid build issues
    // In production, you would implement the actual file system operations
    console.log('Page update requested:', { filePath, componentId, oldContent, newContent });
    
    // Simulate a delay to mimic real file operations
    await new Promise(resolve => setTimeout(resolve, 100));
    
    return NextResponse.json({ 
      success: true, 
      message: 'Page updated successfully (simulated)' 
    });
  } catch (error) {
    console.error('Error updating page:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update page' },
      { status: 500 }
    );
  }
}

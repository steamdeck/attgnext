export const dynamic = 'force-dynamic'
import { NextRequest, NextResponse } from 'next/server'
import { initDatabase, runQuery } from '@/lib/database'

// Initialize database on first request
let dbInitialized = false
async function ensureDatabase() {
  if (!dbInitialized) {
    await initDatabase()
    dbInitialized = true
  }
}

// POST /api/blogs/seed - Seed sample blog data
export async function POST(request: NextRequest) {
  try {
    await ensureDatabase()

    const sampleBlogs = [
      {
        title: 'Digital Marketing Agency in Gurugram: Your Gateway to Business Growth',
        content: 'In today\'s competitive digital landscape, having a strong online presence is crucial for business success. As a leading digital marketing agency in Gurugram, we specialize in helping businesses of all sizes achieve their marketing goals through innovative strategies and data-driven approaches.',
        excerpt: 'Discover how our expert digital marketing services can transform your business presence online and drive measurable results.',
        image: '/assets/img/post_2.jpg',
        slug: 'digital-marketing-agency-in-gurugram',
        category: 'Digital Marketing',
        author: 'Digital Marketing Team',
        published_date: new Date().toISOString()
      },
      {
        title: 'Gurgaon Digital Marketing Sprouting in New Strategy',
        content: 'The digital marketing landscape in Gurgaon is evolving rapidly. Businesses are adopting new strategies to stay ahead of the competition. From SEO to social media marketing, the focus is on creating engaging content that resonates with the target audience.',
        excerpt: 'Explore the latest digital marketing strategies that Gurgaon businesses are implementing to achieve remarkable growth.',
        image: '/assets/img/post_3.jpg',
        slug: 'gurgaon-digital-marketing-sprouting-new-strategy',
        category: 'Digital Marketing',
        author: 'Marketing Expert',
        published_date: new Date(Date.now() - 86400000).toISOString()
      },
      {
        title: 'The Future of Web Development: Trends to Watch in 2026',
        content: 'Web development continues to evolve at a rapid pace. From AI-powered development tools to serverless architectures, the future of web development is exciting. Stay ahead of the curve by understanding these emerging trends.',
        excerpt: 'Learn about the latest web development trends that will shape the industry in 2026 and beyond.',
        image: '/assets/img/post_4.jpg',
        slug: 'future-web-development-trends-2026',
        category: 'Web Development',
        author: 'Tech Team',
        published_date: new Date(Date.now() - 172800000).toISOString()
      },
      {
        title: 'SEO Best Practices for Higher Search Rankings',
        content: 'Search Engine Optimization remains a critical component of digital marketing. Learn the best practices that will help your website rank higher in search results and drive organic traffic.',
        excerpt: 'Master these SEO techniques to improve your website visibility and attract more organic visitors.',
        image: '/assets/img/post_5.jpg',
        slug: 'seo-best-practices-search-rankings',
        category: 'SEO',
        author: 'SEO Specialist',
        published_date: new Date(Date.now() - 259200000).toISOString()
      },
      {
        title: 'Social Media Marketing: Building Your Brand Online',
        content: 'Social media has become an essential platform for brand building and customer engagement. Discover how to create effective social media campaigns that connect with your audience.',
        excerpt: 'Build a strong social media presence with these proven marketing strategies and engagement tactics.',
        image: '/assets/img/post_6.jpg',
        slug: 'social-media-marketing-building-brand',
        category: 'Social Media',
        author: 'Social Media Team',
        published_date: new Date(Date.now() - 345600000).toISOString()
      },
      {
        title: 'PPC Advertising: Maximizing Your ROI',
        content: 'Pay-per-click advertising can deliver immediate results when done correctly. Learn how to optimize your PPC campaigns for maximum return on investment.',
        excerpt: 'Discover strategies to improve your PPC performance and get more value from your advertising budget.',
        image: '/assets/img/post_7.jpg',
        slug: 'ppc-advertising-maximizing-roi',
        category: 'PPC',
        author: 'Ads Manager',
        published_date: new Date(Date.now() - 432000000).toISOString()
      }
    ]

    let seededCount = 0
    for (const blog of sampleBlogs) {
      try {
        await runQuery(
          `INSERT INTO blogs (title, content, excerpt, image, slug, category, author, published_date, status)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'published')`,
          [blog.title, blog.content, blog.excerpt, blog.image, blog.slug, blog.category, blog.author, blog.published_date]
        )
        seededCount++
      } catch (err: any) {
        if (!err.message?.includes('UNIQUE constraint failed')) {
          console.error('Error seeding blog:', err)
        }
      }
    }

    return NextResponse.json({
      success: true,
      message: `Successfully seeded ${seededCount} blog posts`,
      seededCount
    }, { status: 201 })

  } catch (error) {
    console.error('Error seeding blogs:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

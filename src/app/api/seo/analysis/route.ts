import { NextRequest, NextResponse } from 'next/server'
export const dynamic = 'force-dynamic'
import { initDatabase, getDatabase, allQuery } from '../../../../lib/database'

// Initialize database on first request
let dbInitialized = false
async function ensureDatabase() {
  if (!dbInitialized) {
    await initDatabase()
    dbInitialized = true
  }
}

// GET /api/seo/analysis - Get SEO analysis for all images
export async function GET(request: NextRequest) {
  try {
    await ensureDatabase()

    // Get all images
    const images = await allQuery('SELECT * FROM images ORDER BY seo_score ASC')

    // Analyze images
    const analysis = {
      totalImages: images.length,
      averageSeoScore: 0,
      seoDistribution: {
        excellent: 0, // 80-100
        good: 0,      // 60-79
        fair: 0,      // 40-59
        poor: 0       // 0-39
      },
      issues: {
        missingAltText: 0,
        missingTitle: 0,
        missingCaption: 0,
        missingDescription: 0,
        missingTags: 0,
        largeFileSize: 0,
        lowResolution: 0
      },
      recommendations: [] as string[]
    }

    let totalSeoScore = 0

    for (const image of images) {
      totalSeoScore += image.seo_score

      // Categorize SEO score
      if (image.seo_score >= 80) {
        analysis.seoDistribution.excellent++
      } else if (image.seo_score >= 60) {
        analysis.seoDistribution.good++
      } else if (image.seo_score >= 40) {
        analysis.seoDistribution.fair++
      } else {
        analysis.seoDistribution.poor++
      }

      // Check for issues
      if (!image.alt_text) {
        analysis.issues.missingAltText++
      }
      if (!image.title) {
        analysis.issues.missingTitle++
      }
      if (!image.caption) {
        analysis.issues.missingCaption++
      }
      if (!image.description) {
        analysis.issues.missingDescription++
      }
      if (!image.tags) {
        analysis.issues.missingTags++
      }
      if (image.file_size > 2 * 1024 * 1024) { // 2MB
        analysis.issues.largeFileSize++
      }
      if (image.width < 800 || image.height < 600) {
        analysis.issues.lowResolution++
      }
    }

    analysis.averageSeoScore = images.length > 0 ? Math.round(totalSeoScore / images.length) : 0

    // Generate recommendations
    if (analysis.issues.missingAltText > 0) {
      analysis.recommendations.push(`Add alt text to ${analysis.issues.missingAltText} images for better accessibility and SEO`)
    }
    if (analysis.issues.missingTitle > 0) {
      analysis.recommendations.push(`Add titles to ${analysis.issues.missingTitle} images for better SEO`)
    }
    if (analysis.issues.largeFileSize > 0) {
      analysis.recommendations.push(`Optimize ${analysis.issues.largeFileSize} large images to improve page load speed`)
    }
    if (analysis.issues.lowResolution > 0) {
      analysis.recommendations.push(`Consider using higher resolution images for ${analysis.issues.lowResolution} images`)
    }
    if (analysis.seoDistribution.poor > 0) {
      analysis.recommendations.push(`Improve SEO metadata for ${analysis.seoDistribution.poor} images with poor SEO scores`)
    }

    // Get images with specific issues
    const imagesWithIssues = {
      missingAltText: images.filter(img => !img.alt_text).slice(0, 10),
      missingTitle: images.filter(img => !img.title).slice(0, 10),
      lowSeoScore: images.filter(img => img.seo_score < 40).slice(0, 10),
      largeFiles: images.filter(img => img.file_size > 2 * 1024 * 1024).slice(0, 10)
    }

    return NextResponse.json({
      analysis,
      imagesWithIssues
    })

  } catch (error) {
    console.error('Error analyzing SEO:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
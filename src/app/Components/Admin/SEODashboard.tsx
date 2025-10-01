'use client'

import { useState, useEffect } from 'react'

interface SEOAnalysis {
  totalImages: number
  averageSeoScore: number
  seoDistribution: {
    excellent: number
    good: number
    fair: number
    poor: number
  }
  issues: {
    missingAltText: number
    missingTitle: number
    missingCaption: number
    missingDescription: number
    missingTags: number
    largeFileSize: number
    lowResolution: number
  }
  recommendations: string[]
}

interface ImagesWithIssues {
  missingAltText: any[]
  missingTitle: any[]
  lowSeoScore: any[]
  largeFiles: any[]
}

export default function SEODashboard() {
  const [analysis, setAnalysis] = useState<SEOAnalysis | null>(null)
  const [imagesWithIssues, setImagesWithIssues] = useState<ImagesWithIssues | null>(null)
  const [loading, setLoading] = useState(true)

  // Fetch SEO analysis
  const fetchAnalysis = async () => {
    try {
      setLoading(true)

      const response = await fetch('/api/seo/analysis')

      if (response.ok) {
        const data = await response.json()
        setAnalysis(data.analysis)
        setImagesWithIssues(data.imagesWithIssues)
      }
    } catch (error) {
      console.error('Error fetching SEO analysis:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAnalysis()
  }, [])

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!analysis) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">No SEO analysis data available</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Overview */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">SEO Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600">{analysis.totalImages}</div>
            <div className="text-gray-600">Total Images</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">{analysis.averageSeoScore}</div>
            <div className="text-gray-600">Average SEO Score</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">{analysis.recommendations.length}</div>
            <div className="text-gray-600">Recommendations</div>
          </div>
        </div>
      </div>

      {/* SEO Score Distribution */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">SEO Score Distribution</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{analysis.seoDistribution.excellent}</div>
            <div className="text-sm text-green-700">Excellent (80-100)</div>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">{analysis.seoDistribution.good}</div>
            <div className="text-sm text-yellow-700">Good (60-79)</div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">{analysis.seoDistribution.fair}</div>
            <div className="text-sm text-orange-700">Fair (40-59)</div>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <div className="text-2xl font-bold text-red-600">{analysis.seoDistribution.poor}</div>
            <div className="text-sm text-red-700">Poor (0-39)</div>
          </div>
        </div>
      </div>

      {/* Issues */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Issues Found</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border border-red-200 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Missing Alt Text</span>
              <span className="text-lg font-bold text-red-600">{analysis.issues.missingAltText}</span>
            </div>
          </div>
          <div className="p-4 border border-orange-200 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Missing Title</span>
              <span className="text-lg font-bold text-orange-600">{analysis.issues.missingTitle}</span>
            </div>
          </div>
          <div className="p-4 border border-yellow-200 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Large File Size</span>
              <span className="text-lg font-bold text-yellow-600">{analysis.issues.largeFileSize}</span>
            </div>
          </div>
          <div className="p-4 border border-blue-200 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Low Resolution</span>
              <span className="text-lg font-bold text-blue-600">{analysis.issues.lowResolution}</span>
            </div>
          </div>
          <div className="p-4 border border-purple-200 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Missing Caption</span>
              <span className="text-lg font-bold text-purple-600">{analysis.issues.missingCaption}</span>
            </div>
          </div>
          <div className="p-4 border border-indigo-200 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Missing Tags</span>
              <span className="text-lg font-bold text-indigo-600">{analysis.issues.missingTags}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommendations</h3>
        
        {analysis.recommendations.length === 0 ? (
          <div className="text-center py-8">
            <span className="text-4xl">🎉</span>
            <p className="text-gray-600 mt-2">Great job! No major SEO issues found.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {analysis.recommendations.map((recommendation, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                <span className="text-blue-600 mt-1">💡</span>
                <p className="text-blue-800">{recommendation}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Images with Issues */}
      {imagesWithIssues && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Images Needing Attention</h3>
          
          <div className="space-y-6">
            {/* Missing Alt Text */}
            {imagesWithIssues.missingAltText.length > 0 && (
              <div>
                <h4 className="font-medium text-red-700 mb-3">Missing Alt Text ({imagesWithIssues.missingAltText.length})</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {imagesWithIssues.missingAltText.map((image) => (
                    <div key={image.id} className="border border-red-200 rounded-lg p-3">
                      <div className="flex items-center space-x-3">
                        <img
                          src={image.file_path}
                          alt=""
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{image.original_name}</p>
                          <p className="text-xs text-gray-500">SEO Score: {image.seo_score}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Low SEO Score */}
            {imagesWithIssues.lowSeoScore.length > 0 && (
              <div>
                <h4 className="font-medium text-orange-700 mb-3">Low SEO Score ({imagesWithIssues.lowSeoScore.length})</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {imagesWithIssues.lowSeoScore.map((image) => (
                    <div key={image.id} className="border border-orange-200 rounded-lg p-3">
                      <div className="flex items-center space-x-3">
                        <img
                          src={image.file_path}
                          alt=""
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{image.original_name}</p>
                          <p className="text-xs text-orange-600">SEO Score: {image.seo_score}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Large Files */}
            {imagesWithIssues.largeFiles.length > 0 && (
              <div>
                <h4 className="font-medium text-yellow-700 mb-3">Large File Size ({imagesWithIssues.largeFiles.length})</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {imagesWithIssues.largeFiles.map((image) => (
                    <div key={image.id} className="border border-yellow-200 rounded-lg p-3">
                      <div className="flex items-center space-x-3">
                        <img
                          src={image.file_path}
                          alt=""
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{image.original_name}</p>
                          <p className="text-xs text-yellow-600">
                            Size: {Math.round(image.file_size / 1024 / 1024)}MB
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

'use client'

import { useState, useEffect } from 'react'

interface Image {
  id: number
  filename: string
  original_name: string
  title: string
  alt_text: string
  caption: string
  description: string
  file_path: string
  file_size: number
  width: number
  height: number
  format: string
  tags: string
  upload_date: string
  last_modified: string
  seo_score: number
  usage_count: number
}

interface ImageUsage {
  id: number
  image_id: number
  page_path: string
  page_title: string
  usage_context: string
  created_at: string
}

interface ImageDetailModalProps {
  image: Image
  onClose: () => void
  onEdit: () => void
  onDelete: () => void
}

export default function ImageDetailModal({ image, onClose, onEdit, onDelete }: ImageDetailModalProps) {
  const [usage, setUsage] = useState<ImageUsage[]>([])
  const [loadingUsage, setLoadingUsage] = useState(true)

  // Fetch usage information
  useEffect(() => {
    const fetchUsage = async () => {
      try {
        const response = await fetch(`/api/images/${image.id}/usage`)

        if (response.ok) {
          const data = await response.json()
          setUsage(data.usage)
        }
      } catch (error) {
        console.error('Error fetching usage:', error)
      } finally {
        setLoadingUsage(false)
      }
    }

    fetchUsage()
  }, [image.id])

  // Format file size
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  // Copy to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // You could add a toast notification here
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Image Details</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Preview */}
            <div className="space-y-6">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={image.file_path}
                  alt={image.alt_text || image.original_name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quick Actions */}
              <div className="flex space-x-3">
                <button
                  onClick={onEdit}
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
                >
                  Edit Image
                </button>
                <button
                  onClick={() => copyToClipboard(image.file_path)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                  title="Copy image URL"
                >
                  📋
                </button>
                <button
                  onClick={onDelete}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md font-medium transition-colors"
                >
                  🗑️
                </button>
              </div>
            </div>

            {/* Image Information */}
            <div className="space-y-6">
              {/* Basic Info */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Filename</label>
                    <p className="text-gray-900">{image.original_name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">File Size</label>
                    <p className="text-gray-900">{formatFileSize(image.file_size)}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Dimensions</label>
                    <p className="text-gray-900">{image.width} × {image.height} pixels</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Format</label>
                    <p className="text-gray-900">{image.format}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Upload Date</label>
                    <p className="text-gray-900">{formatDate(image.upload_date)}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Last Modified</label>
                    <p className="text-gray-900">{formatDate(image.last_modified)}</p>
                  </div>
                </div>
              </div>

              {/* SEO Information */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">SEO Information</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-medium text-gray-600">SEO Score</label>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        image.seo_score >= 80 ? 'bg-green-100 text-green-800' :
                        image.seo_score >= 60 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {image.seo_score}/100
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          image.seo_score >= 80 ? 'bg-green-500' :
                          image.seo_score >= 60 ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${image.seo_score}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-600">Title</label>
                    <p className="text-gray-900">{image.title || 'Not set'}</p>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-600">Alt Text</label>
                    <p className="text-gray-900">{image.alt_text || 'Not set'}</p>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-600">Caption</label>
                    <p className="text-gray-900">{image.caption || 'Not set'}</p>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-600">Description</label>
                    <p className="text-gray-900">{image.description || 'Not set'}</p>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-600">Tags</label>
                    <p className="text-gray-900">{image.tags || 'Not set'}</p>
                  </div>
                </div>
              </div>

              {/* Usage Information */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Usage Information ({usage.length})
                </h3>
                {loadingUsage ? (
                  <div className="text-center py-4">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto"></div>
                    <p className="text-gray-600 mt-2">Loading usage data...</p>
                  </div>
                ) : usage.length === 0 ? (
                  <div className="text-center py-4">
                    <span className="text-4xl">📄</span>
                    <p className="text-gray-600 mt-2">This image is not used on any pages yet</p>
                  </div>
                ) : (
                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    {usage.map((usageItem) => (
                      <div key={usageItem.id} className="border border-gray-200 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">{usageItem.page_title || usageItem.page_path}</p>
                            <p className="text-sm text-gray-600">{usageItem.page_path}</p>
                            {usageItem.usage_context && (
                              <p className="text-xs text-gray-500 mt-1">{usageItem.usage_context}</p>
                            )}
                          </div>
                          <div className="text-xs text-gray-500">
                            {formatDate(usageItem.created_at)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

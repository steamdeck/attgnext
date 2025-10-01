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

interface ImageEditModalProps {
  image: Image
  onClose: () => void
  onUpdate: () => void
}

export default function ImageEditModal({ image, onClose, onUpdate }: ImageEditModalProps) {
  const [formData, setFormData] = useState({
    title: image.title || '',
    alt_text: image.alt_text || '',
    caption: image.caption || '',
    description: image.description || '',
    tags: image.tags || ''
  })
  const [saving, setSaving] = useState(false)
  const [seoScore, setSeoScore] = useState(image.seo_score)

  // Calculate SEO score
  useEffect(() => {
    let score = 0
    if (formData.title) score += 20
    if (formData.alt_text) score += 30
    if (formData.caption) score += 15
    if (formData.description) score += 20
    if (formData.tags) score += 15
    setSeoScore(score)
  }, [formData])

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const response = await fetch(`/api/images/${image.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        onUpdate()
        onClose()
      } else {
        throw new Error('Failed to update image')
      }
    } catch (error) {
      console.error('Error updating image:', error)
      alert('Error updating image. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Generate alt text suggestion
  const generateAltText = () => {
    const title = formData.title || image.original_name
    const suggestedAlt = `Image of ${title.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim()}`
    setFormData(prev => ({ ...prev, alt_text: suggestedAlt }))
  }

  // Format file size
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Edit Image</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Image Preview */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={image.file_path}
                  alt={image.alt_text || image.original_name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Image Info */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-3">Image Information</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Filename:</span>
                    <span className="font-medium">{image.original_name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Size:</span>
                    <span className="font-medium">{formatFileSize(image.file_size)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dimensions:</span>
                    <span className="font-medium">{image.width} × {image.height}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Format:</span>
                    <span className="font-medium">{image.format}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Usage Count:</span>
                    <span className="font-medium">{image.usage_count}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Edit Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* SEO Score */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">SEO Score</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      seoScore >= 80 ? 'bg-green-100 text-green-800' :
                      seoScore >= 60 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {seoScore}/100
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${
                        seoScore >= 80 ? 'bg-green-500' :
                        seoScore >= 60 ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}
                      style={{ width: `${seoScore}%` }}
                    ></div>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter image title"
                  />
                  <p className="text-xs text-gray-500 mt-1">Used for SEO and accessibility</p>
                </div>

                {/* Alt Text */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="alt_text" className="block text-sm font-medium text-gray-700">
                      Alt Text <span className="text-red-500">*</span>
                    </label>
                    <button
                      type="button"
                      onClick={generateAltText}
                      className="text-xs text-indigo-600 hover:text-indigo-700"
                    >
                      Generate
                    </button>
                  </div>
                  <textarea
                    id="alt_text"
                    name="alt_text"
                    value={formData.alt_text}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Describe the image for screen readers and SEO"
                  />
                  <p className="text-xs text-gray-500 mt-1">Critical for accessibility and SEO</p>
                </div>

                {/* Caption */}
                <div>
                  <label htmlFor="caption" className="block text-sm font-medium text-gray-700 mb-2">
                    Caption
                  </label>
                  <input
                    type="text"
                    id="caption"
                    name="caption"
                    value={formData.caption}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Optional caption for the image"
                  />
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Detailed description of the image"
                  />
                </div>

                {/* Tags */}
                <div>
                  <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                    Tags
                  </label>
                  <input
                    type="text"
                    id="tags"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Comma-separated tags for categorization"
                  />
                  <p className="text-xs text-gray-500 mt-1">e.g., hero, banner, product, team</p>
                </div>

                {/* Actions */}
                <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white rounded-md font-medium transition-colors"
                  >
                    {saving ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState, useEffect } from 'react'
import ImageUploadModal from '../../Components/Admin/ImageUploadModal'
import ImageEditModal from '../../Components/Admin/ImageEditModal'
import ImageDetailModal from '../../Components/Admin/ImageDetailModal'
import SEODashboard from '../../Components/Admin/SEODashboard'

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

interface Pagination {
  page: number
  limit: number
  total: number
  totalPages: number
}

export default function ImageManagementPage() {
  const [images, setImages] = useState<Image[]>([])
  const [loading, setLoading] = useState(true)
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 20,
    total: 0,
    totalPages: 0
  })
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('upload_date')
  const [sortOrder, setSortOrder] = useState('DESC')
  const [selectedImage, setSelectedImage] = useState<Image | null>(null)
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [scanning, setScanning] = useState(false)
  const [activeTab, setActiveTab] = useState('images')

  // Fetch images
  const fetchImages = async () => {
    try {
      setLoading(true)

      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString(),
        search: searchTerm,
        sortBy,
        sortOrder
      })

      const response = await fetch(`/api/images?${params}`)

      if (response.ok) {
        const data = await response.json()
        setImages(data.images)
        setPagination(data.pagination)
      }
    } catch (error) {
      console.error('Error fetching images:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchImages()
  }, [pagination.page, searchTerm, sortBy, sortOrder])

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setPagination(prev => ({ ...prev, page: 1 }))
    fetchImages()
  }

  // Handle image selection
  const handleImageClick = (image: Image) => {
    setSelectedImage(image)
    setShowDetailModal(true)
  }

  // Handle edit
  const handleEdit = (image: Image) => {
    setSelectedImage(image)
    setShowEditModal(true)
  }

  // Handle delete
  const handleDelete = async (image: Image) => {
    if (!confirm(`Are you sure you want to delete "${image.original_name}"?`)) {
      return
    }

    try {
      const response = await fetch(`/api/images/${image.id}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        fetchImages()
        setShowDetailModal(false)
        setSelectedImage(null)
      }
    } catch (error) {
      console.error('Error deleting image:', error)
    }
  }

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
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  // Scan existing images
  const handleScanImages = async () => {
    setScanning(true)
    try {
      const response = await fetch('/api/images/scan', {
        method: 'POST'
      })

      if (response.ok) {
        const data = await response.json()
        alert(`Scan completed! Found ${data.scannedCount} new images.`)
        fetchImages()
      }
    } catch (error) {
      console.error('Error scanning images:', error)
      alert('Error scanning images. Please try again.')
    } finally {
      setScanning(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Image Management</h1>
          <p className="text-gray-600 mt-1">Manage all website images, metadata, and SEO optimization</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={handleScanImages}
            disabled={scanning}
            className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-md font-medium transition-colors"
          >
            {scanning ? 'Scanning...' : 'Scan Existing Images'}
          </button>
          <button
            onClick={() => setShowUploadModal(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
          >
            Upload Images
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('images')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'images'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Images
          </button>
          <button
            onClick={() => setActiveTab('seo')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'seo'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            SEO Analysis
          </button>
        </nav>
      </div>

      {/* Content */}
      {activeTab === 'images' ? (
        <>
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <span className="text-indigo-600 text-xl">🖼️</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Images</p>
              <p className="text-2xl font-bold text-gray-900">{pagination.total}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <span className="text-green-600 text-xl">📊</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Avg SEO Score</p>
              <p className="text-2xl font-bold text-gray-900">
                {images.length > 0 ? Math.round(images.reduce((acc, img) => acc + img.seo_score, 0) / images.length) : 0}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <span className="text-yellow-600 text-xl">⚠️</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Missing Alt Text</p>
              <p className="text-2xl font-bold text-gray-900">
                {images.filter(img => !img.alt_text).length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <span className="text-blue-600 text-xl">📈</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Usage</p>
              <p className="text-2xl font-bold text-gray-900">
                {images.reduce((acc, img) => acc + img.usage_count, 0)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-lg shadow">
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search images by name, title, alt text, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="upload_date">Upload Date</option>
              <option value="filename">Filename</option>
              <option value="file_size">File Size</option>
              <option value="seo_score">SEO Score</option>
              <option value="usage_count">Usage Count</option>
            </select>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="DESC">Descending</option>
              <option value="ASC">Ascending</option>
            </select>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Images Grid */}
      <div className="bg-white rounded-lg shadow">
        {loading ? (
          <div className="p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading images...</p>
          </div>
        ) : images.length === 0 ? (
          <div className="p-8 text-center">
            <span className="text-6xl">🖼️</span>
            <h3 className="mt-4 text-lg font-medium text-gray-900">No images found</h3>
            <p className="mt-2 text-gray-600">Upload your first image to get started</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleImageClick(image)}
              >
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <img
                    src={image.file_path}
                    alt={image.alt_text || image.original_name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      target.parentElement!.innerHTML = '<div class="flex items-center justify-center h-full text-gray-400"><span class="text-4xl">🖼️</span></div>'
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 truncate" title={image.original_name}>
                    {image.original_name}
                  </h3>
                  {image.title && (
                    <p className="text-sm text-gray-600 truncate mt-1" title={image.title}>
                      {image.title}
                    </p>
                  )}
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        image.seo_score >= 80 ? 'bg-green-100 text-green-800' :
                        image.seo_score >= 60 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        SEO: {image.seo_score}
                      </span>
                      <span className="text-xs text-gray-500">
                        {formatFileSize(image.file_size)}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleEdit(image)
                        }}
                        className="p-1 text-gray-400 hover:text-indigo-600 transition-colors"
                        title="Edit"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleDelete(image)
                        }}
                        className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                        title="Delete"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {pagination.totalPages > 1 && (
          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Showing {((pagination.page - 1) * pagination.limit) + 1} to{' '}
                {Math.min(pagination.page * pagination.limit, pagination.total)} of{' '}
                {pagination.total} results
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setPagination(prev => ({ ...prev, page: prev.page - 1 }))}
                  disabled={pagination.page === 1}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Previous
                </button>
                <span className="px-3 py-1 text-sm">
                  Page {pagination.page} of {pagination.totalPages}
                </span>
                <button
                  onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
                  disabled={pagination.page === pagination.totalPages}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
        </>
      ) : (
        <SEODashboard />
      )}

      {/* Modals */}
      {showUploadModal && (
        <ImageUploadModal
          onClose={() => setShowUploadModal(false)}
          onUpload={fetchImages}
        />
      )}

      {showEditModal && selectedImage && (
        <ImageEditModal
          image={selectedImage}
          onClose={() => {
            setShowEditModal(false)
            setSelectedImage(null)
          }}
          onUpdate={fetchImages}
        />
      )}

      {showDetailModal && selectedImage && (
        <ImageDetailModal
          image={selectedImage}
          onClose={() => {
            setShowDetailModal(false)
            setSelectedImage(null)
          }}
          onEdit={() => {
            setShowDetailModal(false)
            setShowEditModal(true)
          }}
          onDelete={() => {
            setShowDetailModal(false)
            handleDelete(selectedImage)
          }}
        />
      )}
    </div>
  )
}

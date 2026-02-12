'use client'

import React, { useState } from 'react'
import { useAllFilePageMetadata, useUpdateFilePageMetadata, useCreateFilePageMetadata } from '@/hooks/useFilePageMetadata'
import { PageMetadataRecord } from '@/lib/database'

const SEODashboard = () => {
  const [activeTab, setActiveTab] = useState<'list' | 'editor'>('list')
  const [editingPage, setEditingPage] = useState<PageMetadataRecord | null>(null)
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [showImportExport, setShowImportExport] = useState(false)
  
  const {
    metadata: pages,
    loading,
    error,
    pagination,
    refresh,
    setPage,
    setSearch
  } = useAllFilePageMetadata(1, '')

  const { updateMetadata: updateFileMetadata, loading: updateLoading } = useUpdateFilePageMetadata('')
  const { createMetadata, loading: createLoading } = useCreateFilePageMetadata()
  
  // Wrapper to ensure correct route is used
  const updateMetadata = async (updates: Partial<PageMetadataRecord>) => {
    if (!editingPage?.route) {
      return { success: false, error: 'No route selected' }
    }
    return updateFileMetadata(editingPage.route, updates)
  }

  const [formData, setFormData] = useState<Omit<PageMetadataRecord, 'id' | 'created_at' | 'updated_at'>>({
    route: '',
    page_name: '',
    title: '',
    meta_title: '',
    meta_description: '',
    keywords: '',
    og_title: '',
    og_description: '',
    og_image: '',
    canonical_url: '',
    robots_index: true,
    robots_follow: true,
    twitter_title: '',
    twitter_description: '',
    twitter_image: ''
  })

  // Import/Export handlers
  const handleExport = () => {
    const dataStr = JSON.stringify(pages, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `seo-metadata-${new Date().toISOString().split('T')[0]}.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = async (e) => {
      try {
        const content = e.target?.result as string
        const importedData: PageMetadataRecord[] = JSON.parse(content)
        
        // Validate and import data
        for (const page of importedData) {
          try {
            await createMetadata({
              route: page.route,
              page_name: page.page_name,
              title: page.title || '',
              meta_title: page.meta_title || '',
              meta_description: page.meta_description || '',
              keywords: page.keywords || '',
              og_title: page.og_title || '',
              og_description: page.og_description || '',
              og_image: page.og_image || '',
              canonical_url: page.canonical_url || '',
              robots_index: page.robots_index,
              robots_follow: page.robots_follow,
              twitter_title: page.twitter_title || '',
              twitter_description: page.twitter_description || '',
              twitter_image: page.twitter_image || ''
            })
          } catch (error) {
            console.error(`Error importing ${page.route}:`, error)
          }
        }
        
        refresh()
        alert('Import completed successfully!')
      } catch (error) {
        alert('Error parsing import file. Please check the format.')
      }
    }
    reader.readAsText(file)
  }

  const handleEdit = (page: PageMetadataRecord) => {
    setEditingPage(page)
    setFormData({
      route: page.route,
      page_name: page.page_name,
      title: page.title || '',
      meta_title: page.meta_title || '',
      meta_description: page.meta_description || '',
      keywords: page.keywords || '',
      og_title: page.og_title || '',
      og_description: page.og_description || '',
      og_image: page.og_image || '',
      canonical_url: page.canonical_url || '',
      robots_index: page.robots_index,
      robots_follow: page.robots_follow,
      twitter_title: page.twitter_title || '',
      twitter_description: page.twitter_description || '',
      twitter_image: page.twitter_image || ''
    })
    setActiveTab('editor')
  }

  const handleCreateNew = () => {
    setEditingPage(null)
    setFormData({
      route: '',
      page_name: '',
      title: '',
      meta_title: '',
      meta_description: '',
      keywords: '',
      og_title: '',
      og_description: '',
      og_image: '',
      canonical_url: '',
      robots_index: true,
      robots_follow: true,
      twitter_title: '',
      twitter_description: '',
      twitter_image: ''
    })
    setShowCreateForm(true)
    setActiveTab('editor')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      let result
      if (editingPage) {
        // Update existing page
        const updates = { ...formData }
        delete (updates as any).route // Don't update route
        result = await updateMetadata(updates)
      } else {
        // Create new page
        result = await createMetadata(formData)
      }
      
      if (result.success) {
        refresh()
        setActiveTab('list')
        setShowCreateForm(false)
        setEditingPage(null)
      } else {
        alert(`Error saving: ${result.error || 'Unknown error'}`)
      }
    } catch (error) {
      console.error('Error saving page metadata:', error)
      alert('Error saving page metadata. Check console for details.')
    }
  }

  const handleCancel = () => {
    setActiveTab('list')
    setShowCreateForm(false)
    setEditingPage(null)
  }

  if (activeTab === 'editor') {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            {editingPage ? 'Edit Page SEO' : 'Create New Page SEO'}
          </h2>
          <button
            onClick={handleCancel}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            ← Back to List
          </button>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Route *
              </label>
              <input
                type="text"
                required
                disabled={!!editingPage}
                className={`w-full px-3 py-2 border rounded-md ${editingPage ? 'bg-gray-100' : 'focus:ring-2 focus:ring-indigo-500'}`}
                value={formData.route}
                onChange={(e) => setFormData({...formData, route: e.target.value})}
                placeholder="/about or /services/seo"
              />
              <p className="text-xs text-gray-500 mt-1">Must start with / (e.g., /about, /services/seo)</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Page Name *
              </label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                value={formData.page_name}
                onChange={(e) => setFormData({...formData, page_name: e.target.value})}
                placeholder="About Us Page"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Page Title
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              placeholder="About AT Tech Global - Your Digital Marketing Partner"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Meta Title
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
              value={formData.meta_title}
              onChange={(e) => setFormData({...formData, meta_title: e.target.value})}
              placeholder="About AT Tech Global | Digital Marketing Experts"
              maxLength={60}
            />
            <p className="text-xs text-gray-500 mt-1">{formData.meta_title.length}/60 characters</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Meta Description
            </label>
            <textarea
              rows={3}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
              value={formData.meta_description}
              onChange={(e) => setFormData({...formData, meta_description: e.target.value})}
              placeholder="Learn about AT Tech Global's mission, vision, and how we help businesses grow through digital marketing excellence..."
              maxLength={160}
            />
            <p className="text-xs text-gray-500 mt-1">{formData.meta_description.length}/160 characters</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Keywords
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
              value={formData.keywords}
              onChange={(e) => setFormData({...formData, keywords: e.target.value})}
              placeholder="digital marketing, seo, web development, gurugram"
            />
            <p className="text-xs text-gray-500 mt-1">Comma-separated keywords</p>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Social Media Optimization</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  OG Title
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  value={formData.og_title}
                  onChange={(e) => setFormData({...formData, og_title: e.target.value})}
                  placeholder="About AT Tech Global - Digital Marketing Agency"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  OG Image URL
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  value={formData.og_image}
                  onChange={(e) => setFormData({...formData, og_image: e.target.value})}
                  placeholder="https://example.com/og-image.jpg or /assets/img/hero-bg.jpg"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  OG Description
                </label>
                <textarea
                  rows={2}
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  value={formData.og_description}
                  onChange={(e) => setFormData({...formData, og_description: e.target.value})}
                  placeholder="Discover how AT Tech Global transforms businesses through innovative digital marketing solutions..."
                />
              </div>
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Advanced Settings</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Canonical URL
                </label>
                <input
                  type="url"
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  value={formData.canonical_url}
                  onChange={(e) => setFormData({...formData, canonical_url: e.target.value})}
                  placeholder="https://attechglobal.com/about"
                />
              </div>

              <div className="flex items-center space-x-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    checked={formData.robots_index}
                    onChange={(e) => setFormData({...formData, robots_index: e.target.checked})}
                  />
                  <span className="ml-2 text-sm text-gray-700">Allow indexing</span>
                </label>
                
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    checked={formData.robots_follow}
                    onChange={(e) => setFormData({...formData, robots_follow: e.target.checked})}
                  />
                  <span className="ml-2 text-sm text-gray-700">Allow following</span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-6 border-t">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={updateLoading || createLoading}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50"
            >
              {updateLoading || createLoading ? 'Saving...' : (editingPage ? 'Update Page' : 'Create Page')}
            </button>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">SEO Management</h2>
        <div className="flex space-x-3">
          <button
            onClick={() => setShowImportExport(!showImportExport)}
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
          >
            Import/Export
          </button>
          <button
            onClick={handleCreateNew}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center"
          >
            <span className="mr-2">+</span>
            Add New Page
          </button>
        </div>
      </div>

      {/* Import/Export Panel */}
      {showImportExport && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Import/Export SEO Data</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Export Current Data</h4>
              <p className="text-sm text-gray-500 mb-3">Download all current SEO metadata as JSON file</p>
              <button
                onClick={handleExport}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Export JSON
              </button>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Import SEO Data</h4>
              <p className="text-sm text-gray-500 mb-3">Upload JSON file to import SEO metadata</p>
              <input
                type="file"
                accept=".json"
                onChange={handleImport}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-medium
                  file:bg-indigo-600 file:text-white
                  hover:file:bg-indigo-700"
              />
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search pages..."
                className="pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 w-full sm:w-80"
                onChange={(e) => setSearch(e.target.value)}
              />
              <svg className="absolute left-3 top-2.5 h-3.5 w-3.5 text-gray-400" width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="p-6 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto"></div>
            <p className="mt-2 text-gray-600">Loading pages...</p>
          </div>
        ) : pages.length === 0 ? (
          <div className="p-12 text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No pages found</h3>
            <p className="mt-1 text-sm text-gray-500">Get started by adding your first page SEO metadata.</p>
            <div className="mt-6">
              <button
                onClick={handleCreateNew}
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <span className="mr-2">+</span>
                Add First Page
              </button>
            </div>
          </div>
        ) : (
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Page
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Route
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Meta Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Updated
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pages.map((page) => (
                  <tr key={page.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{page.page_name}</div>
                      <div className="text-sm text-gray-500">{page.title || '-'}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {page.route}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                      {page.meta_title || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(page.updated_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleEdit(page)}
                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {!loading && pages.length > 0 && (
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
              <button
                onClick={() => setPage(pagination.currentPage - 1)}
                disabled={!pagination.hasPrev}
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() => setPage(pagination.currentPage + 1)}
                disabled={!pagination.hasNext}
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
              >
                Next
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">{(pagination.currentPage - 1) * 20 + 1}</span> to{' '}
                  <span className="font-medium">{Math.min(pagination.currentPage * 20, pagination.totalCount)}</span> of{' '}
                  <span className="font-medium">{pagination.totalCount}</span> results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                  <button
                    onClick={() => setPage(pagination.currentPage - 1)}
                    disabled={!pagination.hasPrev}
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                  >
                    Previous
                  </button>
                  
                  {[...Array(Math.min(5, pagination.totalPages))].map((_, i) => {
                    const pageNum = i + 1
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setPage(pageNum)}
                        className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                          pagination.currentPage === pageNum
                            ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                            : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                        }`}
                      >
                        {pageNum}
                      </button>
                    )
                  })}
                  
                  <button
                    onClick={() => setPage(pagination.currentPage + 1)}
                    disabled={!pagination.hasNext}
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                  >
                    Next
                  </button>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SEODashboard
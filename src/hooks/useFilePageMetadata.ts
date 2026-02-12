'use client'

import { useEffect, useState } from 'react'
import { PageMetadataRecord } from '@/lib/database'

interface UseFilePageMetadataReturn {
  metadata: PageMetadataRecord | null
  loading: boolean
  error: string | null
  refresh: () => void
}

export function useFilePageMetadata(route: string): UseFilePageMetadataReturn {
  const [metadata, setMetadata] = useState<PageMetadataRecord | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchMetadata = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const encodedRoute = encodeURIComponent(route)
      const response = await fetch(`/api/seo/files/${encodedRoute}`)
      const result = await response.json()
      
      if (result.success) {
        setMetadata(result.data)
      } else {
        setError(result.error || 'Failed to fetch metadata')
      }
    } catch (err) {
      setError('Network error occurred')
      console.error('Error fetching page metadata:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (route) {
      fetchMetadata()
    }
  }, [route])

  return {
    metadata,
    loading,
    error,
    refresh: fetchMetadata
  }
}

interface UseAllFilePageMetadataReturn {
  metadata: PageMetadataRecord[]
  loading: boolean
  error: string | null
  pagination: {
    currentPage: number
    totalPages: number
    totalCount: number
    hasNext: boolean
    hasPrev: boolean
  }
  refresh: () => void
  setPage: (page: number) => void
  setSearch: (search: string) => void
}

export function useAllFilePageMetadata(initialPage = 1, initialSearch = ''): UseAllFilePageMetadataReturn {
  const [metadata, setMetadata] = useState<PageMetadataRecord[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [pagination, setPagination] = useState({
    currentPage: initialPage,
    totalPages: 0,
    totalCount: 0,
    hasNext: false,
    hasPrev: false
  })
  const [search, setSearchState] = useState(initialSearch)

  const fetchAllMetadata = async (page: number, searchTerm: string) => {
    try {
      setLoading(true)
      setError(null)
      
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '20',
        ...(searchTerm && { search: searchTerm })
      })
      
      const response = await fetch(`/api/seo/files?${params}`)
      const result = await response.json()
      
      if (result.success) {
        setMetadata(result.data)
        setPagination(result.pagination)
      } else {
        setError(result.error || 'Failed to fetch metadata')
      }
    } catch (err) {
      setError('Network error occurred')
      console.error('Error fetching all page metadata:', err)
    } finally {
      setLoading(false)
    }
  }

  const setPage = (page: number) => {
    setPagination(prev => ({ ...prev, currentPage: page }))
    fetchAllMetadata(page, search)
  }

  const setSearch = (searchTerm: string) => {
    setSearchState(searchTerm)
    setPagination(prev => ({ ...prev, currentPage: 1 }))
    fetchAllMetadata(1, searchTerm)
  }

  useEffect(() => {
    fetchAllMetadata(pagination.currentPage, search)
  }, [])

  return {
    metadata,
    loading,
    error,
    pagination,
    refresh: () => fetchAllMetadata(pagination.currentPage, search),
    setPage,
    setSearch
  }
}

export function useUpdateFilePageMetadata(_route?: string) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const updateMetadata = async (route: string, updates: Partial<PageMetadataRecord>) => {
    try {
      setLoading(true)
      setError(null)
      
      const encodedRoute = encodeURIComponent(route)
      const response = await fetch(`/api/seo/files/${encodedRoute}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updates)
      })
      
      const result = await response.json()
      
      if (result.success) {
        return { success: true, data: result.data }
      } else {
        setError(result.error || 'Failed to update metadata')
        return { success: false, error: result.error }
      }
    } catch (err) {
      setError('Network error occurred')
      console.error('Error updating page metadata:', err)
      return { success: false, error: 'Network error occurred' }
    } finally {
      setLoading(false)
    }
  }

  return {
    updateMetadata,
    loading,
    error
  }
}

export function useCreateFilePageMetadata() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const createMetadata = async (data: Omit<PageMetadataRecord, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch('/api/seo/files', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      
      const result = await response.json()
      
      if (result.success) {
        return { success: true, data: result.data }
      } else {
        setError(result.error || 'Failed to create metadata')
        return { success: false, error: result.error }
      }
    } catch (err) {
      setError('Network error occurred')
      console.error('Error creating page metadata:', err)
      return { success: false, error: 'Network error occurred' }
    } finally {
      setLoading(false)
    }
  }

  return {
    createMetadata,
    loading,
    error
  }
}
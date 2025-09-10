'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { verifyToken, AdminUser } from '../../lib/auth'
import AdminSidebar from '../Components/Admin/AdminSidebar'
import AdminHeader from '../Components/Admin/AdminHeader'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<AdminUser | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Don't check auth for login page
    if (pathname === '/admin/login') {
      setLoading(false)
      return
    }

    const checkAuth = () => {
      const token = localStorage.getItem('admin_token')
      const userData = localStorage.getItem('admin_user')

      if (!token || !userData) {
        router.push('/admin/login')
        return
      }

      try {
        const verifiedUser = verifyToken(token)
        if (verifiedUser) {
          setUser(verifiedUser)
        } else {
          localStorage.removeItem('admin_token')
          localStorage.removeItem('admin_user')
          router.push('/admin/login')
        }
      } catch (error) {
        localStorage.removeItem('admin_token')
        localStorage.removeItem('admin_user')
        router.push('/admin/login')
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [router, pathname])

  const handleLogout = () => {
    localStorage.removeItem('admin_token')
    localStorage.removeItem('admin_user')
    router.push('/admin/login')
  }

  // Don't apply admin layout to login page
  if (pathname === '/admin/login') {
    return <>{children}</>
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminHeader user={user} onLogout={handleLogout} />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

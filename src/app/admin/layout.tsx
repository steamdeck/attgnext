'use client'

import AdminSidebar from '../Components/Admin/AdminSidebar'
import AdminHeader from '../Components/Admin/AdminHeader'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-vh-100 bg-light">
      <AdminHeader />
      <div className="d-flex">
        <AdminSidebar />
        <main className="flex-grow-1 p-4">
          {children}
        </main>
      </div>
    </div>
  )
}

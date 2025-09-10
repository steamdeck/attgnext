'use client'

import { AdminUser } from '../../../lib/auth'

interface AdminHeaderProps {
  user: AdminUser | null
  onLogout: () => void
}

export default function AdminHeader({ user, onLogout }: AdminHeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-700">
              Welcome, <span className="font-medium">{user?.email}</span>
            </div>
            <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {user?.role}
            </div>
            <button
              onClick={onLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

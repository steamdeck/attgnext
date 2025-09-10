'use client'

import { useState, useEffect } from 'react'

interface DashboardStats {
  totalUsers: number
  totalServices: number
  totalProjects: number
  totalBlogPosts: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    totalServices: 0,
    totalProjects: 0,
    totalBlogPosts: 0
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading dashboard data
    const loadDashboardData = async () => {
      // In a real app, you would fetch this data from your API
      setTimeout(() => {
        setStats({
          totalUsers: 150,
          totalServices: 12,
          totalProjects: 45,
          totalBlogPosts: 23
        })
        setLoading(false)
      }, 1000)
    }

    loadDashboardData()
  }, [])

  const statCards = [
    {
      title: 'Total Users',
      value: stats.totalUsers,
      icon: '👥',
      color: 'bg-blue-500',
      change: '+12%'
    },
    {
      title: 'Services',
      value: stats.totalServices,
      icon: '⚙️',
      color: 'bg-green-500',
      change: '+5%'
    },
    {
      title: 'Projects',
      value: stats.totalProjects,
      icon: '🚀',
      color: 'bg-purple-500',
      change: '+8%'
    },
    {
      title: 'Blog Posts',
      value: stats.totalBlogPosts,
      icon: '📰',
      color: 'bg-orange-500',
      change: '+15%'
    }
  ]

  const recentActivities = [
    {
      id: 1,
      action: 'New user registered',
      user: 'john@example.com',
      time: '2 minutes ago',
      type: 'user'
    },
    {
      id: 2,
      action: 'Service updated',
      user: 'SEO Service',
      time: '15 minutes ago',
      type: 'service'
    },
    {
      id: 3,
      action: 'New project created',
      user: 'E-commerce Website',
      time: '1 hour ago',
      type: 'project'
    },
    {
      id: 4,
      action: 'Blog post published',
      user: 'Digital Marketing Tips',
      time: '2 hours ago',
      type: 'blog'
    }
  ]

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome to your admin dashboard</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className={`p-3 rounded-full ${stat.color} text-white`}>
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-green-600">{stat.change} from last month</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Recent Activities</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-2xl">
                    {activity.type === 'user' && '👤'}
                    {activity.type === 'service' && '⚙️'}
                    {activity.type === 'project' && '🚀'}
                    {activity.type === 'blog' && '📰'}
                  </span>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.user}</p>
                </div>
              </div>
              <div className="text-sm text-gray-500">{activity.time}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-colors">
            <div className="text-center">
              <span className="text-3xl mb-2 block">➕</span>
              <p className="text-sm font-medium text-gray-900">Add New Service</p>
            </div>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-colors">
            <div className="text-center">
              <span className="text-3xl mb-2 block">📝</span>
              <p className="text-sm font-medium text-gray-900">Create Blog Post</p>
            </div>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-colors">
            <div className="text-center">
              <span className="text-3xl mb-2 block">🚀</span>
              <p className="text-sm font-medium text-gray-900">Add Project</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AdminSidebar() {
  const pathname = usePathname()

  const menuItems = [
    {
      name: 'Dashboard',
      href: '/admin/dashboard',
      icon: '📊'
    },
    {
      name: 'Users',
      href: '/admin/users',
      icon: '👥'
    },
    {
      name: 'Content',
      href: '/admin/content',
      icon: '📝'
    },
    {
      name: 'Services',
      href: '/admin/services',
      icon: '⚙️'
    },
    {
      name: 'Projects',
      href: '/admin/projects',
      icon: '🚀'
    },
    {
      name: 'Blog',
      href: '/admin/blog',
      icon: '📰'
    },
    {
      name: 'Settings',
      href: '/admin/settings',
      icon: '⚙️'
    }
  ]

  return (
    <aside className="w-64 bg-white shadow-sm h-screen sticky top-0">
      <nav className="mt-6">
        <ul className="space-y-2 px-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === item.href
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

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
      name: 'Image Management',
      href: '/admin/images',
      icon: '🖼️'
    },
    {
      name: 'Page Editor',
      href: '/admin/page-editor',
      icon: '✏️'
    },
    {
      name: 'Page Editor Demo',
      href: '/admin/page-editor-demo',
      icon: '📚'
    },
    {
      name: 'Settings',
      href: '/admin/settings',
      icon: '⚙️'
    }
  ]

  return (
    <aside className="bg-white shadow-sm" style={{width: '250px', minHeight: '100vh'}}>
      <nav className="p-3">
        <ul className="nav nav-pills flex-column">
          {menuItems.map((item) => (
            <li key={item.name} className="nav-item mb-1">
              <Link
                href={item.href}
                className={`nav-link d-flex align-items-center ${
                  pathname === item.href ? 'active' : ''
                }`}
              >
                <span className="me-3 fs-5">{item.icon}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

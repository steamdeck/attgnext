'use client'

import React from 'react';
import Link from 'next/link';

export default function PageEditorQuickStart() {
  const quickActions = [
    {
      title: 'Edit Home Page',
      description: 'Update hero text, images, and main content',
      href: '/admin/page-editor',
      icon: '🏠',
      color: 'bg-blue-500'
    },
    {
      title: 'Manage Services',
      description: 'Edit service descriptions and pricing',
      href: '/admin/page-editor',
      icon: '⚙️',
      color: 'bg-green-500'
    },
    {
      title: 'Update About Page',
      description: 'Modify company information and team details',
      href: '/admin/page-editor',
      icon: '👥',
      color: 'bg-purple-500'
    },
    {
      title: 'Edit Contact Info',
      description: 'Update contact details and form content',
      href: '/admin/page-editor',
      icon: '📞',
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-medium text-gray-900">Quick Page Editing</h2>
          <p className="text-sm text-gray-600">Quickly edit your website pages</p>
        </div>
        <Link
          href="/admin/page-editor"
          className="text-indigo-600 hover:text-indigo-700 font-medium text-sm"
        >
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {quickActions.map((action, index) => (
          <Link
            key={index}
            href={action.href}
            className="block p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center">
              <div className={`${action.color} p-3 rounded-full text-white mr-4`}>
                <span className="text-xl">{action.icon}</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 text-sm">{action.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{action.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-900">Need Help?</h3>
            <p className="text-xs text-gray-500">Check out our demo and documentation</p>
          </div>
          <Link
            href="/admin/page-editor-demo"
            className="text-indigo-600 hover:text-indigo-700 font-medium text-sm"
          >
            View Demo →
          </Link>
        </div>
      </div>
    </div>
  );
}

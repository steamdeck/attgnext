'use client'

import React from 'react';

export default function PageEditorDemo() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Page Editor Demo & Instructions</h1>
          
          <div className="space-y-8">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎯 Overview</h2>
              <p className="text-gray-600 mb-4">
                The Enhanced Page Editor allows you to easily edit content on your website pages without touching code. 
                You can select any page, browse its editable sections, and modify text, images, and links directly.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-2">Key Features:</h3>
                <ul className="text-blue-700 space-y-1">
                  <li>• Visual page selection and component browsing</li>
                  <li>• Real-time content editing with live preview</li>
                  <li>• Support for text, images, links, titles, and descriptions</li>
                  <li>• Search and filter components by type</li>
                  <li>• Automatic backups before changes</li>
                  <li>• Context-aware editing with surrounding code context</li>
                </ul>
              </div>
            </section>

            {/* How to Use */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">📝 How to Use</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-3">Step 1: Select a Page</h3>
                  <p className="text-green-700 text-sm">
                    Choose from available pages like Home, About, Services, etc. Each page shows the number of editable sections.
                  </p>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-800 mb-3">Step 2: Browse Components</h3>
                  <p className="text-yellow-700 text-sm">
                    Use search and filters to find specific content types. Each component shows its type and preview.
                  </p>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h3 className="font-semibold text-purple-800 mb-3">Step 3: Edit Content</h3>
                  <p className="text-purple-700 text-sm">
                    Click on any component to edit its content. See real-time previews for images and context information.
                  </p>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-semibold text-red-800 mb-3">Step 4: Save Changes</h3>
                  <p className="text-red-700 text-sm">
                    Review your changes and save. The system automatically creates backups before making changes.
                  </p>
                </div>
              </div>
            </section>

            {/* Component Types */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">🔧 Component Types</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">📝</span>
                    <span className="font-semibold">Text</span>
                  </div>
                  <p className="text-sm text-gray-600">Regular text content, paragraphs, and descriptions</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">📰</span>
                    <span className="font-semibold">Title</span>
                  </div>
                  <p className="text-sm text-gray-600">Main headings and page titles (H1 elements)</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">📋</span>
                    <span className="font-semibold">Subtitle</span>
                  </div>
                  <p className="text-sm text-gray-600">Section headings and subtitles (H2, H3 elements)</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">📄</span>
                    <span className="font-semibold">Description</span>
                  </div>
                  <p className="text-sm text-gray-600">Longer descriptive text and content blocks</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">🖼️</span>
                    <span className="font-semibold">Image</span>
                  </div>
                  <p className="text-sm text-gray-600">Image sources and background images with preview</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">🔗</span>
                    <span className="font-semibold">Link</span>
                  </div>
                  <p className="text-sm text-gray-600">Navigation links and external URLs</p>
                </div>
              </div>
            </section>

            {/* Tips */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">💡 Tips & Best Practices</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Content Guidelines</h3>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li>• Keep titles concise and descriptive</li>
                      <li>• Use clear, engaging descriptions</li>
                      <li>• Ensure image URLs are accessible</li>
                      <li>• Test links before saving</li>
                      <li>• Maintain consistent tone across pages</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Technical Tips</h3>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li>• Use the search feature to find specific content</li>
                      <li>• Filter by type to focus on specific elements</li>
                      <li>• Check the context information for better understanding</li>
                      <li>• Use the preview feature to see changes</li>
                      <li>• Always review changes before saving</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Getting Started */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">🚀 Getting Started</h2>
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                <p className="text-indigo-700 mb-4">
                  Ready to start editing? Click the button below to open the Page Editor and begin customizing your website content.
                </p>
                <a
                  href="/admin/page-editor"
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <span className="mr-2">✏️</span>
                  Open Page Editor
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

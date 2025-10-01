'use client'

import React, { useState, useEffect } from 'react';

// Define types locally to avoid build issues
export interface PageComponent {
  name: string;
  path: string;
  type: 'text' | 'image' | 'link' | 'video';
  content: string;
  attributes?: Record<string, string>;
  position: {
    line: number;
    column: number;
  };
}

export interface EditablePage {
  route: string;
  name: string;
  components: PageComponent[];
  filePath: string;
}

interface PageEditorProps {
  className?: string;
}

export default function PageEditor({ className = '' }: PageEditorProps) {
  const [pages, setPages] = useState<EditablePage[]>([]);
  const [selectedPage, setSelectedPage] = useState<EditablePage | null>(null);
  const [selectedComponent, setSelectedComponent] = useState<PageComponent | null>(null);
  const [editingContent, setEditingContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [filter, setFilter] = useState<'all' | 'text' | 'image' | 'link'>('all');

  // Load available pages
  useEffect(() => {
    loadPages();
  }, []);

  const loadPages = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/pages');
      const data = await response.json();
      
      if (data.success) {
        setPages(data.pages);
      } else {
        console.error('Failed to load pages:', data.error);
      }
    } catch (error) {
      console.error('Error loading pages:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageSelect = (page: EditablePage) => {
    setSelectedPage(page);
    setSelectedComponent(null);
    setEditingContent('');
  };

  const handleComponentSelect = (component: PageComponent) => {
    setSelectedComponent(component);
    setEditingContent(component.content);
  };

  const handleSave = async () => {
    if (!selectedComponent || !editingContent.trim()) return;

    try {
      setSaving(true);
      const response = await fetch('/api/pages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          filePath: selectedPage?.filePath,
          oldContent: selectedComponent.content,
          newContent: editingContent,
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        // Update the component in local state
        if (selectedPage) {
          const updatedPages = pages.map(page => {
            if (page.route === selectedPage.route) {
              return {
                ...page,
                components: page.components.map(comp => 
                  comp.path === selectedComponent.path 
                    ? { ...comp, content: editingContent }
                    : comp
                )
              };
            }
            return page;
          });
          setPages(updatedPages);
          setSelectedPage(updatedPages.find(p => p.route === selectedPage.route) || null);
        }
        
        alert('Content updated successfully!');
      } else {
        alert('Failed to update content: ' + data.error);
      }
    } catch (error) {
      console.error('Error saving content:', error);
      alert('Failed to save content');
    } finally {
      setSaving(false);
    }
  };

  const filteredComponents = selectedPage?.components.filter(comp => 
    filter === 'all' || comp.type === filter
  ) || [];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Page Editor</h1>
        <p className="text-gray-600">Select a page and edit its content sections</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Page Selection */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Select Page</h2>
            <div className="space-y-2">
              {pages.map((page) => (
                <button
                  key={page.route}
                  onClick={() => handlePageSelect(page)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    selectedPage?.route === page.route
                      ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="font-medium">{page.name}</div>
                  <div className="text-sm text-gray-500">{page.route}</div>
                  <div className="text-xs text-gray-400 mt-1">
                    {page.components.length} editable sections
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Component Selection */}
        <div className="lg:col-span-1">
          {selectedPage ? (
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-gray-900">
                  Edit Sections - {selectedPage.name}
                </h2>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value as any)}
                  className="text-sm border border-gray-300 rounded px-2 py-1"
                >
                  <option value="all">All Types</option>
                  <option value="text">Text Only</option>
                  <option value="image">Images Only</option>
                  <option value="link">Links Only</option>
                </select>
              </div>
              
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {filteredComponents.map((component, index) => (
                  <button
                    key={component.path}
                    onClick={() => handleComponentSelect(component)}
                    className={`w-full text-left p-3 rounded-lg border transition-colors ${
                      selectedComponent?.path === component.path
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">{component.name}</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        component.type === 'text' ? 'bg-green-100 text-green-700' :
                        component.type === 'image' ? 'bg-blue-100 text-blue-700' :
                        component.type === 'link' ? 'bg-purple-100 text-purple-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {component.type}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1 truncate">
                      {component.content.length > 50 
                        ? component.content.substring(0, 50) + '...'
                        : component.content
                      }
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-4">📄</div>
                <p>Select a page to start editing</p>
              </div>
            </div>
          )}
        </div>

        {/* Content Editor */}
        <div className="lg:col-span-1">
          {selectedComponent ? (
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-gray-900">
                  Edit Content
                </h2>
                <span className={`text-xs px-2 py-1 rounded ${
                  selectedComponent.type === 'text' ? 'bg-green-100 text-green-700' :
                  selectedComponent.type === 'image' ? 'bg-blue-100 text-blue-700' :
                  selectedComponent.type === 'link' ? 'bg-purple-100 text-purple-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {selectedComponent.type}
                </span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {selectedComponent.type === 'text' && 'Text Content'}
                    {selectedComponent.type === 'image' && 'Image URL/Path'}
                    {selectedComponent.type === 'link' && 'Link URL'}
                    {selectedComponent.type === 'video' && 'Video URL'}
                  </label>
                  
                  {selectedComponent.type === 'image' ? (
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={editingContent}
                        onChange={(e) => setEditingContent(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter image URL or path"
                      />
                      {editingContent && (
                        <div className="border border-gray-200 rounded-lg p-2">
                          <img
                            src={editingContent}
                            alt="Preview"
                            className="w-full h-32 object-cover rounded"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                    </div>
                  ) : (
                    <textarea
                      value={editingContent}
                      onChange={(e) => setEditingContent(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      rows={selectedComponent.type === 'text' ? 4 : 2}
                      placeholder={`Enter ${selectedComponent.type} content`}
                    />
                  )}
                </div>
                
                <div className="flex space-x-3">
                  <button
                    onClick={handleSave}
                    disabled={saving || !editingContent.trim()}
                    className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {saving ? 'Saving...' : 'Save Changes'}
                  </button>
                  <button
                    onClick={() => {
                      setEditingContent(selectedComponent.content);
                    }}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-4">✏️</div>
                <p>Select a section to edit</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

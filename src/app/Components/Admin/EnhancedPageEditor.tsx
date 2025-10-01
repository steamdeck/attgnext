'use client'

import React, { useState, useEffect } from 'react';

// Define types locally to avoid build issues
export interface EnhancedPageComponent {
  id: string;
  name: string;
  path: string;
  type: 'text' | 'image' | 'link' | 'video' | 'title' | 'subtitle' | 'description';
  content: string;
  attributes?: Record<string, string>;
  position: {
    line: number;
    column: number;
  };
  context: string;
}

export interface EditablePage {
  route: string;
  name: string;
  components: EnhancedPageComponent[];
  filePath: string;
  preview?: string;
}

interface EnhancedPageEditorProps {
  className?: string;
}

export default function EnhancedPageEditor({ className = '' }: EnhancedPageEditorProps) {
  const [pages, setPages] = useState<EditablePage[]>([]);
  const [selectedPage, setSelectedPage] = useState<EditablePage | null>(null);
  const [selectedComponent, setSelectedComponent] = useState<EnhancedPageComponent | null>(null);
  const [editingContent, setEditingContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [filter, setFilter] = useState<'all' | 'text' | 'image' | 'link' | 'title' | 'subtitle' | 'description'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showPreview, setShowPreview] = useState(false);

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
    setSearchTerm('');
  };

  const handleComponentSelect = (component: EnhancedPageComponent) => {
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
          componentId: selectedComponent.id,
          oldContent: selectedComponent.content,
          newContent: editingContent,
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        if (selectedPage) {
          const updatedPages = pages.map(page => {
            if (page.route === selectedPage.route) {
              return {
                ...page,
                components: page.components.map(comp => 
                  comp.id === selectedComponent.id 
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
        
        // Show success message
        const notification = document.createElement('div');
        notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50';
        notification.textContent = 'Content updated successfully!';
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 3000);
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

  const filteredComponents = selectedPage?.components.filter(comp => {
    const matchesFilter = filter === 'all' || comp.type === filter;
    const matchesSearch = searchTerm === '' || 
      comp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comp.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  }) || [];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'text': return '📝';
      case 'title': return '📰';
      case 'subtitle': return '📋';
      case 'description': return '📄';
      case 'image': return '🖼️';
      case 'link': return '🔗';
      case 'video': return '🎥';
      default: return '📝';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'text': return 'bg-green-100 text-green-700';
      case 'title': return 'bg-blue-100 text-blue-700';
      case 'subtitle': return 'bg-purple-100 text-purple-700';
      case 'description': return 'bg-gray-100 text-gray-700';
      case 'image': return 'bg-orange-100 text-orange-700';
      case 'link': return 'bg-indigo-100 text-indigo-700';
      case 'video': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading pages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Enhanced Page Editor</h1>
            <p className="text-gray-600">Select a page and edit its content sections with advanced features</p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {showPreview ? 'Hide Preview' : 'Show Preview'}
            </button>
            <button
              onClick={loadPages}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              🔄 Refresh
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Page Selection */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Select Page</h2>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {pages.map((page) => (
                <button
                  key={page.route}
                  onClick={() => handlePageSelect(page)}
                  className={`w-full text-left p-4 rounded-lg border transition-colors ${
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
              <div className="space-y-4 mb-4">
                <h2 className="text-lg font-medium text-gray-900">
                  Edit Sections - {selectedPage.name}
                </h2>
                
                {/* Search */}
                <div>
                  <input
                    type="text"
                    placeholder="Search components..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                {/* Filter */}
                <div>
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value as any)}
                    className="w-full text-sm border border-gray-300 rounded px-3 py-2"
                  >
                    <option value="all">All Types</option>
                    <option value="text">Text</option>
                    <option value="title">Titles</option>
                    <option value="subtitle">Subtitles</option>
                    <option value="description">Descriptions</option>
                    <option value="image">Images</option>
                    <option value="link">Links</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {filteredComponents.map((component) => (
                  <button
                    key={component.id}
                    onClick={() => handleComponentSelect(component)}
                    className={`w-full text-left p-3 rounded-lg border transition-colors ${
                      selectedComponent?.id === component.id
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{getTypeIcon(component.type)}</span>
                        <span className="font-medium text-sm">{component.name}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded ${getTypeColor(component.type)}`}>
                        {component.type}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 truncate">
                      {component.content.length > 60 
                        ? component.content.substring(0, 60) + '...'
                        : component.content
                      }
                    </div>
                    {component.context && (
                      <div className="text-xs text-gray-400 mt-1 truncate">
                        Context: {component.context.substring(0, 40)}...
                      </div>
                    )}
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
                <span className={`text-xs px-2 py-1 rounded ${getTypeColor(selectedComponent.type)}`}>
                  {getTypeIcon(selectedComponent.type)} {selectedComponent.type}
                </span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {selectedComponent.type === 'text' && 'Text Content'}
                    {selectedComponent.type === 'title' && 'Title Text'}
                    {selectedComponent.type === 'subtitle' && 'Subtitle Text'}
                    {selectedComponent.type === 'description' && 'Description Text'}
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
                      rows={selectedComponent.type === 'description' ? 6 : 4}
                      placeholder={`Enter ${selectedComponent.type} content`}
                    />
                  )}
                </div>

                {/* Character count */}
                <div className="text-xs text-gray-500 text-right">
                  {editingContent.length} characters
                </div>
                
                <div className="flex space-x-3">
                  <button
                    onClick={handleSave}
                    disabled={saving || !editingContent.trim() || editingContent === selectedComponent.content}
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

                {/* Context information */}
                {selectedComponent.context && (
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-700 mb-1">Context:</h4>
                    <p className="text-xs text-gray-600">{selectedComponent.context}</p>
                  </div>
                )}
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

      {/* Preview Panel */}
      {showPreview && selectedPage && (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Page Preview</h2>
          <div className="border border-gray-200 rounded-lg p-4">
            <iframe
              src={selectedPage.route}
              className="w-full h-96 border-0 rounded"
              title={`Preview of ${selectedPage.name}`}
            />
          </div>
        </div>
      )}
    </div>
  );
}

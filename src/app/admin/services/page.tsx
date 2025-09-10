'use client'

import { useState } from 'react'

interface Service {
  id: string
  name: string
  description: string
  status: 'active' | 'inactive'
  price: string
  category: string
}

export default function ServicesPage() {
  const [services] = useState<Service[]>([
    {
      id: '1',
      name: 'SEO Services',
      description: 'Search Engine Optimization to improve your website ranking',
      status: 'active',
      price: '$299/month',
      category: 'Digital Marketing'
    },
    {
      id: '2',
      name: 'Web Development',
      description: 'Custom website development and design',
      status: 'active',
      price: '$1,999',
      category: 'Development'
    },
    {
      id: '3',
      name: 'Social Media Marketing',
      description: 'Manage your social media presence across platforms',
      status: 'active',
      price: '$199/month',
      category: 'Digital Marketing'
    },
    {
      id: '4',
      name: 'Email Marketing',
      description: 'Email campaigns and automation',
      status: 'inactive',
      price: '$149/month',
      category: 'Digital Marketing'
    }
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', 'Digital Marketing', 'Development', 'Design']

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Services</h1>
          <p className="text-gray-600">Manage your service offerings</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md">
          Add New Service
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search services..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                service.status === 'active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {service.status}
              </span>
            </div>
            
            <p className="text-gray-600 mb-4">{service.description}</p>
            
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-500">Category: {service.category}</span>
              <span className="text-lg font-bold text-indigo-600">{service.price}</span>
            </div>
            
            <div className="flex space-x-2">
              <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-md text-sm">
                Edit
              </button>
              <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-md text-sm">
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">🔍</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No services found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  )
}

'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon, FunnelIcon, XMarkIcon } from '@heroicons/react/24/outline'

export interface SearchFilters {
    searchQuery: string
    priceRange: [number, number]
    propertyType: string
    bedrooms: string
    bathrooms: string
    location: string
    sortBy: string
}

interface SearchFiltersProps {
    filters: SearchFilters
    onFiltersChange: (filters: SearchFilters) => void
}

export function SearchFilters({ filters, onFiltersChange }: SearchFiltersProps) {
    const [showFilters, setShowFilters] = useState(false)

    const handleFilterChange = (key: keyof SearchFilters, value: any) => {
        onFiltersChange({
            ...filters,
            [key]: value
        })
    }

    const clearFilters = () => {
        onFiltersChange({
            searchQuery: '',
            priceRange: [0, 2000000],
            propertyType: '',
            bedrooms: '',
            bathrooms: '',
            location: '',
            sortBy: 'newest'
        })
    }

    return (
        <div className='bg-white p-4 rounded-lg shadow-sm border'>
            {/* Search Bar */}
            <div className='flex gap-3 mb-4'>
                <div className='flex-1 relative'>
                    <MagnifyingGlassIcon className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400' />
                    <input
                        type='text'
                        placeholder='Search properties...'
                        value={filters.searchQuery}
                        onChange={e => handleFilterChange('searchQuery', e.target.value)}
                        className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    />
                </div>
                <button
                    onClick={() => setShowFilters(!showFilters)}
                    className='flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors'
                >
                    <FunnelIcon className='h-5 w-5' />
                    Filters
                </button>
            </div>

            {/* Advanced Filters */}
            {showFilters && (
                <div className='border-t pt-4'>
                    <div className='flex justify-between items-center mb-4'>
                        <h3 className='font-medium text-gray-900'>Advanced Filters</h3>
                        <button
                            onClick={clearFilters}
                            className='text-sm text-blue-600 hover:text-blue-800'
                        >
                            Clear All
                        </button>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        {/* Property Type */}
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>
                                Property Type
                            </label>
                            <select
                                value={filters.propertyType}
                                onChange={e => handleFilterChange('propertyType', e.target.value)}
                                className='w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                            >
                                <option value=''>All Types</option>
                                <option value='apartment'>Apartment</option>
                                <option value='house'>House</option>
                                <option value='condo'>Condo</option>
                                <option value='commercial'>Commercial</option>
                            </select>
                        </div>

                        {/* Bedrooms */}
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>
                                Bedrooms
                            </label>
                            <select
                                value={filters.bedrooms}
                                onChange={e => handleFilterChange('bedrooms', e.target.value)}
                                className='w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                            >
                                <option value=''>Any</option>
                                <option value='1'>1+</option>
                                <option value='2'>2+</option>
                                <option value='3'>3+</option>
                                <option value='4'>4+</option>
                            </select>
                        </div>

                        {/* Bathrooms */}
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>
                                Bathrooms
                            </label>
                            <select
                                value={filters.bathrooms}
                                onChange={e => handleFilterChange('bathrooms', e.target.value)}
                                className='w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                            >
                                <option value=''>Any</option>
                                <option value='1'>1+</option>
                                <option value='2'>2+</option>
                                <option value='3'>3+</option>
                            </select>
                        </div>

                        {/* Sort By */}
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>
                                Sort By
                            </label>
                            <select
                                value={filters.sortBy}
                                onChange={e => handleFilterChange('sortBy', e.target.value)}
                                className='w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                            >
                                <option value='newest'>Newest First</option>
                                <option value='price-low'>Price: Low to High</option>
                                <option value='price-high'>Price: High to Low</option>
                                <option value='bedrooms'>Most Bedrooms</option>
                                <option value='area'>Largest Area</option>
                            </select>
                        </div>
                    </div>

                    {/* Price Range */}
                    <div className='mt-4'>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Price Range
                        </label>
                        <div className='grid grid-cols-2 gap-2'>
                            <input
                                type='number'
                                placeholder='Min price'
                                value={filters.priceRange[0] || ''}
                                onChange={e =>
                                    handleFilterChange('priceRange', [
                                        parseInt(e.target.value) || 0,
                                        filters.priceRange[1]
                                    ])
                                }
                                className='border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                            />
                            <input
                                type='number'
                                placeholder='Max price'
                                value={filters.priceRange[1] || ''}
                                onChange={e =>
                                    handleFilterChange('priceRange', [
                                        filters.priceRange[0],
                                        parseInt(e.target.value) || 2000000
                                    ])
                                }
                                className='border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                            />
                        </div>
                    </div>

                    {/* Location */}
                    <div className='mt-4'>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Location
                        </label>
                        <input
                            type='text'
                            placeholder='City, State, or Country'
                            value={filters.location}
                            onChange={e => handleFilterChange('location', e.target.value)}
                            className='w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

'use client'

import { useState, useMemo, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { getAllProperties } from '@/app/marketplace/lib/data'
import { Property } from '@/app/marketplace/lib/types'
import { PropertyCard } from '@/app/marketplace/ui/components/property-card'
import {
    SearchFilters,
    SearchFilters as SearchFiltersType
} from '@/app/marketplace/ui/components/search-filters'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function PropertiesPage() {
    const { data: session } = useSession()
    const user = session?.user
    const [favorites, setFavorites] = useState<Set<string>>(new Set())
    const [filters, setFilters] = useState<SearchFiltersType>({
        searchQuery: '',
        priceRange: [0, 2000000],
        propertyType: '',
        bedrooms: '',
        bathrooms: '',
        location: '',
        sortBy: 'newest'
    })
    const [properties, setProperties] = useState<Property[]>([])

    // Fetch all properties from Prisma
    useEffect(() => {
        async function fetchAll() {
            const all = await getAllProperties()
            setProperties(all)
        }
        fetchAll()
    }, [])

    const handleFavoriteToggle = (propertyId: string) => {
        const newFavorites = new Set(favorites)
        if (newFavorites.has(propertyId)) {
            newFavorites.delete(propertyId)
        } else {
            newFavorites.add(propertyId)
        }
        setFavorites(newFavorites)
        localStorage.setItem('marketplace-favorites', JSON.stringify(Array.from(newFavorites)))
    }

    const filteredAndSortedProperties = useMemo(() => {
        let filtered = properties

        // Text search
        if (filters.searchQuery) {
            const query = filters.searchQuery.toLowerCase()
            filtered = filtered.filter(
                property =>
                    property.title.toLowerCase().includes(query) ||
                    property.description.toLowerCase().includes(query) ||
                    property.address.city.toLowerCase().includes(query) ||
                    property.address.country.toLowerCase().includes(query)
            )
        }

        // Price range
        filtered = filtered.filter(
            property =>
                property.price >= filters.priceRange[0] && property.price <= filters.priceRange[1]
        )

        // Property type
        if (filters.propertyType) {
            filtered = filtered.filter(property => property.type === filters.propertyType)
        }

        // Bedrooms
        if (filters.bedrooms) {
            filtered = filtered.filter(property => property.bedrooms >= parseInt(filters.bedrooms))
        }

        // Bathrooms
        if (filters.bathrooms) {
            filtered = filtered.filter(
                property => property.bathrooms >= parseInt(filters.bathrooms)
            )
        }

        // Location
        if (filters.location) {
            const location = filters.location.toLowerCase()
            filtered = filtered.filter(
                property =>
                    property.address.city.toLowerCase().includes(location) ||
                    property.address.country.toLowerCase().includes(location)
            )
        }

        // Sort
        filtered.sort((a, b) => {
            switch (filters.sortBy) {
                case 'price-low':
                    return a.price - b.price
                case 'price-high':
                    return b.price - a.price
                case 'bedrooms':
                    return b.bedrooms - a.bedrooms
                case 'area':
                    return b.area - a.area
                case 'newest':
                default:
                    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            }
        })

        return filtered
    }, [filters])

    // Load favorites from localStorage on component mount
    useState(() => {
        const savedFavorites = localStorage.getItem('marketplace-favorites')
        if (savedFavorites) {
            setFavorites(new Set(JSON.parse(savedFavorites)))
        }
    })

    return (
        <div className='min-h-screen bg-gray-50'>
            {/* Navigation */}
            <nav className='bg-white shadow-sm border-b'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex justify-between items-center h-16'>
                        <div className='flex items-center'>
                            <Link href='/marketplace' className='flex items-center space-x-2'>
                                <ArrowLeftIcon className='h-5 w-5 text-gray-400' />
                                <div className='w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center'>
                                    <span className='text-white font-bold text-lg'>R</span>
                                </div>
                                <span className='font-bold text-xl text-gray-800'>RealEstate</span>
                            </Link>
                        </div>

                        <div className='flex items-center space-x-4'>
                            {user ? (
                                <>
                                    <Link
                                        href='/marketplace/chat'
                                        className='text-gray-600 hover:text-gray-800'
                                    >
                                        Messages
                                    </Link>
                                    <Link
                                        href='/marketplace/favorites'
                                        className='text-gray-600 hover:text-gray-800'
                                    >
                                        Favorites ({favorites.size})
                                    </Link>
                                    <span className='text-sm text-gray-600'>
                                        Hello, {user.name}
                                    </span>
                                </>
                            ) : (
                                <Link
                                    href='/marketplace/login'
                                    className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors'
                                >
                                    Sign In
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                {/* Page Header */}
                <div className='mb-8'>
                    <h1 className='text-3xl font-bold text-gray-900 mb-2'>Browse Properties</h1>
                    <p className='text-gray-600'>
                        Find your perfect home from our curated selection of properties
                    </p>
                </div>

                {/* Search and Filters */}
                <div className='mb-8'>
                    <SearchFilters filters={filters} onFiltersChange={setFilters} />
                </div>

                {/* Results Header */}
                <div className='flex justify-between items-center mb-6'>
                    <div>
                        <h2 className='text-xl font-semibold text-gray-900'>
                            {filteredAndSortedProperties.length} Properties Found
                        </h2>
                        {filters.searchQuery && (
                            <p className='text-gray-600 text-sm mt-1'>
                                Results for "{filters.searchQuery}"
                            </p>
                        )}
                    </div>
                </div>

                {/* Properties Grid */}
                {filteredAndSortedProperties.length > 0 ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                        {filteredAndSortedProperties.map(property => (
                            <PropertyCard
                                key={property.id}
                                property={property}
                                isFavorite={favorites.has(property.id)}
                                onFavoriteToggle={user ? handleFavoriteToggle : undefined}
                            />
                        ))}
                    </div>
                ) : (
                    <div className='text-center py-12'>
                        <div className='text-gray-400 text-6xl mb-4'>🏠</div>
                        <h3 className='text-lg font-medium text-gray-900 mb-2'>
                            No properties found
                        </h3>
                        <p className='text-gray-600'>
                            Try adjusting your search criteria or browse all properties
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

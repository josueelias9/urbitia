'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { PropertyPreviewCard } from '@/app/ui/PropertyPreviewCard'
import { Property } from '@/app/lib/types'
import { getAllProperties } from '@/app/lib/data'
import { getChatsByUser } from '@/app/lib/actions'
import { FunnelIcon, MagnifyingGlassIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline'

interface BuyerPropertiesClientProps {
    dict: any
    lang: string
}

export default function BuyerPropertiesClient({ dict, lang }: BuyerPropertiesClientProps) {
    const [user, setUser] = useState<any>(null)
    const [properties, setProperties] = useState<Property[]>([])
    const [filteredProperties, setFilteredProperties] = useState<Property[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [showFilters, setShowFilters] = useState(false)
    const [unreadCount, setUnreadCount] = useState(0)
    const router = useRouter()

    // Filter states
    const [filters, setFilters] = useState({
        search: '',
        type: 'all',
        minPrice: '',
        maxPrice: '',
        minBedrooms: '',
        city: ''
    })

    useEffect(() => {
        const savedUser = localStorage.getItem('marketplace-user')
        if (!savedUser) {
            router.push(`/${lang}/login?role=buyer`)
            return
        }

        const parsedUser = JSON.parse(savedUser)
        if (parsedUser.role !== 'buyer') {
            router.push(`/${lang}/login?role=buyer`)
            return
        }

        setUser(parsedUser)

        // Fetch properties
        async function fetchProperties() {
            try {
                const data = await getAllProperties()
                setProperties(data)
                setFilteredProperties(data)
            } catch (error) {
                console.error('Error fetching properties:', error)
            } finally {
                setIsLoading(false)
            }
        }

        // Fetch chats to get unread count
        async function fetchUnreadCount() {
            try {
                const result = await getChatsByUser(parsedUser.id, 'buyer')
                if (result.success && result.chats) {
                    const count = result.chats.reduce((total: number, chat: any) => {
                        const unread =
                            chat.messages?.filter(
                                (m: any) => !m.read && m.senderId !== parsedUser.id
                            ).length || 0
                        return total + unread
                    }, 0)
                    setUnreadCount(count)
                }
            } catch (error) {
                console.error('Error fetching chats:', error)
            }
        }

        fetchProperties()
        fetchUnreadCount()
    }, [router, lang])

    // Apply filters
    useEffect(() => {
        let result = [...properties]

        // Search filter
        if (filters.search) {
            const searchLower = filters.search.toLowerCase()
            result = result.filter(
                p =>
                    p.title.toLowerCase().includes(searchLower) ||
                    p.description.toLowerCase().includes(searchLower) ||
                    (p.address?.city || '').toLowerCase().includes(searchLower)
            )
        }

        // Type filter
        if (filters.type !== 'all') {
            result = result.filter(p => p.type === filters.type)
        }

        // Price filters
        if (filters.minPrice) {
            result = result.filter(p => p.price >= parseFloat(filters.minPrice))
        }
        if (filters.maxPrice) {
            result = result.filter(p => p.price <= parseFloat(filters.maxPrice))
        }

        // Bedrooms filter
        if (filters.minBedrooms) {
            result = result.filter(p => p.bedrooms >= parseInt(filters.minBedrooms))
        }

        // City filter
        if (filters.city) {
            result = result.filter(p =>
                (p.address?.city || '').toLowerCase().includes(filters.city.toLowerCase())
            )
        }

        setFilteredProperties(result)
    }, [filters, properties])

    const handleFilterChange = (key: string, value: string) => {
        setFilters(prev => ({ ...prev, [key]: value }))
    }

    const clearFilters = () => {
        setFilters({
            search: '',
            type: 'all',
            minPrice: '',
            maxPrice: '',
            minBedrooms: '',
            city: ''
        })
    }

    const handleLogout = () => {
        localStorage.removeItem('marketplace-user')
        router.push(`/${lang}`)
    }

    if (!user) {
        return null
    }

    return (
        <div className='min-h-screen bg-urbitia-secondary'>
            {/* Main Content */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                <div className='mb-8'>
                    <h1 className='text-3xl font-bold text-urbitia-dark'>
                        {dict.buyer.availableProperties}
                    </h1>
                    <p className='mt-2 text-gray-700'>{dict.buyer.browseDescription}</p>
                </div>

                {/* Filters Section */}
                <div className='mb-6 bg-white rounded-lg shadow-md p-6'>
                    <div className='flex items-center justify-between mb-4'>
                        <h2 className='text-lg font-semibold text-urbitia-dark flex items-center gap-2'>
                            <FunnelIcon className='h-5 w-5 text-urbitia-primary' />
                            {lang === 'es' ? 'Filtros' : 'Filters'}
                        </h2>
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className='text-sm text-urbitia-primary hover:text-urbitia-dark transition-colors'
                        >
                            {showFilters
                                ? lang === 'es'
                                    ? 'Ocultar'
                                    : 'Hide'
                                : lang === 'es'
                                  ? 'Mostrar'
                                  : 'Show'}
                        </button>
                    </div>

                    {showFilters && (
                        <div className='space-y-4'>
                            {/* Search */}
                            <div>
                                <label className='block text-sm font-medium text-gray-700 mb-2'>
                                    {lang === 'es' ? 'Buscar' : 'Search'}
                                </label>
                                <div className='relative'>
                                    <MagnifyingGlassIcon className='absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400' />
                                    <input
                                        type='text'
                                        value={filters.search}
                                        onChange={e => handleFilterChange('search', e.target.value)}
                                        placeholder={
                                            lang === 'es'
                                                ? 'Buscar por título, descripción o ciudad...'
                                                : 'Search by title, description or city...'
                                        }
                                        className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-urbitia-primary focus:border-transparent'
                                    />
                                </div>
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                {/* Type */}
                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                                        {lang === 'es' ? 'Tipo' : 'Type'}
                                    </label>
                                    <select
                                        value={filters.type}
                                        onChange={e => handleFilterChange('type', e.target.value)}
                                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-urbitia-primary focus:border-transparent'
                                    >
                                        <option value='all'>
                                            {lang === 'es' ? 'Todos' : 'All'}
                                        </option>
                                        <option value='apartment'>
                                            {lang === 'es' ? 'Apartamento' : 'Apartment'}
                                        </option>
                                        <option value='house'>
                                            {lang === 'es' ? 'Casa' : 'House'}
                                        </option>
                                        <option value='condo'>
                                            {lang === 'es' ? 'Condominio' : 'Condo'}
                                        </option>
                                        <option value='land'>
                                            {lang === 'es' ? 'Terreno' : 'Land'}
                                        </option>
                                    </select>
                                </div>

                                {/* Min Price */}
                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                                        {lang === 'es' ? 'Precio mínimo' : 'Min Price'}
                                    </label>
                                    <input
                                        type='number'
                                        value={filters.minPrice}
                                        onChange={e =>
                                            handleFilterChange('minPrice', e.target.value)
                                        }
                                        placeholder='0'
                                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-urbitia-primary focus:border-transparent'
                                    />
                                </div>

                                {/* Max Price */}
                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                                        {lang === 'es' ? 'Precio máximo' : 'Max Price'}
                                    </label>
                                    <input
                                        type='number'
                                        value={filters.maxPrice}
                                        onChange={e =>
                                            handleFilterChange('maxPrice', e.target.value)
                                        }
                                        placeholder='∞'
                                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-urbitia-primary focus:border-transparent'
                                    />
                                </div>

                                {/* Min Bedrooms */}
                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                                        {lang === 'es' ? 'Habitaciones mínimas' : 'Min Bedrooms'}
                                    </label>
                                    <input
                                        type='number'
                                        value={filters.minBedrooms}
                                        onChange={e =>
                                            handleFilterChange('minBedrooms', e.target.value)
                                        }
                                        placeholder='0'
                                        min='0'
                                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-urbitia-primary focus:border-transparent'
                                    />
                                </div>

                                {/* City */}
                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                                        {lang === 'es' ? 'Ciudad' : 'City'}
                                    </label>
                                    <input
                                        type='text'
                                        value={filters.city}
                                        onChange={e => handleFilterChange('city', e.target.value)}
                                        placeholder={
                                            lang === 'es'
                                                ? 'Buscar por ciudad...'
                                                : 'Search by city...'
                                        }
                                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-urbitia-primary focus:border-transparent'
                                    />
                                </div>
                            </div>

                            {/* Clear Filters Button */}
                            <div className='flex justify-end'>
                                <button
                                    onClick={clearFilters}
                                    className='px-4 py-2 text-sm text-urbitia-primary hover:text-urbitia-dark border border-urbitia-primary hover:border-urbitia-dark rounded-lg transition-colors'
                                >
                                    {lang === 'es' ? 'Limpiar filtros' : 'Clear filters'}
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Results Count */}
                    <div className='mt-4 text-sm text-gray-600'>
                        {lang === 'es' ? 'Mostrando' : 'Showing'} {filteredProperties.length}{' '}
                        {lang === 'es' ? 'de' : 'of'} {properties.length}{' '}
                        {lang === 'es' ? 'propiedades' : 'properties'}
                    </div>
                </div>

                {isLoading ? (
                    <div className='text-center py-12'>
                        <div className='inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-urbitia-primary'></div>
                        <p className='mt-2 text-gray-600'>{dict.buyer.loadingProperties}</p>
                    </div>
                ) : filteredProperties.length === 0 ? (
                    <div className='text-center py-12 bg-white rounded-lg shadow'>
                        <p className='text-gray-600'>
                            {properties.length === 0
                                ? dict.buyer.noPropertiesAvailable
                                : lang === 'es'
                                  ? 'No se encontraron propiedades con estos filtros'
                                  : 'No properties found with these filters'}
                        </p>
                    </div>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                        {filteredProperties.map(property => (
                            <PropertyPreviewCard
                                key={property.id}
                                property={property}
                                lang={lang}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

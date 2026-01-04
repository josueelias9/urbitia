'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { logout } from '@/app/lib/actions'
import Link from 'next/link'
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import { Property } from '@/app/lib/types'
import { getPropertiesByOwner } from '@/app/lib/data'

interface OwnerPropertiesClientProps {
    dict: any
    lang: string
}

export default function OwnerPropertiesClient({ dict, lang }: OwnerPropertiesClientProps) {
    const [user, setUser] = useState<any>(null)
    const [properties, setProperties] = useState<Property[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const savedUser = localStorage.getItem('marketplace-user')
        if (!savedUser) {
            router.push(`/${lang}/login?role=owner`)
            return
        }

        const parsedUser = JSON.parse(savedUser)
        if (parsedUser.role !== 'owner') {
            router.push(`/${lang}/login?role=owner`)
            return
        }

        setUser(parsedUser)

        // Fetch owner's properties
        async function fetchProperties() {
            try {
                const data = await getPropertiesByOwner(parsedUser.id)
                setProperties(data as Property[])
            } catch (error) {
                console.error('Error fetching properties:', error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchProperties()
    }, [router, lang])

    const formatPrice = (price: number, currency: string) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price)
    }

    if (!user) {
        return null
    }

    return (
        <div className='min-h-screen bg-gray-50'>
            {/* Main Content */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                <div className='flex justify-between items-center mb-8'>
                    <div>
                        <h1 className='text-3xl font-bold text-gray-900'>
                            {dict.owner.myProperties}
                        </h1>
                        <p className='mt-2 text-gray-600'>{dict.owner.manageListings}</p>
                    </div>
                    <Link
                        href={`/${lang}/owner/properties/create`}
                        className='flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
                    >
                        <PlusIcon className='h-5 w-5 mr-2' />
                        {dict.owner.addNewProperty}
                    </Link>
                </div>

                {isLoading ? (
                    <div className='text-center py-12'>
                        <div className='inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'></div>
                        <p className='mt-2 text-gray-600'>{dict.owner.loadingProperties}</p>
                    </div>
                ) : properties.length === 0 ? (
                    <div className='text-center py-12 bg-white rounded-lg shadow'>
                        <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                            {dict.owner.noPropertiesYet}
                        </h3>
                        <p className='text-gray-600 mb-6'>{dict.owner.startByAdding}</p>
                        <Link
                            href={`/${lang}/owner/properties/create`}
                            className='inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
                        >
                            <PlusIcon className='h-5 w-5 mr-2' />
                            {dict.owner.addNewProperty}
                        </Link>
                    </div>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {properties.map(property => (
                            <div
                                key={property.id}
                                className='bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow'
                            >
                                <div className='h-48 bg-gray-200 relative'>
                                    {property.images && property.images.length > 0 && (
                                        <img
                                            src={property.images[0]}
                                            alt={property.title}
                                            className='w-full h-full object-cover'
                                        />
                                    )}
                                    <div className='absolute top-2 right-2'>
                                        <span
                                            className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                                property.status === 'available'
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-gray-100 text-gray-800'
                                            }`}
                                        >
                                            {property.status === 'available'
                                                ? dict.properties.available
                                                : dict.properties.notAvailable}
                                        </span>
                                    </div>
                                </div>
                                <div className='p-4'>
                                    <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                                        {property.title}
                                    </h3>
                                    <p className='text-gray-600 text-sm mb-2'>
                                        {property.city}, {property.country}
                                    </p>
                                    <div className='flex justify-between items-center mb-4'>
                                        <span className='text-xl font-bold text-blue-600'>
                                            {formatPrice(property.price, property.currency)}
                                        </span>
                                        <span className='text-sm text-gray-600'>
                                            {property.bedrooms} {dict.properties.bed} ·{' '}
                                            {property.bathrooms} {dict.properties.bath}
                                        </span>
                                    </div>
                                    <div className='flex space-x-2'>
                                        <button className='flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors'>
                                            <PencilIcon className='h-4 w-4 mr-2' />
                                            {dict.common.edit}
                                        </button>
                                        <button className='flex items-center justify-center px-4 py-2 border border-red-300 rounded-lg text-red-700 hover:bg-red-50 transition-colors'>
                                            <TrashIcon className='h-4 w-4' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

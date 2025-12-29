'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { PropertyPreviewCard } from '@/app/[lang]/marketplace/ui/PropertyPreviewCard'
import { Property } from '@/app/[lang]/marketplace/lib/types'
import { getAllProperties } from '@/app/[lang]/marketplace/lib/data'

export default function BuyerPropertiesPage() {
    const [user, setUser] = useState<any>(null)
    const [properties, setProperties] = useState<Property[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const savedUser = localStorage.getItem('marketplace-user')
        if (!savedUser) {
            router.push('/login?role=buyer')
            return
        }

        const parsedUser = JSON.parse(savedUser)
        if (parsedUser.role !== 'buyer') {
            router.push('/login?role=buyer')
            return
        }

        setUser(parsedUser)

        // Fetch properties
        async function fetchProperties() {
            try {
                const data = await getAllProperties()
                setProperties(data)
            } catch (error) {
                console.error('Error fetching properties:', error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchProperties()
    }, [router])

    const handleLogout = () => {
        localStorage.removeItem('marketplace-user')
        router.push('/')
    }

    if (!user) {
        return null
    }

    return (
        <div className='min-h-screen bg-gray-50'>
            {/* Navigation Bar */}
            <nav className='bg-white shadow-sm'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex justify-between h-16'>
                        <div className='flex items-center'>
                            <Link href='/' className='text-xl font-bold text-blue-600'>
                                RealEstate
                            </Link>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <span className='text-gray-700'>Welcome, {user.name}</span>
                            <button
                                onClick={handleLogout}
                                className='text-sm text-gray-600 hover:text-gray-900'
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                <div className='mb-8'>
                    <h1 className='text-3xl font-bold text-gray-900'>Available Properties</h1>
                    <p className='mt-2 text-gray-600'>
                        Browse through our selection of properties and find your perfect match
                    </p>
                </div>

                {isLoading ? (
                    <div className='text-center py-12'>
                        <div className='inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'></div>
                        <p className='mt-2 text-gray-600'>Loading properties...</p>
                    </div>
                ) : properties.length === 0 ? (
                    <div className='text-center py-12 bg-white rounded-lg shadow'>
                        <p className='text-gray-600'>No properties available at the moment</p>
                    </div>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                        {properties.map(property => (
                            <PropertyPreviewCard key={property.id} property={property} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

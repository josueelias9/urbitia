'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { PropertyPreviewCard } from '@/app/[lang]/marketplace/ui/PropertyPreviewCard'
import { Property } from '@/app/[lang]/marketplace/lib/types'
import { getAllProperties } from '@/app/[lang]/marketplace/lib/data'
import type { Locale } from '@/proxy'
import enDict from '@/app/dictionaries/en.json'
import esDict from '@/app/dictionaries/es.json'

export default function BuyerPropertiesPage({ params }: { params: { lang: Locale } }) {
    const [user, setUser] = useState<any>(null)
    const [properties, setProperties] = useState<Property[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [dict, setDict] = useState<any>(null)
    const router = useRouter()
    const lang = params.lang

    useEffect(() => {
        // Load dictionary
        const dictionary = lang === 'es' ? esDict : enDict
        setDict(dictionary)

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
            } catch (error) {
                console.error('Error fetching properties:', error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchProperties()
    }, [router, lang])

    const handleLogout = () => {
        localStorage.removeItem('marketplace-user')
        router.push(`/${lang}`)
    }

    if (!user || !dict) {
        return null
    }

    return (
        <div className='min-h-screen bg-gray-50'>
            {/* Navigation Bar */}
            <nav className='bg-white shadow-sm'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex justify-between h-16'>
                        <div className='flex items-center'>
                            <Link href={`/${lang}`} className='text-xl font-bold text-blue-600'>
                                RealEstate
                            </Link>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <span className='text-gray-700'>{dict.common.welcome}, {user.name}</span>
                            <button
                                onClick={handleLogout}
                                className='text-sm text-gray-600 hover:text-gray-900'
                            >
                                {dict.navigation.logout}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                <div className='mb-8'>
                    <h1 className='text-3xl font-bold text-gray-900'>{dict.buyer.availableProperties}</h1>
                    <p className='mt-2 text-gray-600'>
                        {dict.buyer.browseDescription}
                    </p>
                </div>

                {isLoading ? (
                    <div className='text-center py-12'>
                        <div className='inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'></div>
                        <p className='mt-2 text-gray-600'>{dict.buyer.loadingProperties}</p>
                    </div>
                ) : properties.length === 0 ? (
                    <div className='text-center py-12 bg-white rounded-lg shadow'>
                        <p className='text-gray-600'>{dict.buyer.noPropertiesAvailable}</p>
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

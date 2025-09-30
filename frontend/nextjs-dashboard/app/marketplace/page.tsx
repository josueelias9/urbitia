'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useAuth } from '@/app/marketplace/lib/auth-context'
import { getFeaturedProperties } from './lib/data'
import { useEffect, useState } from 'react'
import { Property } from '@/app/marketplace/lib/types'

export default function MarketplacePage() {
    const { user } = useAuth()
    const [properties, setProperties] = useState<Property[]>([])

    useEffect(() => {
        async function fetchProperties() {
            const featured = await getFeaturedProperties()
            setProperties(featured)
        }
        fetchProperties()
    }, [])

    const formatPrice = (price: number, currency: string) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price)
    }

    const PropertyPreviewCard = ({ property }: { property: Property }) => (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
                <Image
                    src={property.images[0]}
                    alt={property.title}
                    fill
                    className="object-cover"
                />
                <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded text-sm font-medium">
                    {property.status}
                </div>
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 truncate">{property.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{property.description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">
                        {formatPrice(property.price, property.currency)}
                    </span>
                    <div className="text-sm text-gray-500">
                        {property.bedrooms} bed • {property.bathrooms} bath • {property.area}m²
                    </div>
                </div>
                <p className="text-sm text-gray-500 mt-2">{property.city}, {property.country}</p>
            </div>
        </div>
    )

    const HeroSection = () => (
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Find Your Perfect Property
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                        Discover amazing real estate opportunities or list your property 
                        with our trusted marketplace
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {!user ? (
                            <>
                                <Link
                                    href="/marketplace/login?role=buyer"
                                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                                >
                                    I'm Looking to Buy
                                </Link>
                                <Link
                                    href="/marketplace/login?role=owner"
                                    className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                                >
                                    I'm a Property Owner
                                </Link>
                            </>
                        ) : user.role === 'buyer' ? (
                            <Link
                                href="/marketplace/properties"
                                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Browse Properties
                            </Link>
                        ) : (
                            <Link
                                href="/marketplace/owner/dashboard"
                                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Go to Dashboard
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )

    const NavigationBar = () => (
        <nav className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/marketplace" className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">R</span>
                        </div>
                        <span className="font-bold text-xl text-gray-800">RealEstate</span>
                    </Link>
                    
                    <div className="flex items-center space-x-4">
                        {user ? (
                            <>
                                <span className="text-sm text-gray-600">
                                    Hello, {user.name}
                                </span>
                                {user.role === 'buyer' ? (
                                    <>
                                        <Link href="/marketplace/properties" className="text-gray-600 hover:text-gray-800">
                                            Properties
                                        </Link>
                                        <Link href="/marketplace/chat" className="text-gray-600 hover:text-gray-800">
                                            Messages
                                        </Link>
                                        <Link href="/marketplace/favorites" className="text-gray-600 hover:text-gray-800">
                                            Favorites
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link href="/marketplace/owner/dashboard" className="text-gray-600 hover:text-gray-800">
                                            Dashboard
                                        </Link>
                                        <Link href="/marketplace/owner/properties" className="text-gray-600 hover:text-gray-800">
                                            My Properties
                                        </Link>
                                        <Link href="/marketplace/chat" className="text-gray-600 hover:text-gray-800">
                                            Messages
                                        </Link>
                                    </>
                                )}
                                <Link
                                    href="/marketplace/profile"
                                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                                >
                                    Profile
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link href="/marketplace/login" className="text-gray-600 hover:text-gray-800">
                                    Sign In
                                </Link>
                                <Link
                                    href="/marketplace/login"
                                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                                >
                                    Get Started
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )

    return (
        <div className="min-h-screen">
            <NavigationBar />
            <HeroSection />
            
            {/* Featured Properties Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Featured Properties
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover our handpicked selection of premium properties available now
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                    {properties.map((property) => (
                        <PropertyPreviewCard key={property.id} property={property} />
                    ))}
                </div>
                
                <div className="text-center">
                    <Link
                        href="/marketplace/properties"
                        className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                        View All Properties
                    </Link>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                            <div className="text-gray-600">Properties Listed</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue-600 mb-2">1,200+</div>
                            <div className="text-gray-600">Happy Customers</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                            <div className="text-gray-600">Satisfaction Rate</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                            <div className="text-gray-600">Cities Covered</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
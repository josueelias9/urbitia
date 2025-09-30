'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/app/marketplace/lib/auth-context'
import { PrismaClient, property as Property } from '@/generated/prisma/client'
import { PropertyCard } from '@/app/marketplace/components/property-card'
import Link from 'next/link'
import { ArrowLeftIcon, HeartIcon } from '@heroicons/react/24/outline'

export default function FavoritesPage() {
    const { user } = useAuth()
    const [favorites, setFavorites] = useState<Set<string>>(new Set())
    const [favoriteProperties, setFavoriteProperties] = useState<Property[]>([])
    const prisma = new PrismaClient()

    async function getFavoriteProperties(ids: string[]): Promise<Property[]> {
        if (ids.length === 0) return []
        return await prisma.property.findMany({
            where: { id: { in: ids } }
        })
    }
    useEffect(() => {
        // Load favorites from localStorage
        const savedFavorites = localStorage.getItem('marketplace-favorites')
        if (savedFavorites) {
            const favoriteIds = JSON.parse(savedFavorites)
            setFavorites(new Set(favoriteIds))
            getFavoriteProperties(favoriteIds).then(setFavoriteProperties)
        }
    }, [])

    const handleFavoriteToggle = async (propertyId: string) => {
        const newFavorites = new Set(favorites)
        if (newFavorites.has(propertyId)) {
            newFavorites.delete(propertyId)
        } else {
            newFavorites.add(propertyId)
        }
        setFavorites(newFavorites)
        localStorage.setItem('marketplace-favorites', JSON.stringify(Array.from(newFavorites)))
        setFavoriteProperties(await getFavoriteProperties(Array.from(newFavorites)))
    }

    if (!user) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-gray-400 text-6xl mb-4">💖</div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Sign In Required</h1>
                    <p className="text-gray-600 mb-6">Please sign in to view your favorite properties.</p>
                    <Link
                        href="/marketplace/login"
                        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Sign In
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <Link href="/marketplace/properties" className="flex items-center space-x-2">
                                <ArrowLeftIcon className="h-5 w-5 text-gray-400" />
                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">R</span>
                                </div>
                                <span className="font-bold text-xl text-gray-800">RealEstate</span>
                            </Link>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Link href="/marketplace/properties" className="text-gray-600 hover:text-gray-800">
                                All Properties
                            </Link>
                            <Link href="/marketplace/chat" className="text-gray-600 hover:text-gray-800">
                                Messages
                            </Link>
                            <span className="text-sm text-gray-600">
                                Hello, {user.name}
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Page Header */}
                <div className="mb-8">
                    <div className="flex items-center mb-2">
                        <HeartIcon className="h-8 w-8 text-red-500 mr-3" />
                        <h1 className="text-3xl font-bold text-gray-900">
                            My Favorites
                        </h1>
                    </div>
                    <p className="text-gray-600">
                        {favoriteProperties.length} {favoriteProperties.length === 1 ? 'property' : 'properties'} saved for later
                    </p>
                </div>
                {/* Favorites Grid */}
                {favoriteProperties.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {favoriteProperties.map((property) => (
                            <PropertyCard
                                key={property.id}
                                property={{
                                    ...property,
                                    address: {
                                        street: property.street,
                                        city: property.city,
                                        country: property.country,
                                        zipCode: property.zipCode,
                                        coordinates: property.lat && property.lng ? { lat: property.lat, lng: property.lng } : undefined
                                    }
                                }}
                                isFavorite={favorites.has(property.id)}
                                onFavoriteToggle={handleFavoriteToggle}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-6xl mb-4">💝</div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                            No favorites yet
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Start browsing properties and save your favorites by clicking the heart icon
                        </p>
                        <Link
                            href="/marketplace/properties"
                            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Browse Properties
                        </Link>
                    </div>
                )}
                {/* Quick Stats */}
                {favoriteProperties.length > 0 && (
                    <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Favorites Summary</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-600 mb-1">
                                    {favoriteProperties.length}
                                </div>
                                <div className="text-sm text-gray-600">Total Favorites</div>
                            </div>
                            {/* Puedes agregar más estadísticas aquí si lo deseas */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
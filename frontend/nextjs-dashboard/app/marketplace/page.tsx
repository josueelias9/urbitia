'use client'

import Link from 'next/link'
import { PropertyPreviewCard } from '@/app/marketplace/ui/PropertyPreviewCard'
import { NavigationBar } from '@/app/marketplace/ui/NavigationBar'
import {HeroSection} from "@/app/marketplace/ui/HeroSection"
import { getFeaturedProperties } from './lib/data'
import { useEffect, useState } from 'react'
import { Property } from '@/app/marketplace/lib/types'

export default function MarketplacePage() {
    const [properties, setProperties] = useState<Property[]>([])

    useEffect(() => {
        async function fetchProperties() {
            const featured = await getFeaturedProperties()
            setProperties(featured)
        }
        fetchProperties()
    }, [])


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
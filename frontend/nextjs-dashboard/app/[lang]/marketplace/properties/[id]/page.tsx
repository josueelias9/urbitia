'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useAuth } from '@/app/[lang]/marketplace/lib/auth-context'
import { getAllProperties } from '@/app/[lang]/marketplace/lib/data'
import { Property, User } from '@/app/[lang]/marketplace/lib/types'
import { UserAvatar } from '@/app/[lang]/marketplace/ui/components/user-avatar'
import Image from 'next/image'
import Link from 'next/link'
import {
    ArrowLeftIcon,
    HeartIcon,
    ShareIcon,
    MapPinIcon,
    HomeIcon,
    BanknotesIcon,
    ChatBubbleLeftRightIcon,
    PhoneIcon,
    EnvelopeIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'

export default function PropertyDetailsPage() {
    const params = useParams()
    const router = useRouter()
    const { user } = useAuth()
    const [property, setProperty] = useState<Property | null>(null)
    const [owner, setOwner] = useState<{ name: string; avatar?: string; email?: string } | null>(
        null
    )
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isFavorite, setIsFavorite] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const propertyId = params.id as string

    useEffect(() => {
        async function fetchProperty() {
            if (propertyId) {
                const allProperties = await getAllProperties()
                const foundProperty = allProperties.find(p => p.id === propertyId)
                if (foundProperty) {
                    setProperty(foundProperty)
                    // Buscar el owner en la lista de propiedades (simulación, normalmente sería una consulta)
                    const ownerObj = {
                        name: foundProperty.ownerId || '',
                        avatar: (foundProperty as any).avatar || '',
                        email: (foundProperty as any).email || ''
                    }
                    setOwner(ownerObj)
                    // Check if property is in favorites
                    const savedFavorites = localStorage.getItem('marketplace-favorites')
                    if (savedFavorites) {
                        const favorites = JSON.parse(savedFavorites)
                        setIsFavorite(favorites.includes(propertyId))
                    }
                }
                setIsLoading(false)
            }
        }
        fetchProperty()
    }, [propertyId])

    const formatPrice = (price: number, currency: string) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price)
    }

    const handleFavoriteToggle = () => {
        if (!user) {
            router.push('/marketplace/login')
            return
        }

        const savedFavorites = localStorage.getItem('marketplace-favorites')
        let favorites = savedFavorites ? JSON.parse(savedFavorites) : []

        if (isFavorite) {
            favorites = favorites.filter((id: string) => id !== propertyId)
        } else {
            favorites.push(propertyId)
        }

        localStorage.setItem('marketplace-favorites', JSON.stringify(favorites))
        setIsFavorite(!isFavorite)
    }

    const handleStartChat = () => {
        if (!user) {
            router.push('/marketplace/login')
            return
        }

        if (user.role !== 'buyer') {
            alert('Only buyers can start chats with property owners.')
            return
        }

        router.push(`/marketplace/chat?propertyId=${propertyId}&ownerId=${property?.ownerId}`)
    }

    if (isLoading) {
        return (
            <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
                <div className='text-center'>
                    <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4'></div>
                    <p className='text-gray-600'>Loading property details...</p>
                </div>
            </div>
        )
    }

    if (!property) {
        return (
            <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
                <div className='text-center'>
                    <div className='text-gray-400 text-6xl mb-4'>🏠</div>
                    <h1 className='text-2xl font-bold text-gray-900 mb-2'>Property Not Found</h1>
                    <p className='text-gray-600 mb-6'>
                        The property you're looking for doesn't exist.
                    </p>
                    <Link
                        href='/marketplace/properties'
                        className='bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors'
                    >
                        Browse Properties
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className='min-h-screen bg-gray-50'>
            {/* Navigation */}
            <nav className='bg-white shadow-sm border-b'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex justify-between items-center h-16'>
                        <div className='flex items-center'>
                            <Link
                                href='/marketplace/properties'
                                className='flex items-center space-x-2'
                            >
                                <ArrowLeftIcon className='h-5 w-5 text-gray-400' />
                                <div className='w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center'>
                                    <span className='text-white font-bold text-lg'>R</span>
                                </div>
                                <span className='font-bold text-xl text-gray-800'>RealEstate</span>
                            </Link>
                        </div>

                        <div className='flex items-center space-x-4'>
                            <button
                                onClick={handleFavoriteToggle}
                                className='p-2 rounded-full hover:bg-gray-100 transition-colors'
                            >
                                {isFavorite ? (
                                    <HeartSolidIcon className='h-6 w-6 text-red-500' />
                                ) : (
                                    <HeartIcon className='h-6 w-6 text-gray-600' />
                                )}
                            </button>
                            <button className='p-2 rounded-full hover:bg-gray-100 transition-colors'>
                                <ShareIcon className='h-6 w-6 text-gray-600' />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    {/* Main Content */}
                    <div className='lg:col-span-2'>
                        {/* Image Gallery */}
                        <div className='mb-8'>
                            <div className='relative h-96 rounded-lg overflow-hidden mb-4'>
                                <Image
                                    src={property.images[currentImageIndex]}
                                    alt={property.title}
                                    fill
                                    className='object-cover'
                                />

                                {property.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={() =>
                                                setCurrentImageIndex(
                                                    currentImageIndex > 0
                                                        ? currentImageIndex - 1
                                                        : property.images.length - 1
                                                )
                                            }
                                            className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full'
                                        >
                                            ←
                                        </button>
                                        <button
                                            onClick={() =>
                                                setCurrentImageIndex(
                                                    currentImageIndex < property.images.length - 1
                                                        ? currentImageIndex + 1
                                                        : 0
                                                )
                                            }
                                            className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full'
                                        >
                                            →
                                        </button>

                                        <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
                                            {property.images.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setCurrentImageIndex(index)}
                                                    className={`w-2 h-2 rounded-full ${
                                                        index === currentImageIndex
                                                            ? 'bg-white'
                                                            : 'bg-white/50'
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>

                            {property.images.length > 1 && (
                                <div className='grid grid-cols-4 gap-2'>
                                    {property.images.slice(0, 4).map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`relative h-20 rounded-md overflow-hidden ${
                                                index === currentImageIndex
                                                    ? 'ring-2 ring-blue-500'
                                                    : ''
                                            }`}
                                        >
                                            <Image
                                                src={image}
                                                alt={`${property.title} ${index + 1}`}
                                                fill
                                                className='object-cover'
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Property Details */}
                        <div className='bg-white rounded-lg shadow-sm p-6 mb-8'>
                            <div className='flex items-start justify-between mb-4'>
                                <div>
                                    <h1 className='text-3xl font-bold text-gray-900 mb-2'>
                                        {property.title}
                                    </h1>
                                    <div className='flex items-center text-gray-600 mb-2'>
                                        <MapPinIcon className='h-5 w-5 mr-1' />
                                        <span>
                                            {property.street}, {property.city}, {property.country}
                                        </span>
                                    </div>
                                </div>
                                <div className='text-right'>
                                    <div className='text-3xl font-bold text-green-600'>
                                        {formatPrice(property.price, property.currency)}
                                    </div>
                                    <div
                                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                                            property.status === 'available'
                                                ? 'bg-green-100 text-green-800'
                                                : property.status === 'sold'
                                                  ? 'bg-red-100 text-red-800'
                                                  : 'bg-yellow-100 text-yellow-800'
                                        }`}
                                    >
                                        {property.status}
                                    </div>
                                </div>
                            </div>

                            {/* Property Stats */}
                            <div className='grid grid-cols-4 gap-4 py-4 border-t border-b border-gray-200'>
                                <div className='text-center'>
                                    <HomeIcon className='h-6 w-6 mx-auto mb-1 text-gray-400' />
                                    <div className='font-semibold'>{property.bedrooms}</div>
                                    <div className='text-sm text-gray-600'>Bedrooms</div>
                                </div>
                                <div className='text-center'>
                                    <span className='text-xl mb-1 block'>🚿</span>
                                    <div className='font-semibold'>{property.bathrooms}</div>
                                    <div className='text-sm text-gray-600'>Bathrooms</div>
                                </div>
                                <div className='text-center'>
                                    <span className='text-xl mb-1 block'>📐</span>
                                    <div className='font-semibold'>{property.area}m²</div>
                                    <div className='text-sm text-gray-600'>Area</div>
                                </div>
                                <div className='text-center'>
                                    <span className='text-xl mb-1 block'>🏠</span>
                                    <div className='font-semibold capitalize'>{property.type}</div>
                                    <div className='text-sm text-gray-600'>Type</div>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <h3 className='text-lg font-semibold mb-2'>Description</h3>
                                <p className='text-gray-700 leading-relaxed'>
                                    {property.description}
                                </p>
                            </div>
                        </div>

                        {/* Amenities */}
                        <div className='bg-white rounded-lg shadow-sm p-6'>
                            <h3 className='text-lg font-semibold mb-4'>Amenities</h3>
                            <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
                                {property.amenities.map((amenity, index) => (
                                    <div key={index} className='flex items-center text-gray-700'>
                                        <span className='text-green-500 mr-2'>✓</span>
                                        {amenity}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className='lg:col-span-1'>
                        {/* Contact Owner Card */}
                        {owner && (
                            <div className='bg-white rounded-lg shadow-sm p-6 mb-6 sticky top-6'>
                                <h3 className='text-lg font-semibold mb-4'>Contact Owner</h3>

                                <UserAvatar
                                    user={
                                        owner as { name: string; avatar?: string; email?: string }
                                    }
                                    size='lg'
                                    showName={true}
                                    showEmail={true}
                                    className='mb-6'
                                />

                                <div className='space-y-3'>
                                    <button
                                        onClick={handleStartChat}
                                        className='w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'
                                    >
                                        <ChatBubbleLeftRightIcon className='h-5 w-5 mr-2' />
                                        Send Message
                                    </button>

                                    {/* phone removed: not available in owner */}

                                    <a
                                        href={`mailto:${owner.email}`}
                                        className='w-full flex items-center justify-center px-4 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors'
                                    >
                                        <EnvelopeIcon className='h-5 w-5 mr-2' />
                                        Email Owner
                                    </a>
                                </div>

                                {/* createdAt removed: not available in owner */}
                            </div>
                        )}

                        {/* Quick Actions */}
                        <div className='bg-white rounded-lg shadow-sm p-6'>
                            <h3 className='text-lg font-semibold mb-4'>Quick Actions</h3>
                            <div className='space-y-3'>
                                <button
                                    onClick={handleFavoriteToggle}
                                    className={`w-full flex items-center justify-center px-4 py-2 rounded-md border transition-colors ${
                                        isFavorite
                                            ? 'border-red-300 bg-red-50 text-red-700'
                                            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                                    }`}
                                >
                                    {isFavorite ? (
                                        <HeartSolidIcon className='h-5 w-5 mr-2' />
                                    ) : (
                                        <HeartIcon className='h-5 w-5 mr-2' />
                                    )}
                                    {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                                </button>

                                <button className='w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors'>
                                    <ShareIcon className='h-5 w-5 mr-2' />
                                    Share Property
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { getAllProperties } from '@/app/marketplace/lib/data'
import { Property } from '@/app/marketplace/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon, MapPinIcon, HomeIcon } from '@heroicons/react/24/outline'

export default function BuyerPropertyDetailPage() {
    const params = useParams()
    const router = useRouter()
    const [user, setUser] = useState<any>(null)
    const [property, setProperty] = useState<Property | null>(null)
    const [message, setMessage] = useState('')
    const [messageSent, setMessageSent] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const propertyId = params.id as string

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

        async function fetchProperty() {
            if (propertyId) {
                const allProperties = await getAllProperties()
                const foundProperty = allProperties.find(p => p.id === propertyId)
                if (foundProperty) {
                    setProperty(foundProperty)
                }
                setIsLoading(false)
            }
        }
        fetchProperty()
    }, [propertyId, router])

    const formatPrice = (price: number, currency: string) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price)
    }

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!message.trim()) return

        // In a real app, this would send to the backend
        console.log('Sending message:', {
            from: user.id,
            to: property?.ownerId,
            propertyId: property?.id,
            message
        })

        setMessageSent(true)
        setMessage('')

        setTimeout(() => {
            setMessageSent(false)
        }, 3000)
    }

    if (!user || isLoading) {
        return (
            <div className='min-h-screen flex items-center justify-center'>
                <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
            </div>
        )
    }

    if (!property) {
        return (
            <div className='min-h-screen flex items-center justify-center'>
                <div className='text-center'>
                    <h2 className='text-2xl font-bold text-gray-900'>Property not found</h2>
                    <Link
                        href='/buyer/properties'
                        className='mt-4 inline-block text-blue-600 hover:text-blue-800'
                    >
                        Back to properties
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className='min-h-screen bg-gray-50'>
            {/* Navigation */}
            <nav className='bg-white shadow-sm'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex justify-between h-16'>
                        <div className='flex items-center'>
                            <Link
                                href='/buyer/properties'
                                className='flex items-center text-gray-600 hover:text-gray-900'
                            >
                                <ArrowLeftIcon className='h-5 w-5 mr-2' />
                                Back to Properties
                            </Link>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <span className='text-gray-700'>Welcome, {user.name}</span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Property Details */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                    {/* Image Gallery */}
                    <div className='relative h-96 bg-gray-200'>
                        {property.images && property.images.length > 0 ? (
                            <Image
                                src={property.images[0]}
                                alt={property.title}
                                fill
                                className='object-cover'
                            />
                        ) : (
                            <div className='flex items-center justify-center h-full'>
                                <HomeIcon className='h-24 w-24 text-gray-400' />
                            </div>
                        )}
                    </div>

                    {/* Property Info */}
                    <div className='p-8'>
                        <div className='flex justify-between items-start mb-6'>
                            <div>
                                <h1 className='text-3xl font-bold text-gray-900 mb-2'>
                                    {property.title}
                                </h1>
                                <div className='flex items-center text-gray-600'>
                                    <MapPinIcon className='h-5 w-5 mr-2' />
                                    <span>
                                        {property.address.street}, {property.address.city},{' '}
                                        {property.address.country}
                                    </span>
                                </div>
                            </div>
                            <div className='text-right'>
                                <div className='text-3xl font-bold text-blue-600'>
                                    {formatPrice(property.price, property.currency)}
                                </div>
                                <div className='text-sm text-gray-600 capitalize mt-1'>
                                    {property.type}
                                </div>
                            </div>
                        </div>

                        <div className='grid grid-cols-3 gap-4 mb-8 p-4 bg-gray-50 rounded-lg'>
                            <div>
                                <div className='text-gray-600 text-sm'>Bedrooms</div>
                                <div className='text-xl font-semibold'>{property.bedrooms}</div>
                            </div>
                            <div>
                                <div className='text-gray-600 text-sm'>Bathrooms</div>
                                <div className='text-xl font-semibold'>{property.bathrooms}</div>
                            </div>
                            <div>
                                <div className='text-gray-600 text-sm'>Area</div>
                                <div className='text-xl font-semibold'>{property.area} m²</div>
                            </div>
                        </div>

                        <div className='mb-8'>
                            <h2 className='text-xl font-bold text-gray-900 mb-3'>Description</h2>
                            <p className='text-gray-600 leading-relaxed'>{property.description}</p>
                        </div>

                        {property.amenities && property.amenities.length > 0 && (
                            <div className='mb-8'>
                                <h2 className='text-xl font-bold text-gray-900 mb-3'>Amenities</h2>
                                <div className='flex flex-wrap gap-2'>
                                    {property.amenities.map((amenity, index) => (
                                        <span
                                            key={index}
                                            className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm'
                                        >
                                            {amenity}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Contact Owner Section */}
                        <div className='border-t pt-8'>
                            <h2 className='text-xl font-bold text-gray-900 mb-4'>
                                Contact Property Owner
                            </h2>
                            {messageSent ? (
                                <div className='bg-green-50 border border-green-200 rounded-lg p-4 mb-4'>
                                    <p className='text-green-800'>
                                        ✓ Message sent successfully! The owner will contact you
                                        soon.
                                    </p>
                                </div>
                            ) : null}
                            <form onSubmit={handleSendMessage}>
                                <div className='mb-4'>
                                    <label
                                        htmlFor='message'
                                        className='block text-sm font-medium text-gray-700 mb-2'
                                    >
                                        Your Message
                                    </label>
                                    <textarea
                                        id='message'
                                        rows={4}
                                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                        placeholder='Hi, I'm interested in this property...'
                                        value={message}
                                        onChange={e => setMessage(e.target.value)}
                                        required
                                    />
                                </div>
                                <button
                                    type='submit'
                                    className='bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
                                >
                                    Send Message to Owner
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

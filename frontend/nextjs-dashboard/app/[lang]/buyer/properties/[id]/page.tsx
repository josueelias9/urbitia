'use client'

import { useState, useEffect, use } from 'react'
import { useRouter } from 'next/navigation'
import { getPropertyById, getOrCreateChat, sendChatMessage } from '@/app/lib/actions'
import { Property, Chat } from '@/app/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon, MapPinIcon, HomeIcon } from '@heroicons/react/24/outline'
import type { Locale } from '@/proxy'
import enDict from '@/app/dictionaries/en.json'
import esDict from '@/app/dictionaries/es.json'

export default function BuyerPropertyDetailPage({
    params
}: {
    params: Promise<{ lang: Locale; id: string }>
}) {
    const resolvedParams = use(params)
    const router = useRouter()
    const [user, setUser] = useState<any>(null)
    const [property, setProperty] = useState<Property | null>(null)
    const [chat, setChat] = useState<Chat | null>(null)
    const [message, setMessage] = useState('')
    const [messageSent, setMessageSent] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [isSending, setIsSending] = useState(false)
    const [dict, setDict] = useState<any>(null)

    const lang = resolvedParams.lang
    const propertyId = resolvedParams.id

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

        async function fetchProperty() {
            if (propertyId) {
                console.log('Fetching property:', propertyId)
                const result = await getPropertyById(propertyId)
                console.log('Property result:', result)

                if (result.success && result.property) {
                    setProperty(result.property as Property)

                    console.log('Creating/getting chat:', {
                        buyerId: parsedUser.id,
                        ownerId: result.property.ownerId,
                        propertyId
                    })

                    // Get or create chat with owner
                    const chatResult = await getOrCreateChat(
                        parsedUser.id,
                        result.property.ownerId,
                        propertyId
                    )

                    console.log('Chat result:', chatResult)

                    if (chatResult.success && chatResult.chat) {
                        setChat(chatResult.chat as Chat)
                    }
                }
                setIsLoading(false)
            }
        }
        fetchProperty()
    }, [propertyId, router, lang])

    if (!dict) {
        return null
    }

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
        if (!message.trim() || !chat || !user) {
            console.log('Validation failed:', {
                message: message.trim(),
                chatId: chat?.id,
                userId: user?.id
            })
            return
        }

        setIsSending(true)

        try {
            console.log('Sending message:', {
                chatId: chat.id,
                userId: user.id,
                message: message.trim()
            })

            const result = await sendChatMessage(chat.id, user.id, message.trim())

            console.log('Send message result:', result)

            if (result.success) {
                setMessageSent(true)
                setMessage('')

                // Update chat with new message
                if (result.message) {
                    setChat(prev =>
                        prev
                            ? {
                                  ...prev,
                                  messages: [...(prev.messages || []), result.message]
                              }
                            : null
                    )
                }

                setTimeout(() => {
                    setMessageSent(false)
                }, 3000)
            } else {
                console.error('Failed to send message:', result.error)
                alert('Failed to send message. Please try again.')
            }
        } catch (error) {
            console.error('Error sending message:', error)
            alert('An error occurred while sending the message.')
        } finally {
            setIsSending(false)
        }
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
                    <h2 className='text-2xl font-bold text-gray-900'>
                        {dict.properties.details} {dict.common.noResults}
                    </h2>
                    <Link
                        href={`/${lang}/buyer/properties`}
                        className='mt-4 inline-block text-blue-600 hover:text-blue-800'
                    >
                        {dict.common.back} {dict.navigation.properties}
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
                                href={`/${lang}/buyer/properties`}
                                className='flex items-center text-gray-600 hover:text-gray-900'
                            >
                                <ArrowLeftIcon className='h-5 w-5 mr-2' />
                                {dict.common.back}
                            </Link>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <span className='text-gray-700'>
                                {dict.common.welcome}, {user.name}
                            </span>
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
                                        {property.street}, {property.city}, {property.country}
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
                                <div className='text-gray-600 text-sm'>
                                    {dict.properties.bedrooms}
                                </div>
                                <div className='text-xl font-semibold'>{property.bedrooms}</div>
                            </div>
                            <div>
                                <div className='text-gray-600 text-sm'>
                                    {dict.properties.bathrooms}
                                </div>
                                <div className='text-xl font-semibold'>{property.bathrooms}</div>
                            </div>
                            <div>
                                <div className='text-gray-600 text-sm'>{dict.properties.area}</div>
                                <div className='text-xl font-semibold'>{property.area} m²</div>
                            </div>
                        </div>

                        <div className='mb-8'>
                            <h2 className='text-xl font-bold text-gray-900 mb-3'>
                                {dict.properties.description}
                            </h2>
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
                                {lang === 'es'
                                    ? 'Contactar al Propietario'
                                    : 'Contact Property Owner'}
                            </h2>
                            {messageSent ? (
                                <div className='bg-green-50 border border-green-200 rounded-lg p-4 mb-4'>
                                    <p className='text-green-800'>
                                        ✓{' '}
                                        {lang === 'es'
                                            ? 'Mensaje enviado con éxito! El propietario se pondrá en contacto pronto.'
                                            : 'Message sent successfully! The owner will contact you soon.'}
                                    </p>
                                </div>
                            ) : null}
                            <form onSubmit={handleSendMessage}>
                                <div className='mb-4'>
                                    <label
                                        htmlFor='message'
                                        className='block text-sm font-medium text-gray-700 mb-2'
                                    >
                                        {lang === 'es' ? 'Tu Mensaje' : 'Your Message'}
                                    </label>
                                    <textarea
                                        id='message'
                                        rows={4}
                                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                        placeholder={
                                            lang === 'es'
                                                ? 'Hola, estoy interesado en esta propiedad...'
                                                : "Hi, I'm interested in this property..."
                                        }
                                        value={message}
                                        onChange={e => setMessage(e.target.value)}
                                        required
                                        disabled={isSending}
                                    />
                                </div>
                                <button
                                    type='submit'
                                    className='bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed'
                                    disabled={isSending}
                                >
                                    {isSending
                                        ? lang === 'es'
                                            ? 'Enviando...'
                                            : 'Sending...'
                                        : lang === 'es'
                                          ? 'Enviar Mensaje'
                                          : 'Send Message to Owner'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

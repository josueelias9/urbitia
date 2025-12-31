'use client'

import { useState } from 'react'
import { useAuth } from '@/app/marketplace/lib/auth-context'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeftIcon, PhotoIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function CreatePropertyPage() {
    const { user } = useAuth()
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        currency: 'USD',
        type: 'apartment',
        bedrooms: '',
        bathrooms: '',
        area: '',
        street: '',
        city: '',
        country: '',
        zipCode: '',
        amenities: [] as string[],
        images: [] as string[]
    })

    const [newAmenity, setNewAmenity] = useState('')
    const [newImageUrl, setNewImageUrl] = useState('')

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const addAmenity = () => {
        if (newAmenity.trim() && !formData.amenities.includes(newAmenity.trim())) {
            setFormData(prev => ({
                ...prev,
                amenities: [...prev.amenities, newAmenity.trim()]
            }))
            setNewAmenity('')
        }
    }

    const removeAmenity = (amenity: string) => {
        setFormData(prev => ({
            ...prev,
            amenities: prev.amenities.filter(a => a !== amenity)
        }))
    }

    const addImageUrl = () => {
        if (newImageUrl.trim() && !formData.images.includes(newImageUrl.trim())) {
            setFormData(prev => ({
                ...prev,
                images: [...prev.images, newImageUrl.trim()]
            }))
            setNewImageUrl('')
        }
    }

    const removeImageUrl = (imageUrl: string) => {
        setFormData(prev => ({
            ...prev,
            images: prev.images.filter(img => img !== imageUrl)
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Validate required fields
        const requiredFields = [
            'title',
            'description',
            'price',
            'bedrooms',
            'bathrooms',
            'area',
            'street',
            'city',
            'country'
        ]
        const missingFields = requiredFields.filter(
            field => !formData[field as keyof typeof formData]
        )

        if (missingFields.length > 0) {
            alert(`Please fill in all required fields: ${missingFields.join(', ')}`)
            setIsLoading(false)
            return
        }

        if (formData.images.length === 0) {
            alert('Please add at least one image URL')
            setIsLoading(false)
            return
        }

        // Simulate property creation (in real app, this would be an API call)
        try {
            const newProperty = {
                id: `prop-${Date.now()}`,
                title: formData.title,
                description: formData.description,
                price: parseInt(formData.price),
                currency: formData.currency,
                type: formData.type,
                status: 'available',
                bedrooms: parseInt(formData.bedrooms),
                bathrooms: parseInt(formData.bathrooms),
                area: parseInt(formData.area),
                address: {
                    street: formData.street,
                    city: formData.city,
                    country: formData.country,
                    zipCode: formData.zipCode
                },
                images: formData.images,
                amenities: formData.amenities,
                ownerId: user?.id,
                createdAt: new Date(),
                updatedAt: new Date()
            }

            // In a real app, save to database
            console.log('New property created:', newProperty)

            // Redirect to owner dashboard
            router.push('/marketplace/owner/dashboard')
        } catch (error) {
            console.error('Error creating property:', error)
            alert('Error creating property. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    if (!user || user.role !== 'owner') {
        return (
            <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
                <div className='text-center'>
                    <div className='text-gray-400 text-6xl mb-4'>🔒</div>
                    <h1 className='text-2xl font-bold text-gray-900 mb-2'>Access Denied</h1>
                    <p className='text-gray-600 mb-6'>Only property owners can add properties.</p>
                    <Link
                        href='/marketplace/login?role=owner'
                        className='bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors'
                    >
                        Sign In as Owner
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
                                href='/marketplace/owner/dashboard'
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
                            <span className='text-sm text-gray-600'>Hello, {user.name}</span>
                        </div>
                    </div>
                </div>
            </nav>

            <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                <div className='bg-white rounded-lg shadow-sm p-8'>
                    <div className='mb-8'>
                        <h1 className='text-3xl font-bold text-gray-900'>Add New Property</h1>
                        <p className='text-gray-600 mt-2'>
                            Fill in the details to list your property on the marketplace
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className='space-y-8'>
                        {/* Basic Information */}
                        <div>
                            <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                                Basic Information
                            </h2>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div className='md:col-span-2'>
                                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                                        Property Title *
                                    </label>
                                    <input
                                        type='text'
                                        name='title'
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        className='w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                        placeholder='e.g., Modern Downtown Apartment'
                                        required
                                    />
                                </div>

                                <div className='md:col-span-2'>
                                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                                        Description *
                                    </label>
                                    <textarea
                                        name='description'
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className='w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                        placeholder='Describe your property in detail...'
                                        required
                                    />
                                </div>

                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                                        Price *
                                    </label>
                                    <input
                                        type='number'
                                        name='price'
                                        value={formData.price}
                                        onChange={handleInputChange}
                                        className='w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                        placeholder='450000'
                                        required
                                    />
                                </div>

                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                                        Currency
                                    </label>
                                    <select
                                        name='currency'
                                        value={formData.currency}
                                        onChange={handleInputChange}
                                        className='w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                    >
                                        <option value='USD'>USD</option>
                                        <option value='EUR'>EUR</option>
                                        <option value='GBP'>GBP</option>
                                    </select>
                                </div>

                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                                        Property Type
                                    </label>
                                    <select
                                        name='type'
                                        value={formData.type}
                                        onChange={handleInputChange}
                                        className='w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                    >
                                        <option value='apartment'>Apartment</option>
                                        <option value='house'>House</option>
                                        <option value='condo'>Condo</option>
                                        <option value='commercial'>Commercial</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Property Details */}
                        <div>
                            <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                                Property Details
                            </h2>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                                        Bedrooms *
                                    </label>
                                    <input
                                        type='number'
                                        name='bedrooms'
                                        value={formData.bedrooms}
                                        onChange={handleInputChange}
                                        className='w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                        min='0'
                                        required
                                    />
                                </div>

                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                                        Bathrooms *
                                    </label>
                                    <input
                                        type='number'
                                        name='bathrooms'
                                        value={formData.bathrooms}
                                        onChange={handleInputChange}
                                        className='w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                        min='0'
                                        step='0.5'
                                        required
                                    />
                                </div>

                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                                        Area (m²) *
                                    </label>
                                    <input
                                        type='number'
                                        name='area'
                                        value={formData.area}
                                        onChange={handleInputChange}
                                        className='w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                        min='1'
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Address */}
                        <div>
                            <h2 className='text-xl font-semibold text-gray-900 mb-4'>Address</h2>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div className='md:col-span-2'>
                                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                                        Street Address *
                                    </label>
                                    <input
                                        type='text'
                                        name='street'
                                        value={formData.street}
                                        onChange={handleInputChange}
                                        className='w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                        placeholder='123 Main Street, Apt 4B'
                                        required
                                    />
                                </div>

                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                                        City *
                                    </label>
                                    <input
                                        type='text'
                                        name='city'
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        className='w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                        placeholder='New York'
                                        required
                                    />
                                </div>

                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                                        Country *
                                    </label>
                                    <input
                                        type='text'
                                        name='country'
                                        value={formData.country}
                                        onChange={handleInputChange}
                                        className='w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                        placeholder='USA'
                                        required
                                    />
                                </div>

                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                                        ZIP Code
                                    </label>
                                    <input
                                        type='text'
                                        name='zipCode'
                                        value={formData.zipCode}
                                        onChange={handleInputChange}
                                        className='w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                        placeholder='10001'
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Images */}
                        <div>
                            <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                                Property Images
                            </h2>
                            <div className='space-y-4'>
                                <div className='flex gap-2'>
                                    <input
                                        type='url'
                                        value={newImageUrl}
                                        onChange={e => setNewImageUrl(e.target.value)}
                                        className='flex-1 border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                        placeholder='https://example.com/image.jpg'
                                    />
                                    <button
                                        type='button'
                                        onClick={addImageUrl}
                                        className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors'
                                    >
                                        Add Image
                                    </button>
                                </div>

                                {formData.images.length > 0 && (
                                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                                        {formData.images.map((imageUrl, index) => (
                                            <div key={index} className='relative group'>
                                                <div className='aspect-square bg-gray-100 rounded-md flex items-center justify-center overflow-hidden'>
                                                    <img
                                                        src={imageUrl}
                                                        alt={`Property ${index + 1}`}
                                                        className='w-full h-full object-cover'
                                                        onError={e => {
                                                            const target =
                                                                e.target as HTMLImageElement
                                                            target.style.display = 'none'
                                                            target.nextElementSibling!.classList.remove(
                                                                'hidden'
                                                            )
                                                        }}
                                                    />
                                                    <div className='hidden w-full h-full flex items-center justify-center'>
                                                        <PhotoIcon className='h-8 w-8 text-gray-400' />
                                                    </div>
                                                </div>
                                                <button
                                                    type='button'
                                                    onClick={() => removeImageUrl(imageUrl)}
                                                    className='absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity'
                                                >
                                                    <XMarkIcon className='h-4 w-4' />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Amenities */}
                        <div>
                            <h2 className='text-xl font-semibold text-gray-900 mb-4'>Amenities</h2>
                            <div className='space-y-4'>
                                <div className='flex gap-2'>
                                    <input
                                        type='text'
                                        value={newAmenity}
                                        onChange={e => setNewAmenity(e.target.value)}
                                        className='flex-1 border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                        placeholder='e.g., Swimming Pool, Gym, Parking'
                                    />
                                    <button
                                        type='button'
                                        onClick={addAmenity}
                                        className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors'
                                    >
                                        Add Amenity
                                    </button>
                                </div>

                                {formData.amenities.length > 0 && (
                                    <div className='flex flex-wrap gap-2'>
                                        {formData.amenities.map((amenity, index) => (
                                            <span
                                                key={index}
                                                className='inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm'
                                            >
                                                {amenity}
                                                <button
                                                    type='button'
                                                    onClick={() => removeAmenity(amenity)}
                                                    className='ml-2 text-blue-600 hover:text-blue-800'
                                                >
                                                    <XMarkIcon className='h-4 w-4' />
                                                </button>
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className='flex gap-4 pt-6 border-t border-gray-200'>
                            <Link
                                href='/marketplace/owner/dashboard'
                                className='flex-1 bg-gray-200 text-gray-800 text-center py-3 rounded-md hover:bg-gray-300 transition-colors'
                            >
                                Cancel
                            </Link>
                            <button
                                type='submit'
                                disabled={isLoading}
                                className='flex-1 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                            >
                                {isLoading ? 'Publishing...' : 'Publish Property'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

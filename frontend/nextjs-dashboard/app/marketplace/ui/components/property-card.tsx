import Image from 'next/image'
import Link from 'next/link'
import { Property } from '@/app/marketplace/lib/types'
import { HeartIcon, MapPinIcon, HomeIcon, BanknotesIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'

interface PropertyCardProps {
    property: Property
    isFavorite?: boolean
    onFavoriteToggle?: (propertyId: string) => void
    showOwnerActions?: boolean
}

export function PropertyCard({
    property,
    isFavorite = false,
    onFavoriteToggle,
    showOwnerActions = false
}: PropertyCardProps) {
    const formatPrice = (price: number, currency: string) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price)
    }

    return (
        <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
            <div className='relative h-48'>
                <Image
                    src={property.images[0]}
                    alt={property.title}
                    fill
                    className='object-cover'
                />
                <div className='absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium capitalize'>
                    {property.type}
                </div>
                <div
                    className={`absolute top-3 right-3 px-2 py-1 rounded text-sm font-medium ${
                        property.status === 'available'
                            ? 'bg-green-500 text-white'
                            : property.status === 'sold'
                              ? 'bg-red-500 text-white'
                              : 'bg-yellow-500 text-white'
                    }`}
                >
                    {property.status}
                </div>

                {onFavoriteToggle && (
                    <button
                        onClick={e => {
                            e.preventDefault()
                            onFavoriteToggle(property.id)
                        }}
                        className='absolute bottom-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white transition-colors'
                    >
                        {isFavorite ? (
                            <HeartSolidIcon className='h-5 w-5 text-red-500' />
                        ) : (
                            <HeartIcon className='h-5 w-5 text-gray-600' />
                        )}
                    </button>
                )}
            </div>

            <div className='p-4'>
                <Link href={`/marketplace/properties/${property.id}`}>
                    <h3 className='font-semibold text-lg mb-2 hover:text-blue-600 transition-colors cursor-pointer'>
                        {property.title}
                    </h3>
                </Link>

                <p className='text-gray-600 text-sm mb-3 line-clamp-2'>{property.description}</p>

                <div className='flex items-center justify-between mb-3'>
                    <span className='text-2xl font-bold text-green-600'>
                        {formatPrice(property.price, property.currency)}
                    </span>
                </div>

                <div className='grid grid-cols-3 gap-4 text-sm text-gray-600 mb-3'>
                    <div className='flex items-center'>
                        <HomeIcon className='h-4 w-4 mr-1' />
                        {property.bedrooms} bed
                    </div>
                    <div className='flex items-center'>
                        <span className='text-xs mr-1'>🚿</span>
                        {property.bathrooms} bath
                    </div>
                    <div className='flex items-center'>
                        <span className='text-xs mr-1'>📐</span>
                        {property.area}m²
                    </div>
                </div>

                <div className='flex items-center text-sm text-gray-500 mb-4'>
                    <MapPinIcon className='h-4 w-4 mr-1' />
                    {property.address.city}, {property.address.country}
                </div>

                {showOwnerActions ? (
                    <div className='flex gap-2'>
                        <Link
                            href={`/marketplace/owner/properties/${property.id}/edit`}
                            className='flex-1 bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition-colors'
                        >
                            Edit
                        </Link>
                        <button className='flex-1 bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition-colors'>
                            Delete
                        </button>
                    </div>
                ) : (
                    <Link
                        href={`/marketplace/properties/${property.id}`}
                        className='block w-full bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition-colors'
                    >
                        View Details
                    </Link>
                )}
            </div>
        </div>
    )
}

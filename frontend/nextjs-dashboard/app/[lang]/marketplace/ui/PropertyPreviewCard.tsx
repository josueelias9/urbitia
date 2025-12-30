import Image from 'next/image'
import Link from 'next/link'
import { Property } from '../../../lib/types'

export function PropertyPreviewCard({ property, lang }: { property: Property; lang: string }) {
    const formatPrice = (price: number, currency: string) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price)
    }
    return (
        <Link href={`/${lang}/buyer/properties/${property.id}`}>
            <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer'>
                <div className='relative h-48'>
                    <Image
                        src={property.images[0]}
                        alt={property.title}
                        fill
                        className='object-cover'
                    />
                    <div className='absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded text-sm font-medium'>
                        {property.status}
                    </div>
                </div>
                <div className='p-4'>
                    <h3 className='font-semibold text-lg mb-2 truncate'>{property.title}</h3>
                    <p className='text-gray-600 text-sm mb-3 line-clamp-2'>
                        {property.description}
                    </p>
                    <div className='flex items-center justify-between'>
                        <span className='text-2xl font-bold text-green-600'>
                            {formatPrice(property.price, property.currency)}
                        </span>
                        <div className='text-sm text-gray-500'>
                            {property.bedrooms} bed • {property.bathrooms} bath • {property.area}m²
                        </div>
                    </div>
                    <p className='text-sm text-gray-500 mt-2'>
                        {property.city}, {property.country}
                    </p>
                </div>
            </div>
        </Link>
    )
}

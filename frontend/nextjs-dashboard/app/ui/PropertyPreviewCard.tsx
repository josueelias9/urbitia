'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { InformationCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Property } from '@/app/lib/types'

export function PropertyPreviewCard({
    property,
    lang,
    dict
}: {
    property: Property
    lang: string
    dict?: any
}) {
    const formatPrice = (price: number, currency: string) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price)
    }
    const [showLegal, setShowLegal] = useState(false)
    return (
        <>
            <Link href={`/${lang}/buyer/properties/${property.id}`}>
                <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer'>
                    <div className='relative h-48'>
                        <Image
                            src={property.images[0]}
                            alt={property.title}
                            fill
                            className='object-cover'
                        />
                        <div className='absolute top-3 right-3 flex items-center space-x-2'>
                            <div className='bg-green-500 text-white px-2 py-1 rounded text-sm font-medium'>
                                {property.status}
                            </div>
                            <button
                                onClick={e => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    setShowLegal(true)
                                }}
                                className='p-1 bg-white rounded-full shadow text-gray-700 hover:bg-gray-100'
                                aria-label='Legal status'
                            >
                                <InformationCircleIcon className='h-5 w-5' />
                            </button>
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
                                {property.bedrooms} bed • {property.bathrooms} bath •{' '}
                                {property.area}m²
                            </div>
                        </div>
                        <p className='text-sm text-gray-500 mt-2'>
                            {property.city}, {property.country}
                        </p>
                    </div>
                </div>
            </Link>

            {showLegal && (
                <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4'>
                    <div className='bg-white rounded-lg max-w-lg w-full shadow-lg overflow-hidden'>
                        <div className='p-4 border-b flex items-center justify-between'>
                            <h3 className='text-lg font-semibold'>
                                {dict?.properties?.legalStatusTitle || 'Legal Status'}
                            </h3>
                            <button
                                className='p-2'
                                onClick={() => setShowLegal(false)}
                                aria-label='Close'
                            >
                                <XMarkIcon className='h-6 w-6 text-gray-700' />
                            </button>
                        </div>
                        <div className='p-4 text-sm text-gray-700 space-y-4'>
                            {property.legal_status ? (
                                <p>{property.legal_status}</p>
                            ) : (
                                <>
                                    <p>{dict?.properties?.legalStatusText1}</p>
                                    <p>{dict?.properties?.legalStatusText2}</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

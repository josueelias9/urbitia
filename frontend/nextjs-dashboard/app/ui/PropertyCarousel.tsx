'use client'

import { useState, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

interface CarouselItem {
    id: number
    title: string
    description: string
    image: string
    price?: string
}

interface PropertyCarouselProps {
    items: CarouselItem[]
    autoPlay?: boolean
    interval?: number
}

export default function PropertyCarousel({
    items,
    autoPlay = true,
    interval = 5000
}: PropertyCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (!autoPlay) return

        const timer = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % items.length)
        }, interval)

        return () => clearInterval(timer)
    }, [autoPlay, interval, items.length])

    const goToPrevious = () => {
        setCurrentIndex(prev => (prev - 1 + items.length) % items.length)
    }

    const goToNext = () => {
        setCurrentIndex(prev => (prev + 1) % items.length)
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    if (items.length === 0) return null

    return (
        <div className='relative w-full max-w-5xl mx-auto'>
            {/* Carousel Container */}
            <div className='relative h-96 overflow-hidden rounded-2xl shadow-2xl'>
                {/* Slides */}
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className={`absolute w-full h-full transition-opacity duration-500 ${
                            index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <div className='relative w-full h-full bg-gradient-to-r from-blue-500 to-purple-600'>
                            <div className='absolute inset-0 flex items-center justify-center text-white p-8'>
                                <div className='text-center max-w-2xl'>
                                    <h3 className='text-3xl md:text-4xl font-bold mb-4'>
                                        {item.title}
                                    </h3>
                                    <p className='text-lg md:text-xl mb-4'>{item.description}</p>
                                    {item.price && (
                                        <p className='text-2xl font-semibold'>{item.price}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Previous Button */}
                <button
                    onClick={goToPrevious}
                    className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-all backdrop-blur-sm'
                    aria-label='Previous slide'
                >
                    <ChevronLeftIcon className='h-6 w-6' />
                </button>

                {/* Next Button */}
                <button
                    onClick={goToNext}
                    className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-all backdrop-blur-sm'
                    aria-label='Next slide'
                >
                    <ChevronRightIcon className='h-6 w-6' />
                </button>
            </div>

            {/* Dots Navigation */}
            <div className='flex justify-center mt-6 gap-2'>
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                            index === currentIndex
                                ? 'bg-blue-600 w-8'
                                : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

import Link from 'next/link'
import { useAuth } from '@/app/lib/auth-context'

export function HeroSection() {
    const { user } = useAuth()
    return (
        <div className='bg-gradient-to-r from-blue-600 to-purple-700 text-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
                <div className='text-center'>
                    <h1 className='text-4xl md:text-6xl font-bold mb-6'>
                        Find Your Perfect Property
                    </h1>
                    <p className='text-xl md:text-2xl mb-8 max-w-3xl mx-auto'>
                        Discover amazing real estate opportunities or list your property with our
                        trusted marketplace
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                        {!user ? (
                            <>
                                <Link
                                    href='/marketplace/login?role=buyer'
                                    className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
                                >
                                    I'm Looking to Buy
                                </Link>
                                <Link
                                    href='/marketplace/login?role=owner'
                                    className='bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors'
                                >
                                    I'm a Property Owner
                                </Link>
                            </>
                        ) : user.role === 'buyer' ? (
                            <Link
                                href='/marketplace/properties'
                                className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
                            >
                                Browse Properties
                            </Link>
                        ) : (
                            <Link
                                href='/marketplace/owner/dashboard'
                                className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
                            >
                                Go to Dashboard
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

import Link from 'next/link'

export default function HomePage() {
    return (
        <div className='min-h-screen bg-gray-50'>
            {/* Hero Section */}
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
                            <Link
                                href='/login?role=buyer'
                                className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
                            >
                                I'm Looking to Buy
                            </Link>
                            <Link
                                href='/login?role=owner'
                                className='bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors'
                            >
                                I'm a Property Owner
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl font-bold text-gray-900 mb-4'>Why Choose Us?</h2>
                    <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                        We make finding and listing properties simple and efficient
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div className='bg-white p-6 rounded-lg shadow-sm'>
                        <div className='text-blue-600 text-4xl mb-4'>🏠</div>
                        <h3 className='text-xl font-semibold mb-2'>Wide Selection</h3>
                        <p className='text-gray-600'>
                            Browse through thousands of verified properties across different locations
                        </p>
                    </div>
                    <div className='bg-white p-6 rounded-lg shadow-sm'>
                        <div className='text-blue-600 text-4xl mb-4'>💬</div>
                        <h3 className='text-xl font-semibold mb-2'>Direct Messaging</h3>
                        <p className='text-gray-600'>
                            Connect directly with property owners without intermediaries
                        </p>
                    </div>
                    <div className='bg-white p-6 rounded-lg shadow-sm'>
                        <div className='text-blue-600 text-4xl mb-4'>✨</div>
                        <h3 className='text-xl font-semibold mb-2'>Easy Listing</h3>
                        <p className='text-gray-600'>
                            Property owners can list their properties in minutes
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

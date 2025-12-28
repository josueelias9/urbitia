import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'

export function NavigationBar() {
    const { data: session, status } = useSession()
    const user = session?.user
    return (
        <nav className='bg-white shadow-sm border-b'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>
                    <Link href='/marketplace' className='flex items-center space-x-2'>
                        <div className='w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center'>
                            <span className='text-white font-bold text-lg'>R</span>
                        </div>
                        <span className='font-bold text-xl text-gray-800'>RealEstate</span>
                    </Link>

                    <div className='flex items-center space-x-4'>
                        {user ? (
                            <>
                                <span className='text-sm text-gray-600'>Hello, {user.name}</span>
                                <Link
                                    href='/marketplace/properties'
                                    className='text-gray-600 hover:text-gray-800'
                                >
                                    Properties
                                </Link>
                                <Link
                                    href='/marketplace/chat'
                                    className='text-gray-600 hover:text-gray-800'
                                >
                                    Messages
                                </Link>
                                <Link
                                    href='/marketplace/favorites'
                                    className='text-gray-600 hover:text-gray-800'
                                >
                                    Favorites
                                </Link>
                                <button
                                    onClick={() => signOut({ callbackUrl: '/marketplace' })}
                                    className='bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors'
                                >
                                    Sign Out
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    href='/marketplace/login'
                                    className='text-gray-600 hover:text-gray-800'
                                >
                                    Sign In
                                </Link>
                                <Link
                                    href='/marketplace/login'
                                    className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors'
                                >
                                    Get Started
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'

export function NavigationBar() {
    const { data: session, status } = useSession()
    const user = session?.user
    return (
        <nav className='bg-urbitia-dark shadow-sm border-b border-urbitia-primary/20'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>
                    <Link href='/marketplace' className='flex items-center space-x-2'>
                        <div className='w-8 h-8 bg-urbitia-primary rounded-lg flex items-center justify-center'>
                            <span className='text-white font-bold text-lg'>U</span>
                        </div>
                        <span className='font-bold text-xl text-urbitia-secondary'>Urbitia</span>
                    </Link>

                    <div className='flex items-center space-x-4'>
                        {user ? (
                            <>
                                <span className='text-sm text-urbitia-secondary'>
                                    Hello, {user.name}
                                </span>
                                <Link
                                    href='/marketplace/properties'
                                    className='text-urbitia-secondary hover:text-urbitia-primary transition-colors'
                                >
                                    Properties
                                </Link>
                                <Link
                                    href='/marketplace/chat'
                                    className='text-urbitia-secondary hover:text-urbitia-primary transition-colors'
                                >
                                    Messages
                                </Link>
                                <Link
                                    href='/marketplace/favorites'
                                    className='text-urbitia-secondary hover:text-urbitia-primary transition-colors'
                                >
                                    Favorites
                                </Link>
                                <button
                                    onClick={() => signOut({ callbackUrl: '/marketplace' })}
                                    className='bg-urbitia-primary text-white px-4 py-2 rounded-md hover:bg-urbitia-primary/80 transition-colors'
                                >
                                    Sign Out
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    href='/marketplace/login'
                                    className='text-urbitia-secondary hover:text-urbitia-primary transition-colors'
                                >
                                    Sign In
                                </Link>
                                <Link
                                    href='/marketplace/login'
                                    className='bg-urbitia-primary text-white px-4 py-2 rounded-md hover:bg-urbitia-primary/80 transition-colors'
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

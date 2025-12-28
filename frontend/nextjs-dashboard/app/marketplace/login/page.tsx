import AcmeLogo from '@/app/ui/acme-logo'
import LoginForm from '@/app/ui/login-form'
import { Suspense } from 'react'
import Link from 'next/link'

export default function MarketplaceLoginPage() {

    return (
        <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                <Link
                    href='/marketplace'
                    className='flex items-center justify-center space-x-2 mb-6'
                >
                    <div className='w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center'>
                        <span className='text-white font-bold text-xl'>R</span>
                    </div>
                    <span className='font-bold text-2xl text-gray-800'>RealEstate</span>
                </Link>

                <h2 className='mt-6 text-center text-3xl font-bold text-gray-900'>
                    Sign in to your account
                </h2>
                <p className='mt-2 text-center text-sm text-gray-600'>
                    Or{' '}
                    <Link
                        href='/marketplace'
                        className='font-medium text-blue-600 hover:text-blue-500'
                    >
                        return to marketplace
                    </Link>
                </p>
            </div>

            <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                    <Suspense fallback={<div>Loading...</div>}>
                        <LoginForm />
                    </Suspense>
                    
                    <div className='mt-6'>
                        <div className='relative'>
                            <div className='absolute inset-0 flex items-center'>
                                <div className='w-full border-t border-gray-300' />
                            </div>
                            <div className='relative flex justify-center text-sm'>
                                <span className='px-2 bg-white text-gray-500'>Demo Account</span>
                            </div>
                        </div>
                        <div className='mt-3 text-center text-sm text-gray-600'>
                            <p>Use any email and password to sign in.</p>
                            <p className='text-xs text-gray-500 mt-1'>
                                This is a demo with NextAuth authentication.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

'use client'

import AcmeLogo from '@/app/ui/acme-logo'
import LoginForm from '@/app/ui/login/login-form'
import { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ArrowRightIcon } from '@heroicons/react/20/solid'

function MarketplaceLoginContent() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const searchParams = useSearchParams()
    const role = searchParams.get('role') as 'buyer' | 'owner' | null

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        setIsLoading(true)

        if (email && password) {
            const mockUser = {
                id: `${role}-${Date.now()}`,
                name: email.split('@')[0],
                email,
                role: role!,
                avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
                phone: '+1234567890',
                createdAt: new Date()
            }

            localStorage.setItem('marketplace-user', JSON.stringify(mockUser))

            if (role === 'buyer') {
                router.push('/buyer/properties')
            } else {
                router.push('/owner/dashboard')
            }
        } else {
            setError('Please enter email and password')
            setIsLoading(false)
        }
    }

    return (
        <div className='max-w-md w-full space-y-8'>
            <div>
                <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
                    {role === 'buyer' ? 'Sign in as a Buyer' : 'Sign in as a Property Owner'}
                </h2>
                <p className='mt-2 text-center text-sm text-gray-600'>
                    {role === 'buyer'
                        ? 'Access your account to browse properties'
                        : 'Access your dashboard to manage listings'}
                </p>
            </div>
            <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
                <div className='rounded-md shadow-sm -space-y-px'>
                    <div>
                        <label htmlFor='email-address' className='sr-only'>
                            Email address
                        </label>
                        <input
                            id='email-address'
                            name='email'
                            type='email'
                            autoComplete='email'
                            required
                            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
                            placeholder='Email address'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='password' className='sr-only'>
                            Password
                        </label>
                        <input
                            id='password'
                            name='password'
                            type='password'
                            autoComplete='current-password'
                            required
                            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
                            placeholder='Password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                {error && (
                    <div className='rounded-md bg-red-50 p-4'>
                        <p className='text-sm text-red-800'>{error}</p>
                    </div>
                )}

                <div>
                    <button
                        type='submit'
                        disabled={isLoading}
                        className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50'
                    >
                        <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                            <ArrowRightIcon
                                className='h-5 w-5 text-blue-500 group-hover:text-blue-400'
                                aria-hidden='true'
                            />
                        </span>
                        {isLoading ? 'Signing in...' : 'Sign in'}
                    </button>
                </div>
            </form>
        </div>
    )
}

function LoginPageContent() {
    const searchParams = useSearchParams()
    const role = searchParams.get('role')
    const router = useRouter()

    useEffect(() => {
        if (role && role !== 'buyer' && role !== 'owner') {
            router.push('/')
        }
    }, [role, router])

    // Marketplace login (buyer or owner)
    if (role === 'buyer' || role === 'owner') {
        return (
            <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
                <MarketplaceLoginContent />
            </div>
        )
    }

    // Dashboard login (default)
    return (
        <main className='flex items-center justify-center md:h-screen'>
            <div className='relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32'>
                <div className='flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36'>
                    <div className='w-32 text-white md:w-36'>
                        <AcmeLogo />
                    </div>
                </div>
                <LoginForm />
            </div>
        </main>
    )
}

export default function LoginPage() {
    return (
        <Suspense
            fallback={
                <div className='min-h-screen flex items-center justify-center'>
                    <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
                </div>
            }
        >
            <LoginPageContent />
        </Suspense>
    )
}

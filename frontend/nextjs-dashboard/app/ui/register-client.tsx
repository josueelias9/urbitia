'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
    UserCircleIcon,
    EnvelopeIcon,
    PhoneIcon,
    LockClosedIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'

interface RegisterClientProps {
    dict: any
    lang: string
}

export default function RegisterClient({ dict, lang }: RegisterClientProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        role: 'buyer' as 'buyer' | 'owner'
    })
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError('')

        try {
            // Generate avatar using DiceBear API
            const avatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(formData.email)}`

            // Create user via action
            const { upsertMarketplaceUser } = await import('@/app/lib/actions')
            const result = await upsertMarketplaceUser({
                id: crypto.randomUUID(),
                name: formData.name,
                email: formData.email,
                role: formData.role,
                avatar,
                phone: formData.phone || undefined
            })

            if (result.success) {
                // Store in localStorage
                localStorage.setItem('marketplace-user', JSON.stringify(result.user))

                // Redirect based on role
                if (formData.role === 'buyer') {
                    router.push(`/${lang}/buyer/properties`)
                } else {
                    router.push(`/${lang}/owner/dashboard`)
                }
            } else {
                setError(result.error || 'Failed to create account')
            }
        } catch (err) {
            console.error('Registration error:', err)
            setError('An error occurred during registration')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-md w-full'>
                {/* Logo */}
                <div className='text-center mb-8'>
                    <Link href={`/${lang}`}>
                        <Image
                            src='/urbitia.jpeg'
                            alt='Urbitia'
                            width={100}
                            height={100}
                            className='mx-auto rounded-full shadow-lg'
                        />
                    </Link>
                    <h2 className='mt-6 text-3xl font-bold text-gray-900'>
                        {dict.auth?.registerTitle || 'Join Urbitia'}
                    </h2>
                    <p className='mt-2 text-sm text-gray-600'>
                        {dict.auth?.registerSubtitle ||
                            'Create your account to start your real estate journey'}
                    </p>
                </div>

                {/* Registration Form */}
                <div className='bg-white py-8 px-6 shadow-xl rounded-lg'>
                    <form onSubmit={handleSubmit} className='space-y-6'>
                        {/* Name */}
                        <div>
                            <label
                                htmlFor='name'
                                className='block text-sm font-medium text-gray-700 mb-1'
                            >
                                {dict.auth?.fullName || 'Full Name'}
                            </label>
                            <div className='relative'>
                                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                    <UserCircleIcon className='h-5 w-5 text-gray-400' />
                                </div>
                                <input
                                    id='name'
                                    name='name'
                                    type='text'
                                    required
                                    value={formData.name}
                                    onChange={e =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    className='block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                                    placeholder='Juan Pérez'
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor='email'
                                className='block text-sm font-medium text-gray-700 mb-1'
                            >
                                {dict.auth?.email || 'Email'}
                            </label>
                            <div className='relative'>
                                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                    <EnvelopeIcon className='h-5 w-5 text-gray-400' />
                                </div>
                                <input
                                    id='email'
                                    name='email'
                                    type='email'
                                    required
                                    value={formData.email}
                                    onChange={e =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                    className='block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                                    placeholder='juan@ejemplo.com'
                                />
                            </div>
                        </div>

                        {/* Phone (Optional) */}
                        <div>
                            <label
                                htmlFor='phone'
                                className='block text-sm font-medium text-gray-700 mb-1'
                            >
                                {dict.auth?.phone || 'Phone Number (Optional)'}
                            </label>
                            <div className='relative'>
                                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                    <PhoneIcon className='h-5 w-5 text-gray-400' />
                                </div>
                                <input
                                    id='phone'
                                    name='phone'
                                    type='tel'
                                    value={formData.phone}
                                    onChange={e =>
                                        setFormData({ ...formData, phone: e.target.value })
                                    }
                                    className='block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                                    placeholder='+34 600 000 000'
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor='password'
                                className='block text-sm font-medium text-gray-700 mb-1'
                            >
                                {dict.auth?.password || 'Password'}
                            </label>
                            <div className='relative'>
                                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                    <LockClosedIcon className='h-5 w-5 text-gray-400' />
                                </div>
                                <input
                                    id='password'
                                    name='password'
                                    type='password'
                                    required
                                    value={formData.password}
                                    onChange={e =>
                                        setFormData({ ...formData, password: e.target.value })
                                    }
                                    className='block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                                    placeholder='••••••••'
                                    minLength={6}
                                />
                            </div>
                        </div>

                        {/* Role Selection */}
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>
                                {dict.auth?.iAm || 'I am a'}
                            </label>
                            <div className='grid grid-cols-2 gap-4'>
                                <button
                                    type='button'
                                    onClick={() => setFormData({ ...formData, role: 'buyer' })}
                                    className={`py-3 px-4 rounded-lg border-2 transition-all ${
                                        formData.role === 'buyer'
                                            ? 'border-blue-600 bg-blue-50 text-blue-600 font-semibold'
                                            : 'border-gray-300 hover:border-gray-400'
                                    }`}
                                >
                                    🏡 {dict.auth?.buyer || 'Buyer'}
                                </button>
                                <button
                                    type='button'
                                    onClick={() => setFormData({ ...formData, role: 'owner' })}
                                    className={`py-3 px-4 rounded-lg border-2 transition-all ${
                                        formData.role === 'owner'
                                            ? 'border-blue-600 bg-blue-50 text-blue-600 font-semibold'
                                            : 'border-gray-300 hover:border-gray-400'
                                    }`}
                                >
                                    🔑 {dict.auth?.owner || 'Owner'}
                                </button>
                            </div>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className='bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm'>
                                {error}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type='submit'
                            disabled={isLoading}
                            className='w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors'
                        >
                            {isLoading
                                ? dict.auth?.registering || 'Creating account...'
                                : dict.auth?.createAccount || 'Create Account'}
                        </button>
                    </form>

                    {/* Login Link */}
                    <div className='mt-6 text-center'>
                        <p className='text-sm text-gray-600'>
                            {dict.auth?.alreadyHaveAccount || 'Already have an account?'}{' '}
                            <Link
                                href={`/${lang}/login`}
                                className='text-blue-600 font-semibold hover:text-blue-700'
                            >
                                {dict.navigation?.login || 'Sign In'}
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

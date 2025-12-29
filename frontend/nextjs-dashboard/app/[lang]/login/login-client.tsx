'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { upsertMarketplaceUser } from '@/app/[lang]/marketplace/lib/actions'

interface LoginClientProps {
    dict: {
        auth: {
            signIn: string
            email: string
            password: string
            signOut: string
        }
        navigation: {
            login: string
        }
    }
    lang: string
}

export function LoginClient({ dict, lang }: LoginClientProps) {
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
                phone: '+1234567890'
            }

            // Create user in database
            const result = await upsertMarketplaceUser(mockUser)
            
            if (!result.success) {
                setError(lang === 'es' ? 'Error al crear usuario' : 'Error creating user')
                setIsLoading(false)
                return
            }

            localStorage.setItem('marketplace-user', JSON.stringify(mockUser))

            if (role === 'buyer') {
                router.push(`/${lang}/buyer/properties`)
            } else {
                router.push(`/${lang}/owner/dashboard`)
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
                    {role === 'buyer' 
                        ? lang === 'es' ? 'Iniciar sesión como Comprador' : 'Sign in as a Buyer'
                        : lang === 'es' ? 'Iniciar sesión como Propietario' : 'Sign in as a Property Owner'}
                </h2>
                <p className='mt-2 text-center text-sm text-gray-600'>
                    {role === 'buyer'
                        ? lang === 'es' ? 'Accede a tu cuenta para explorar propiedades' : 'Access your account to browse properties'
                        : lang === 'es' ? 'Accede a tu panel para gestionar listados' : 'Access your dashboard to manage listings'}
                </p>
            </div>
            <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
                <div className='rounded-md shadow-sm -space-y-px'>
                    <div>
                        <label htmlFor='email-address' className='sr-only'>
                            {dict.auth.email}
                        </label>
                        <input
                            id='email-address'
                            name='email'
                            type='email'
                            autoComplete='email'
                            required
                            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
                            placeholder={dict.auth.email}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='password' className='sr-only'>
                            {dict.auth.password}
                        </label>
                        <input
                            id='password'
                            name='password'
                            type='password'
                            autoComplete='current-password'
                            required
                            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
                            placeholder={dict.auth.password}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                {error && (
                    <div className='rounded-md bg-red-50 p-4'>
                        <div className='text-sm text-red-800'>{error}</div>
                    </div>
                )}

                <div>
                    <button
                        type='submit'
                        disabled={isLoading}
                        className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed'
                    >
                        <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                            <ArrowRightIcon
                                className='h-5 w-5 text-blue-500 group-hover:text-blue-400'
                                aria-hidden='true'
                            />
                        </span>
                        {isLoading ? (lang === 'es' ? 'Cargando...' : 'Loading...') : dict.auth.signIn}
                    </button>
                </div>

                <div className='text-center'>
                    <p className='text-sm text-gray-600'>
                        {lang === 'es' ? 'Demo: usa cualquier email y contraseña' : 'Demo: use any email and password'}
                    </p>
                </div>
            </form>
        </div>
    )
}

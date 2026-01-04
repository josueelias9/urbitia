'use client'

import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { ArrowRightIcon } from '@heroicons/react/20/solid'

interface LoginClientProps {
    dict: any
    lang: string
}

export function LoginClient({ dict, lang }: LoginClientProps) {
    const searchParams = useSearchParams()
    const router = useRouter()
    const role = searchParams.get('role') as 'buyer' | 'owner' | null
    const [error, setError] = useState<string | null>(null)
    const [isPending, setIsPending] = useState(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setError(null)
        setIsPending(true)

        const formData = new FormData(e.currentTarget)
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        try {
            // Use NextAuth signIn
            const result = await signIn('credentials', {
                email,
                password,
                redirect: false
            })

            if (result?.error) {
                setError('Invalid credentials.')
                setIsPending(false)
                return
            }

            // Get user to determine redirect based on role
            const response = await fetch('/api/auth/session')
            const session = await response.json()

            if (session?.user) {
                const userRole = session.user.role
                const redirectPath =
                    userRole === 'buyer' ? `/${lang}/buyer/properties` : `/${lang}/owner/dashboard`
                router.push(redirectPath)
            } else {
                setError('Failed to get session.')
                setIsPending(false)
            }
        } catch (err) {
            setError('An error occurred during sign in.')
            setIsPending(false)
        }
    }

    return (
        <div className='max-w-md w-full space-y-8'>
            <div>
                <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
                    {role === 'buyer'
                        ? dict.auth.signInAsBuyer ||
                          (lang === 'es' ? 'Iniciar sesión como Comprador' : 'Sign in as a Buyer')
                        : dict.auth.signInAsOwner ||
                          (lang === 'es'
                              ? 'Iniciar sesión como Propietario'
                              : 'Sign in as a Property Owner')}
                </h2>
                <p className='mt-2 text-center text-sm text-gray-600'>
                    {role === 'buyer'
                        ? dict.auth.buyerIntro ||
                          (lang === 'es'
                              ? 'Accede a tu cuenta para explorar propiedades'
                              : 'Access your account to browse properties')
                        : dict.auth.ownerIntro ||
                          (lang === 'es'
                              ? 'Accede a tu panel para gestionar listados'
                              : 'Access your dashboard to manage listings')}
                </p>
            </div>
            <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
                <input type='hidden' name='lang' value={lang} />
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
                        disabled={isPending}
                        className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed'
                    >
                        <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                            <ArrowRightIcon
                                className='h-5 w-5 text-blue-500 group-hover:text-blue-400'
                                aria-hidden='true'
                            />
                        </span>
                        {isPending
                            ? dict.common.loading || (lang === 'es' ? 'Cargando...' : 'Loading...')
                            : dict.auth.signIn}
                    </button>
                </div>
            </form>
        </div>
    )
}

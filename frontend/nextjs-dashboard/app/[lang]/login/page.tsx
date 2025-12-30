import { Suspense } from 'react'
import { getDictionary } from '../dictionaries'
import { notFound } from 'next/navigation'
import { locales } from '@/proxy'
import { LoginClient } from './login-client'

export default async function LoginPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params

    // Validate locale
    if (!locales.includes(lang as any)) {
        notFound()
    }

    const dict = await getDictionary(lang as any)

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
            <Suspense fallback={<div>{dict.common.loading}</div>}>
                <LoginClient dict={dict} lang={lang} />
            </Suspense>
        </div>
    )
}

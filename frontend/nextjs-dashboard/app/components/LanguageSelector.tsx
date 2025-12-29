'use client'

import { usePathname, useRouter } from 'next/navigation'
import { locales } from '@/proxy'

export function LanguageSelector() {
    const pathname = usePathname()
    const router = useRouter()

    const currentLocale = pathname.split('/')[1]

    const switchLocale = (newLocale: string) => {
        // Remove current locale from pathname and add new one
        const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '')
        const newPath = `/${newLocale}${pathWithoutLocale || ''}`
        router.push(newPath)
    }

    return (
        <div className='flex items-center space-x-2'>
            {locales.map(locale => (
                <button
                    key={locale}
                    onClick={() => switchLocale(locale)}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                        currentLocale === locale
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                >
                    {locale.toUpperCase()}
                </button>
            ))}
        </div>
    )
}

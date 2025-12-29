'use client'

import { usePathname, useRouter } from 'next/navigation'
import { locales, type Locale } from '@/proxy'

export default function LanguageSwitcher() {
    const pathname = usePathname()
    const router = useRouter()

    const currentLocale = pathname.split('/')[1] as Locale
    
    const switchLanguage = (newLocale: Locale) => {
        if (!pathname) return
        
        const segments = pathname.split('/')
        segments[1] = newLocale
        const newPath = segments.join('/')
        
        router.push(newPath)
    }

    return (
        <div className='flex items-center gap-2 p-2 bg-white rounded-lg shadow-sm'>
            {locales.map((locale) => (
                <button
                    key={locale}
                    onClick={() => switchLanguage(locale)}
                    className={`px-3 py-1 rounded transition-colors ${
                        currentLocale === locale
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                    {locale.toUpperCase()}
                </button>
            ))}
        </div>
    )
}

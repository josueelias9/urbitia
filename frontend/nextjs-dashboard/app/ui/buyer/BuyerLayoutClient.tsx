'use client'

import { usePathname } from 'next/navigation'
import ResponsiveNavBar from '@/app/ui/ResponsiveNavBar'

interface BuyerLayoutClientProps {
    children: React.ReactNode
    dict: any
    lang: string
    user: any
}

export default function BuyerLayoutClient({ children, dict, lang, user }: BuyerLayoutClientProps) {
    const pathname = usePathname()

    // Determine active page based on pathname
    const getActivePage = (): 'properties' | 'chat' | undefined => {
        if (pathname?.includes('/properties')) return 'properties'
        if (pathname?.includes('/chat')) return 'chat'
        return undefined
    }

    const navItems = [
        {
            href: `/${lang}/buyer/properties`,
            label: dict.navigation.properties,
            key: 'properties'
        },
        {
            href: `/${lang}/buyer/chat`,
            label: dict.navigation.chat,
            key: 'chat'
        }
    ]

    return (
        <div className='min-h-screen bg-gray-50'>
            <ResponsiveNavBar
                dict={dict}
                lang={lang}
                userName={user.name}
                navItems={navItems}
                activePage={getActivePage()}
            />
            {children}
        </div>
    )
}

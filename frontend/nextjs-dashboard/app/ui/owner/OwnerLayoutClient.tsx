'use client'

import { usePathname } from 'next/navigation'
import ResponsiveNavBar from '@/app/ui/ResponsiveNavBar'

interface OwnerLayoutClientProps {
    children: React.ReactNode
    dict: any
    lang: string
    user: any
}

export default function OwnerLayoutClient({ children, dict, lang, user }: OwnerLayoutClientProps) {
    const pathname = usePathname()

    // Determine active page based on pathname
    const getActivePage = (): 'dashboard' | 'properties' | 'inbox' | undefined => {
        if (pathname?.includes('/dashboard')) return 'dashboard'
        if (pathname?.includes('/properties')) return 'properties'
        if (pathname?.includes('/inbox')) return 'inbox'
        return undefined
    }

    const navItems = [
        {
            href: `/${lang}/owner/dashboard`,
            label: dict.navigation.dashboard,
            key: 'dashboard'
        },
        {
            href: `/${lang}/owner/properties`,
            label: dict.owner.myProperties,
            key: 'properties'
        },
        {
            href: `/${lang}/owner/inbox`,
            label: dict.navigation.inbox,
            key: 'inbox'
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

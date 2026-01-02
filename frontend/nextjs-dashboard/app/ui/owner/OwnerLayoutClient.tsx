'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import ResponsiveNavBar from '@/app/ui/ResponsiveNavBar'

interface OwnerLayoutClientProps {
    children: React.ReactNode
    dict: any
    lang: string
}

export default function OwnerLayoutClient({ children, dict, lang }: OwnerLayoutClientProps) {
    const [user, setUser] = useState<any>(null)
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        const savedUser = localStorage.getItem('marketplace-user')
        if (!savedUser) {
            router.push(`/${lang}/login?role=owner`)
            return
        }

        const parsedUser = JSON.parse(savedUser)
        if (parsedUser.role !== 'owner') {
            router.push(`/${lang}/login?role=owner`)
            return
        }

        setUser(parsedUser)
    }, [router, lang])

    const handleLogout = () => {
        localStorage.removeItem('marketplace-user')
        router.push(`/${lang}`)
    }

    // Determine active page based on pathname
    const getActivePage = (): 'dashboard' | 'properties' | 'inbox' | undefined => {
        if (pathname?.includes('/dashboard')) return 'dashboard'
        if (pathname?.includes('/properties')) return 'properties'
        if (pathname?.includes('/inbox')) return 'inbox'
        return undefined
    }

    if (!user) {
        return null
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
                onLogout={handleLogout}
                navItems={navItems}
                activePage={getActivePage()}
            />
            {children}
        </div>
    )
}

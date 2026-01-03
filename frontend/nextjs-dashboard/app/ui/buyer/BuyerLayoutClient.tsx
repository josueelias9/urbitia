'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import ResponsiveNavBar from '@/app/ui/ResponsiveNavBar'
import { logout } from '@/app/lib/actions'

interface BuyerLayoutClientProps {
    children: React.ReactNode
    dict: any
    lang: string
}

export default function BuyerLayoutClient({ children, dict, lang }: BuyerLayoutClientProps) {
    const [user, setUser] = useState<any>(null)
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        const savedUser = localStorage.getItem('marketplace-user')
        if (!savedUser) {
            router.push(`/${lang}/login?role=buyer`)
            return
        }

        const parsedUser = JSON.parse(savedUser)
        if (parsedUser.role !== 'buyer') {
            router.push(`/${lang}/login?role=buyer`)
            return
        }

        setUser(parsedUser)
    }, [router, lang])

    const handleLogout = async () => {
        await logout()
    }

    // Determine active page based on pathname
    const getActivePage = (): 'properties' | 'chat' | undefined => {
        if (pathname?.includes('/properties')) return 'properties'
        if (pathname?.includes('/chat')) return 'chat'
        return undefined
    }

    if (!user) {
        return null
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
                onLogout={handleLogout}
                navItems={navItems}
                activePage={getActivePage()}
            />
            {children}
        </div>
    )
}

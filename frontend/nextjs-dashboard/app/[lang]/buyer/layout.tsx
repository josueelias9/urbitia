import { getDictionary } from '@/app/[lang]/dictionaries'
import BuyerLayoutClient from '@/app/ui/buyer/BuyerLayoutClient'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import type { Session } from 'next-auth'

interface BuyerLayoutProps {
    children: React.ReactNode
    params: Promise<{ lang: string }>
}

export default async function BuyerLayout({ children, params }: BuyerLayoutProps) {
    const { lang } = await params
    const dict = await getDictionary(lang as 'en' | 'es')
    const session = (await auth()) as Session | null

    // Redirect to login if not authenticated
    if (!session || !session.user) {
        redirect(`/${lang}/login?role=buyer`)
    }

    // Redirect to correct role page if user is not a buyer
    const userRole = (session.user as any).role
    if (userRole !== 'buyer') {
        redirect(`/${lang}/login?role=buyer`)
    }

    return (
        <BuyerLayoutClient dict={dict} lang={lang} user={session.user}>
            {children}
        </BuyerLayoutClient>
    )
}

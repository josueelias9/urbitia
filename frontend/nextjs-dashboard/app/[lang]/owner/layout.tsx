import { getDictionary } from '@/app/[lang]/dictionaries'
import OwnerLayoutClient from '@/app/ui/owner/OwnerLayoutClient'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import type { Session } from 'next-auth'

interface OwnerLayoutProps {
    children: React.ReactNode
    params: Promise<{ lang: string }>
}

export default async function OwnerLayout({ children, params }: OwnerLayoutProps) {
    const { lang } = await params
    const dict = await getDictionary(lang as 'en' | 'es')
    const session = (await auth()) as Session | null

    // Redirect to login if not authenticated
    if (!session || !session.user) {
        redirect(`/${lang}/login?role=owner`)
    }

    // Redirect to correct role page if user is not an owner
    const userRole = (session.user as any).role
    if (userRole !== 'owner') {
        redirect(`/${lang}/login?role=owner`)
    }

    return (
        <OwnerLayoutClient dict={dict} lang={lang} user={session.user}>
            {children}
        </OwnerLayoutClient>
    )
}

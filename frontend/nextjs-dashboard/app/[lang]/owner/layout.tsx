import { getDictionary } from '@/app/[lang]/dictionaries'
import OwnerLayoutClient from '@/app/ui/owner/OwnerLayoutClient'

interface OwnerLayoutProps {
    children: React.ReactNode
    params: Promise<{ lang: string }>
}

export default async function OwnerLayout({ children, params }: OwnerLayoutProps) {
    const { lang } = await params
    const dict = await getDictionary(lang as 'en' | 'es')

    return (
        <OwnerLayoutClient dict={dict} lang={lang}>
            {children}
        </OwnerLayoutClient>
    )
}

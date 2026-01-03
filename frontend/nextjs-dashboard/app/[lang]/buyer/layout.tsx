import { getDictionary } from '@/app/[lang]/dictionaries'
import BuyerLayoutClient from '@/app/ui/buyer/BuyerLayoutClient'

interface BuyerLayoutProps {
    children: React.ReactNode
    params: Promise<{ lang: string }>
}

export default async function BuyerLayout({ children, params }: BuyerLayoutProps) {
    const { lang } = await params
    const dict = await getDictionary(lang as 'en' | 'es')

    return (
        <BuyerLayoutClient dict={dict} lang={lang}>
            {children}
        </BuyerLayoutClient>
    )
}

import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'
import type { Metadata } from 'next'
import { locales } from '@/proxy'
import { Providers } from '@/app/providers'

export const metadata: Metadata = {
    title: {
        template: '%s | Urbitia',
        default: 'Urbitia (transforma tu propiedad en oportunidad)'
    },
    description: 'Urbitia - Transforma tu propiedad en oportunidad.',
    metadataBase: new URL('https://next-learn-dashboard.vercel.sh')
}

export async function generateStaticParams() {
    return locales.map(locale => ({ lang: locale }))
}

export default async function RootLayout({
    children,
    params
}: {
    children: React.ReactNode
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params

    return (
        <html lang={lang}>
            <body className={`${inter.className} antialiased`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}

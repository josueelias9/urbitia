import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'
import type { Metadata } from 'next'
import { locales } from '@/proxy'

export const metadata: Metadata = {
    title: {
        template: '%s | Acme Dashboard',
        default: 'Acme Dashboard'
    },
    description: 'The official Next.js Learn Dashboard built with App Router.',
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
            <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    )
}

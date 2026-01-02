import { Suspense } from 'react'
import { getDictionary } from '@/app/[lang]/dictionaries'
import { notFound } from 'next/navigation'
import { locales, type Locale } from '@/proxy'
import ChatListClient from '@/app/ui/ChatListClient'

export default async function OwnerInboxPage({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params

    // Validate locale
    if (!locales.includes(lang as any)) {
        notFound()
    }

    const dict = await getDictionary(lang as any)

    return (
        <Suspense fallback={<div>{dict.common.loading}</div>}>
            <ChatListClient dict={dict} lang={lang} role={'owner'} />
        </Suspense>
    )
}

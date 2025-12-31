import { Suspense } from 'react'
import { getDictionary } from '@/app/[lang]/dictionaries'
import { notFound } from 'next/navigation'
import { locales, type Locale } from '@/proxy'
import OwnerInboxClient from '@/app/ui/owner/inbox-client'

export default async function OwnerInboxPage({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params

    // Validate locale
    if (!locales.includes(lang as any)) {
        notFound()
    }

    const dict = await getDictionary(lang as any)

    return (
        <Suspense fallback={<div>{dict.common.loading}</div>}>
            <OwnerInboxClient dict={dict} lang={lang} />
        </Suspense>
    )
}

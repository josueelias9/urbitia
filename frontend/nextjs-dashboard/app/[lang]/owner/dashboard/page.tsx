import { Suspense } from 'react'
import { getDictionary } from '@/app/[lang]/dictionaries'
import { notFound } from 'next/navigation'
import { locales, type Locale } from '@/proxy'
import OwnerDashboardClient from '@/app/ui/owner/dashboard-client'

export default async function OwnerDashboardPage({
    params
}: {
    params: Promise<{ lang: Locale }>
}) {
    const { lang } = await params

    // Validate locale
    if (!locales.includes(lang as any)) {
        notFound()
    }

    const dict = await getDictionary(lang as any)

    return (
        <Suspense fallback={<div>{dict.common.loading}</div>}>
            <OwnerDashboardClient dict={dict} lang={lang} />
        </Suspense>
    )
}

import { Suspense } from 'react'
import { getDictionary } from '@/app/[lang]/dictionaries'
import { notFound } from 'next/navigation'
import { locales, type Locale } from '@/proxy'
import BuyerPropertyDetailClient from '@/app/ui/buyer/property-detail-client'

export default async function BuyerPropertyDetailPage({
    params
}: {
    params: Promise<{ lang: Locale; id: string }>
}) {
    const { lang, id } = await params

    // Validate locale
    if (!locales.includes(lang as any)) {
        notFound()
    }

    const dict = await getDictionary(lang as any)

    return (
        <Suspense fallback={<div>{dict.common.loading}</div>}>
            <BuyerPropertyDetailClient dict={dict} lang={lang} propertyId={id} />
        </Suspense>
    )
}

import { Suspense } from 'react'
import { getDictionary } from '@/app/[lang]/dictionaries'
import { notFound } from 'next/navigation'
import { locales } from '@/proxy'
import OwnerPropertiesClient from '@/app/ui/owner/properties/properties-client'

export default async function OwnerPropertiesPage({
    params
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params

    // Validate locale
    if (!locales.includes(lang as any)) {
        notFound()
    }

    const dict = await getDictionary(lang as any)

    return (
        <Suspense fallback={<div>{dict.common.loading}</div>}>
            <OwnerPropertiesClient dict={dict} lang={lang} />
        </Suspense>
    )
}

import { Suspense } from 'react'
import OwnerCreatePropertyClient from '@/app/ui/owner/create-property-client'

export default function CreatePropertyPage({ params }: { params: Promise<{ lang: string }> }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CreatePropertyWrapper params={params} />
        </Suspense>
    )
}

async function CreatePropertyWrapper({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params

    return <OwnerCreatePropertyClient lang={lang} />
}

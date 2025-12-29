import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDictionary } from '@/app/i18n/dictionaries'
import { i18n } from '@/app/i18n/config'
import LanguageSwitcher from './components/LanguageSwitcher'

export default async function HomePage({
    params
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params

    // Validate locale
    if (!i18n.locales.includes(lang as any)) {
        notFound()
    }

    const dict = await getDictionary(lang as any)

    return (
        <div className='min-h-screen bg-gray-50'>
            {/* Language Switcher */}
            <div className='absolute top-4 right-4 z-10'>
                <LanguageSwitcher />
            </div>

            {/* Hero Section */}
            <div className='bg-gradient-to-r from-blue-600 to-purple-700 text-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
                    <div className='text-center'>
                        <h1 className='text-4xl md:text-6xl font-bold mb-6'>
                            {dict.hero.title}
                        </h1>
                        <p className='text-xl md:text-2xl mb-8 max-w-3xl mx-auto'>
                            {dict.hero.subtitle}
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                            <Link
                                href={`/${lang}/login?role=buyer`}
                                className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
                            >
                                {dict.hero.buyerButton}
                            </Link>
                            <Link
                                href={`/${lang}/login?role=owner`}
                                className='bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors'
                            >
                                {dict.hero.ownerButton}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
                <div className='grid md:grid-cols-3 gap-8'>
                    <div className='bg-white p-6 rounded-lg shadow-md'>
                        <div className='text-blue-600 text-3xl mb-4'>🏠</div>
                        <h3 className='text-xl font-semibold mb-2'>{dict.features.wideSelection.title}</h3>
                        <p className='text-gray-600'>
                            {dict.features.wideSelection.description}
                        </p>
                    </div>
                    <div className='bg-white p-6 rounded-lg shadow-md'>
                        <div className='text-blue-600 text-3xl mb-4'>💬</div>
                        <h3 className='text-xl font-semibold mb-2'>{dict.features.directCommunication.title}</h3>
                        <p className='text-gray-600'>
                            {dict.features.directCommunication.description}
                        </p>
                    </div>
                    <div className='bg-white p-6 rounded-lg shadow-md'>
                        <div className='text-blue-600 text-3xl mb-4'>⭐</div>
                        <h3 className='text-xl font-semibold mb-2'>{dict.features.trustedPlatform.title}</h3>
                        <p className='text-gray-600'>
                            {dict.features.trustedPlatform.description}
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className='bg-gray-100 py-16'>
                <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                    <h2 className='text-3xl font-bold mb-4'>{dict.cta.title}</h2>
                    <p className='text-xl text-gray-600 mb-8'>
                        {dict.cta.subtitle}
                    </p>
                    <Link
                        href={`/${lang}/marketplace`}
                        className='inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
                    >
                        {dict.hero.cta}
                    </Link>
                </div>
            </div>
        </div>
    )
}

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDictionary } from '@/app/[lang]/dictionaries'
import { locales } from '@/proxy'
import LanguageSwitcher from '@/app/ui/LanguageSwitcher'
import Image from 'next/image'
import PropertyCarousel from '@/app/ui/PropertyCarousel'

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params

    // Validate locale
    if (!locales.includes(lang as any)) {
        notFound()
    }

    const dict = await getDictionary(lang as any)

    // Carousel items
    const carouselItems = [
        {
            id: 1,
            title: dict.carousel?.slide1Title || 'Premium Properties',
            description:
                dict.carousel?.slide1Description ||
                'Discover exclusive properties in the best locations',
            image: '/property1.jpg'
        },
        {
            id: 2,
            title: dict.carousel?.slide2Title || 'Expert Legal Advisory',
            description:
                dict.carousel?.slide2Description ||
                'Get professional guidance for all your real estate transactions',
            image: '/property2.jpg'
        },
        {
            id: 3,
            title: dict.carousel?.slide3Title || 'Secure Transactions',
            description:
                dict.carousel?.slide3Description ||
                'Safe and transparent process from start to finish',
            image: '/property3.jpg'
        }
    ]

    return (
        <div className='min-h-screen bg-gray-50'>
            {/* Language Switcher */}
            <div className='absolute top-4 right-4 z-10'>
                <LanguageSwitcher />
            </div>

            {/* Hero Section with Logo */}
            <div className='bg-gradient-to-r from-blue-600 to-purple-700 text-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
                    <div className='text-center'>
                        {/* Urbitia Logo */}
                        <div className='flex justify-center mb-8'>
                            <Image
                                src='/urbitia.jpeg'
                                alt='Urbitia'
                                width={200}
                                height={200}
                                className='rounded-full shadow-2xl'
                            />
                        </div>
                        <h1 className='text-4xl md:text-6xl font-bold mb-6'>{dict.hero.title}</h1>
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
                            <Link
                                href={`/${lang}/legal-advisory`}
                                className='bg-yellow-500 border-2 border-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 hover:border-yellow-600 transition-colors'
                            >
                                {dict.navigation?.legalAdvisory || 'Legal Advisory'}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Carousel Section */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
                <h2 className='text-3xl font-bold text-center mb-12 text-gray-900'>
                    {dict.carousel?.sectionTitle || 'Featured Highlights'}
                </h2>
                <PropertyCarousel items={carouselItems} />
            </div>

            {/* Features Section */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
                <div className='grid md:grid-cols-3 gap-8'>
                    <div className='bg-white p-6 rounded-lg shadow-md'>
                        <div className='text-blue-600 text-3xl mb-4'>🏠</div>
                        <h3 className='text-xl font-semibold mb-2'>
                            {dict.features.wideSelection.title}
                        </h3>
                        <p className='text-gray-600'>{dict.features.wideSelection.description}</p>
                    </div>
                    <div className='bg-white p-6 rounded-lg shadow-md'>
                        <div className='text-blue-600 text-3xl mb-4'>💬</div>
                        <h3 className='text-xl font-semibold mb-2'>
                            {dict.features.directCommunication.title}
                        </h3>
                        <p className='text-gray-600'>
                            {dict.features.directCommunication.description}
                        </p>
                    </div>
                    <div className='bg-white p-6 rounded-lg shadow-md'>
                        <div className='text-blue-600 text-3xl mb-4'>⭐</div>
                        <h3 className='text-xl font-semibold mb-2'>
                            {dict.features.trustedPlatform.title}
                        </h3>
                        <p className='text-gray-600'>{dict.features.trustedPlatform.description}</p>
                    </div>
                </div>
            </div>

            {/* Why Choose Urbitia Section */}
            <div className='bg-white py-16'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <h2 className='text-3xl font-bold text-center mb-12 text-gray-900'>
                        {dict.whyUrbitia?.title || 'Why Choose Urbitia?'}
                    </h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        <div className='text-center'>
                            <div className='text-5xl mb-4'>🔒</div>
                            <h3 className='font-semibold mb-2'>
                                {dict.whyUrbitia?.security || 'Secure Platform'}
                            </h3>
                            <p className='text-gray-600 text-sm'>
                                {dict.whyUrbitia?.securityDesc ||
                                    'Your data and transactions are protected'}
                            </p>
                        </div>
                        <div className='text-center'>
                            <div className='text-5xl mb-4'>✅</div>
                            <h3 className='font-semibold mb-2'>
                                {dict.whyUrbitia?.verified || 'Verified Properties'}
                            </h3>
                            <p className='text-gray-600 text-sm'>
                                {dict.whyUrbitia?.verifiedDesc ||
                                    'All listings are verified by our team'}
                            </p>
                        </div>
                        <div className='text-center'>
                            <div className='text-5xl mb-4'>⚖️</div>
                            <h3 className='font-semibold mb-2'>
                                {dict.whyUrbitia?.legal || 'Legal Support'}
                            </h3>
                            <p className='text-gray-600 text-sm'>
                                {dict.whyUrbitia?.legalDesc || 'Expert legal advisory available'}
                            </p>
                        </div>
                        <div className='text-center'>
                            <div className='text-5xl mb-4'>⚡</div>
                            <h3 className='font-semibold mb-2'>
                                {dict.whyUrbitia?.fast || 'Fast Process'}
                            </h3>
                            <p className='text-gray-600 text-sm'>
                                {dict.whyUrbitia?.fastDesc || 'Quick and efficient transactions'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className='bg-gray-100 py-16'>
                <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                    <h2 className='text-3xl font-bold mb-4'>{dict.cta.title}</h2>
                    <p className='text-xl text-gray-600 mb-8'>{dict.cta.subtitle}</p>
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

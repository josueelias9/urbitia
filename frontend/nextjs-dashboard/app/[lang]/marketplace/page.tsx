import Link from 'next/link'
import { PropertyPreviewCard } from '@/app/ui/PropertyPreviewCard'
import { NavigationBar } from '@/app//ui/NavigationBar'
import { HeroSection } from '@/app/ui/HeroSection'
import { getFeaturedProperties } from '@/app/lib/data'
import { getDictionary } from '../dictionaries'
import { notFound } from 'next/navigation'
import { locales, type Locale } from '@/proxy'

export default async function MarketplacePage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params

    // Validate locale
    if (!locales.includes(lang as any)) {
        notFound()
    }

    const dict = await getDictionary(lang as any)
    const properties = await getFeaturedProperties()

    return (
        <div className='min-h-screen'>
            <NavigationBar />
            <HeroSection />

            {/* Featured Properties Section */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                        {dict.marketplace.featured}
                    </h2>
                    <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                        {dict.marketplace.featuredSubtitle}
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12'>
                    {properties.map(property => (
                        <PropertyPreviewCard key={property.id} property={property} />
                    ))}
                </div>

                <div className='text-center'>
                    <Link
                        href={`/${lang}/marketplace/properties`}
                        className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
                    >
                        {dict.marketplace.viewAllProperties}
                    </Link>
                </div>
            </div>

            {/* Stats Section */}
            <div className='bg-gray-100 py-16'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
                        <div>
                            <div className='text-3xl font-bold text-blue-600 mb-2'>500+</div>
                            <div className='text-gray-600'>
                                {dict.marketplace.stats.propertiesListed}
                            </div>
                        </div>
                        <div>
                            <div className='text-3xl font-bold text-blue-600 mb-2'>1,200+</div>
                            <div className='text-gray-600'>
                                {dict.marketplace.stats.happyCustomers}
                            </div>
                        </div>
                        <div>
                            <div className='text-3xl font-bold text-blue-600 mb-2'>95%</div>
                            <div className='text-gray-600'>
                                {dict.marketplace.stats.satisfactionRate}
                            </div>
                        </div>
                        <div>
                            <div className='text-3xl font-bold text-blue-600 mb-2'>50+</div>
                            <div className='text-gray-600'>
                                {dict.marketplace.stats.citiesCovered}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

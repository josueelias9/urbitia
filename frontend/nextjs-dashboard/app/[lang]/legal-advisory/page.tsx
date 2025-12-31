import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDictionary } from '../dictionaries'
import { locales } from '@/proxy'
import LanguageSwitcher from '../components/LanguageSwitcher'
import Image from 'next/image'
import {
    ScaleIcon,
    DocumentTextIcon,
    UserGroupIcon,
    CheckCircleIcon,
    ShieldCheckIcon,
    ClipboardDocumentCheckIcon
} from '@heroicons/react/24/outline'

export default async function LegalAdvisoryPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params

    // Validate locale
    if (!locales.includes(lang as any)) {
        notFound()
    }

    const dict = await getDictionary(lang as any)

    return (
        <div className='min-h-screen bg-gray-50'>
            {/* Language Switcher */}
            <div className='absolute top-4 right-4 z-10'>
                <LanguageSwitcher />
            </div>

            {/* Header */}
            <div className='bg-gradient-to-r from-blue-700 to-indigo-800 text-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
                    <div className='flex items-center justify-between mb-8'>
                        <Link
                            href={`/${lang}`}
                            className='text-white hover:text-gray-200 transition-colors'
                        >
                            ← {dict.common?.back || 'Back'}
                        </Link>
                    </div>
                    <div className='text-center'>
                        <ScaleIcon className='h-20 w-20 mx-auto mb-6' />
                        <h1 className='text-4xl md:text-5xl font-bold mb-4'>
                            {dict.legalAdvisory?.title || 'Legal Advisory Services'}
                        </h1>
                        <p className='text-xl max-w-3xl mx-auto'>
                            {dict.legalAdvisory?.subtitle ||
                                'Expert legal guidance for all your real estate transactions'}
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
                {/* Introduction */}
                <div className='bg-white rounded-lg shadow-lg p-8 mb-12'>
                    <h2 className='text-3xl font-bold mb-6 text-gray-900'>
                        {dict.legalAdvisory?.introTitle || 'Professional Legal Support'}
                    </h2>
                    <p className='text-lg text-gray-700 mb-4'>
                        {dict.legalAdvisory?.introText1 ||
                            'At Urbitia, we understand that real estate transactions involve significant legal complexities. Our team of experienced legal professionals is here to guide you through every step of the process, ensuring your interests are protected and all legal requirements are met.'}
                    </p>
                    <p className='text-lg text-gray-700'>
                        {dict.legalAdvisory?.introText2 ||
                            'Whether you are buying, selling, or leasing property, our comprehensive legal advisory services provide peace of mind and clarity throughout your real estate journey.'}
                    </p>
                </div>

                {/* Services Offered */}
                <div className='mb-16'>
                    <h2 className='text-3xl font-bold mb-8 text-gray-900 text-center'>
                        {dict.legalAdvisory?.servicesTitle || 'Our Legal Services'}
                    </h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow'>
                            <DocumentTextIcon className='h-12 w-12 text-blue-600 mb-4' />
                            <h3 className='text-xl font-semibold mb-3'>
                                {dict.legalAdvisory?.service1Title || 'Contract Review'}
                            </h3>
                            <p className='text-gray-600'>
                                {dict.legalAdvisory?.service1Desc ||
                                    'Thorough review of purchase agreements, lease contracts, and all legal documents to protect your interests.'}
                            </p>
                        </div>

                        <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow'>
                            <ShieldCheckIcon className='h-12 w-12 text-blue-600 mb-4' />
                            <h3 className='text-xl font-semibold mb-3'>
                                {dict.legalAdvisory?.service2Title || 'Due Diligence'}
                            </h3>
                            <p className='text-gray-600'>
                                {dict.legalAdvisory?.service2Desc ||
                                    'Complete property title verification, lien searches, and legal status confirmation.'}
                            </p>
                        </div>

                        <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow'>
                            <ClipboardDocumentCheckIcon className='h-12 w-12 text-blue-600 mb-4' />
                            <h3 className='text-xl font-semibold mb-3'>
                                {dict.legalAdvisory?.service3Title || 'Transaction Support'}
                            </h3>
                            <p className='text-gray-600'>
                                {dict.legalAdvisory?.service3Desc ||
                                    'Full legal support during closing, including document preparation and negotiation assistance.'}
                            </p>
                        </div>

                        <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow'>
                            <UserGroupIcon className='h-12 w-12 text-blue-600 mb-4' />
                            <h3 className='text-xl font-semibold mb-3'>
                                {dict.legalAdvisory?.service4Title || 'Dispute Resolution'}
                            </h3>
                            <p className='text-gray-600'>
                                {dict.legalAdvisory?.service4Desc ||
                                    'Expert mediation and legal representation for property disputes and conflicts.'}
                            </p>
                        </div>

                        <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow'>
                            <ScaleIcon className='h-12 w-12 text-blue-600 mb-4' />
                            <h3 className='text-xl font-semibold mb-3'>
                                {dict.legalAdvisory?.service5Title || 'Regulatory Compliance'}
                            </h3>
                            <p className='text-gray-600'>
                                {dict.legalAdvisory?.service5Desc ||
                                    'Guidance on zoning laws, building codes, and local regulations.'}
                            </p>
                        </div>

                        <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow'>
                            <CheckCircleIcon className='h-12 w-12 text-blue-600 mb-4' />
                            <h3 className='text-xl font-semibold mb-3'>
                                {dict.legalAdvisory?.service6Title || 'Property Registration'}
                            </h3>
                            <p className='text-gray-600'>
                                {dict.legalAdvisory?.service6Desc ||
                                    'Assistance with property registration, title transfers, and legal filings.'}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Process */}
                <div className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-16'>
                    <h2 className='text-3xl font-bold mb-8 text-gray-900 text-center'>
                        {dict.legalAdvisory?.processTitle || 'Our Advisory Process'}
                    </h2>
                    <div className='grid md:grid-cols-4 gap-6'>
                        <div className='text-center'>
                            <div className='bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4'>
                                1
                            </div>
                            <h3 className='font-semibold mb-2'>
                                {dict.legalAdvisory?.step1 || 'Consultation'}
                            </h3>
                            <p className='text-sm text-gray-600'>
                                {dict.legalAdvisory?.step1Desc ||
                                    'Initial meeting to understand your needs'}
                            </p>
                        </div>
                        <div className='text-center'>
                            <div className='bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4'>
                                2
                            </div>
                            <h3 className='font-semibold mb-2'>
                                {dict.legalAdvisory?.step2 || 'Analysis'}
                            </h3>
                            <p className='text-sm text-gray-600'>
                                {dict.legalAdvisory?.step2Desc ||
                                    'Comprehensive review of documents and requirements'}
                            </p>
                        </div>
                        <div className='text-center'>
                            <div className='bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4'>
                                3
                            </div>
                            <h3 className='font-semibold mb-2'>
                                {dict.legalAdvisory?.step3 || 'Guidance'}
                            </h3>
                            <p className='text-sm text-gray-600'>
                                {dict.legalAdvisory?.step3Desc ||
                                    'Clear recommendations and legal strategy'}
                            </p>
                        </div>
                        <div className='text-center'>
                            <div className='bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4'>
                                4
                            </div>
                            <h3 className='font-semibold mb-2'>
                                {dict.legalAdvisory?.step4 || 'Support'}
                            </h3>
                            <p className='text-sm text-gray-600'>
                                {dict.legalAdvisory?.step4Desc ||
                                    'Ongoing support until completion'}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Benefits */}
                <div className='bg-white rounded-lg shadow-lg p-8 mb-16'>
                    <h2 className='text-3xl font-bold mb-8 text-gray-900 text-center'>
                        {dict.legalAdvisory?.benefitsTitle || 'Why Choose Our Legal Services?'}
                    </h2>
                    <div className='grid md:grid-cols-2 gap-6'>
                        <div className='flex items-start'>
                            <CheckCircleIcon className='h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1' />
                            <div>
                                <h3 className='font-semibold mb-1'>
                                    {dict.legalAdvisory?.benefit1 || 'Experienced Professionals'}
                                </h3>
                                <p className='text-gray-600 text-sm'>
                                    {dict.legalAdvisory?.benefit1Desc ||
                                        'Our team has decades of combined experience in real estate law'}
                                </p>
                            </div>
                        </div>
                        <div className='flex items-start'>
                            <CheckCircleIcon className='h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1' />
                            <div>
                                <h3 className='font-semibold mb-1'>
                                    {dict.legalAdvisory?.benefit2 || 'Transparent Pricing'}
                                </h3>
                                <p className='text-gray-600 text-sm'>
                                    {dict.legalAdvisory?.benefit2Desc ||
                                        'Clear, upfront pricing with no hidden fees'}
                                </p>
                            </div>
                        </div>
                        <div className='flex items-start'>
                            <CheckCircleIcon className='h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1' />
                            <div>
                                <h3 className='font-semibold mb-1'>
                                    {dict.legalAdvisory?.benefit3 || 'Quick Response Time'}
                                </h3>
                                <p className='text-gray-600 text-sm'>
                                    {dict.legalAdvisory?.benefit3Desc ||
                                        'Fast turnaround on document reviews and consultations'}
                                </p>
                            </div>
                        </div>
                        <div className='flex items-start'>
                            <CheckCircleIcon className='h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1' />
                            <div>
                                <h3 className='font-semibold mb-1'>
                                    {dict.legalAdvisory?.benefit4 || 'Bilingual Service'}
                                </h3>
                                <p className='text-gray-600 text-sm'>
                                    {dict.legalAdvisory?.benefit4Desc ||
                                        'Services available in English and Spanish'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className='bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-12 text-white text-center'>
                    <h2 className='text-3xl font-bold mb-4'>
                        {dict.legalAdvisory?.ctaTitle || 'Ready to Get Started?'}
                    </h2>
                    <p className='text-xl mb-8 max-w-2xl mx-auto'>
                        {dict.legalAdvisory?.ctaSubtitle ||
                            'Contact us today for a free initial consultation with our legal team'}
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                        <Link
                            href={`/${lang}/login?role=buyer`}
                            className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
                        >
                            {dict.legalAdvisory?.ctaButton1 || 'Schedule Consultation'}
                        </Link>
                        <Link
                            href={`/${lang}/marketplace`}
                            className='bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors'
                        >
                            {dict.legalAdvisory?.ctaButton2 || 'Browse Properties'}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className='bg-gray-800 text-white py-8'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                    <p className='text-gray-400'>
                        {dict.legalAdvisory?.disclaimer ||
                            'Legal advisory services are provided by licensed professionals. Terms and conditions apply.'}
                    </p>
                </div>
            </div>
        </div>
    )
}

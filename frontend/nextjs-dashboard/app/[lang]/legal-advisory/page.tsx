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
                            ← {dict.common?.back}
                        </Link>
                    </div>
                    <div className='text-center'>
                        <ScaleIcon className='h-20 w-20 mx-auto mb-6' />
                        <h1 className='text-4xl md:text-5xl font-bold mb-4'>
                            {dict.legalAdvisory?.title}
                        </h1>
                        <p className='text-xl max-w-3xl mx-auto'>{dict.legalAdvisory?.subtitle}</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
                {/* Introduction */}
                <div className='bg-white rounded-lg shadow-lg p-8 mb-12'>
                    <h2 className='text-3xl font-bold mb-6 text-gray-900'>
                        {dict.legalAdvisory?.introTitle}
                    </h2>
                    <p className='text-lg text-gray-700 mb-4'>{dict.legalAdvisory?.introText1}</p>
                    <p className='text-lg text-gray-700'>{dict.legalAdvisory?.introText2}</p>
                </div>

                {/* Services Offered */}
                <div className='mb-16'>
                    <h2 className='text-3xl font-bold mb-8 text-gray-900 text-center'>
                        {dict.legalAdvisory?.servicesTitle}
                    </h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow'>
                            <DocumentTextIcon className='h-12 w-12 text-blue-600 mb-4' />
                            <h3 className='text-xl font-semibold mb-3'>
                                {dict.legalAdvisory?.service1Title}
                            </h3>
                            <p className='text-gray-600'>{dict.legalAdvisory?.service1Desc}</p>
                        </div>

                        <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow'>
                            <ShieldCheckIcon className='h-12 w-12 text-blue-600 mb-4' />
                            <h3 className='text-xl font-semibold mb-3'>
                                {dict.legalAdvisory?.service2Title}
                            </h3>
                            <p className='text-gray-600'>{dict.legalAdvisory?.service2Desc}</p>
                        </div>

                        <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow'>
                            <ClipboardDocumentCheckIcon className='h-12 w-12 text-blue-600 mb-4' />
                            <h3 className='text-xl font-semibold mb-3'>
                                {dict.legalAdvisory?.service3Title}
                            </h3>
                            <p className='text-gray-600'>{dict.legalAdvisory?.service3Desc}</p>
                        </div>

                        <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow'>
                            <UserGroupIcon className='h-12 w-12 text-blue-600 mb-4' />
                            <h3 className='text-xl font-semibold mb-3'>
                                {dict.legalAdvisory?.service4Title}
                            </h3>
                            <p className='text-gray-600'>{dict.legalAdvisory?.service4Desc}</p>
                        </div>

                        <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow'>
                            <ScaleIcon className='h-12 w-12 text-blue-600 mb-4' />
                            <h3 className='text-xl font-semibold mb-3'>
                                {dict.legalAdvisory?.service5Title}
                            </h3>
                            <p className='text-gray-600'>{dict.legalAdvisory?.service5Desc}</p>
                        </div>

                        <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow'>
                            <CheckCircleIcon className='h-12 w-12 text-blue-600 mb-4' />
                            <h3 className='text-xl font-semibold mb-3'>
                                {dict.legalAdvisory?.service6Title}
                            </h3>
                            <p className='text-gray-600'>{dict.legalAdvisory?.service6Desc}</p>
                        </div>
                    </div>
                </div>

                {/* Process */}
                <div className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-16'>
                    <h2 className='text-3xl font-bold mb-8 text-gray-900 text-center'>
                        {dict.legalAdvisory?.processTitle}
                    </h2>
                    <div className='grid md:grid-cols-4 gap-6'>
                        <div className='text-center'>
                            <div className='bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4'>
                                1
                            </div>
                            <h3 className='font-semibold mb-2'>{dict.legalAdvisory?.step1}</h3>
                            <p className='text-sm text-gray-600'>{dict.legalAdvisory?.step1Desc}</p>
                        </div>
                        <div className='text-center'>
                            <div className='bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4'>
                                2
                            </div>
                            <h3 className='font-semibold mb-2'>{dict.legalAdvisory?.step2}</h3>
                            <p className='text-sm text-gray-600'>{dict.legalAdvisory?.step2Desc}</p>
                        </div>
                        <div className='text-center'>
                            <div className='bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4'>
                                3
                            </div>
                            <h3 className='font-semibold mb-2'>{dict.legalAdvisory?.step3}</h3>
                            <p className='text-sm text-gray-600'>{dict.legalAdvisory?.step3Desc}</p>
                        </div>
                        <div className='text-center'>
                            <div className='bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4'>
                                4
                            </div>
                            <h3 className='font-semibold mb-2'>{dict.legalAdvisory?.step4}</h3>
                            <p className='text-sm text-gray-600'>{dict.legalAdvisory?.step4Desc}</p>
                        </div>
                    </div>
                </div>

                {/* Benefits */}
                <div className='bg-white rounded-lg shadow-lg p-8 mb-16'>
                    <h2 className='text-3xl font-bold mb-8 text-gray-900 text-center'>
                        {dict.legalAdvisory?.benefitsTitle}
                    </h2>
                    <div className='grid md:grid-cols-2 gap-6'>
                        <div className='flex items-start'>
                            <CheckCircleIcon className='h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1' />
                            <div>
                                <h3 className='font-semibold mb-1'>
                                    {dict.legalAdvisory?.benefit1}
                                </h3>
                                <p className='text-gray-600 text-sm'>
                                    {dict.legalAdvisory?.benefit1Desc}
                                </p>
                            </div>
                        </div>
                        <div className='flex items-start'>
                            <CheckCircleIcon className='h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1' />
                            <div>
                                <h3 className='font-semibold mb-1'>
                                    {dict.legalAdvisory?.benefit2}
                                </h3>
                                <p className='text-gray-600 text-sm'>
                                    {dict.legalAdvisory?.benefit2Desc}
                                </p>
                            </div>
                        </div>
                        <div className='flex items-start'>
                            <CheckCircleIcon className='h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1' />
                            <div>
                                <h3 className='font-semibold mb-1'>
                                    {dict.legalAdvisory?.benefit3}
                                </h3>
                                <p className='text-gray-600 text-sm'>
                                    {dict.legalAdvisory?.benefit3Desc}
                                </p>
                            </div>
                        </div>
                        <div className='flex items-start'>
                            <CheckCircleIcon className='h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1' />
                            <div>
                                <h3 className='font-semibold mb-1'>
                                    {dict.legalAdvisory?.benefit4}
                                </h3>
                                <p className='text-gray-600 text-sm'>
                                    {dict.legalAdvisory?.benefit4Desc}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className='bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-12 text-white text-center'>
                    <h2 className='text-3xl font-bold mb-4'>{dict.legalAdvisory?.ctaTitle}</h2>
                    <p className='text-xl mb-8 max-w-2xl mx-auto'>
                        {dict.legalAdvisory?.ctaSubtitle}
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                        <Link
                            href={`/${lang}/login?role=buyer`}
                            className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
                        >
                            {dict.legalAdvisory?.ctaButton1}
                        </Link>
                        <Link
                            href={`/${lang}/marketplace`}
                            className='bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors'
                        >
                            {dict.legalAdvisory?.ctaButton2}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className='bg-gray-800 text-white py-8'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                    <p className='text-gray-400'>{dict.legalAdvisory?.disclaimer}</p>
                </div>
            </div>
        </div>
    )
}

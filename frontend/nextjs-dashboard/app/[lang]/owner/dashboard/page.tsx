'use client'

import { useEffect, useState, use } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { HomeIcon, ChatBubbleLeftRightIcon, PlusIcon } from '@heroicons/react/24/outline'
import type { Locale } from '@/proxy'
import enDict from '@/app/dictionaries/en.json'
import esDict from '@/app/dictionaries/es.json'

export default function OwnerDashboardPage({ params }: { params: Promise<{ lang: Locale }> }) {
    const resolvedParams = use(params)
    const [user, setUser] = useState<any>(null)
    const [stats, setStats] = useState({
        totalProperties: 0,
        messages: 0,
        views: 0
    })
    const [dict, setDict] = useState<any>(null)
    const router = useRouter()
    const lang = resolvedParams.lang

    useEffect(() => {
        // Load dictionary
        const dictionary = lang === 'es' ? esDict : enDict
        setDict(dictionary)

        const savedUser = localStorage.getItem('marketplace-user')
        if (!savedUser) {
            router.push(`/${lang}/login?role=owner`)
            return
        }

        const parsedUser = JSON.parse(savedUser)
        if (parsedUser.role !== 'owner') {
            router.push(`/${lang}/login?role=owner`)
            return
        }

        setUser(parsedUser)

        // Mock stats - in real app would fetch from API
        setStats({
            totalProperties: 3,
            messages: 5,
            views: 127
        })
    }, [router, lang])

    const handleLogout = () => {
        localStorage.removeItem('marketplace-user')
        router.push(`/${lang}`)
    }

    if (!user || !dict) {
        return null
    }

    return (
        <div className='min-h-screen bg-gray-50'>
            {/* Navigation Bar */}
            <nav className='bg-white shadow-sm'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex justify-between h-16'>
                        <div className='flex items-center space-x-8'>
                            <Link href={`/${lang}`} className='text-xl font-bold text-blue-600'>
                                RealEstate
                            </Link>
                            <div className='flex space-x-4'>
                                <Link
                                    href={`/${lang}/owner/dashboard`}
                                    className='text-blue-600 font-medium'
                                >
                                    {dict.navigation.dashboard}
                                </Link>
                                <Link
                                    href={`/${lang}/owner/properties`}
                                    className='text-gray-600 hover:text-gray-900'
                                >
                                    {dict.owner.myProperties}
                                </Link>
                                <Link
                                    href={`/${lang}/owner/inbox`}
                                    className='text-gray-600 hover:text-gray-900'
                                >
                                    {dict.navigation.inbox}
                                </Link>
                            </div>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <span className='text-gray-700'>
                                {dict.common.welcome}, {user.name}
                            </span>
                            <button
                                onClick={handleLogout}
                                className='text-sm text-gray-600 hover:text-gray-900'
                            >
                                {dict.navigation.logout}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                <div className='mb-8'>
                    <h1 className='text-3xl font-bold text-gray-900'>
                        {dict.navigation.dashboard}
                    </h1>
                    <p className='mt-2 text-gray-600'>{dict.owner.manageDescription}</p>
                </div>

                {/* Stats Cards */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
                    <div className='bg-white rounded-lg shadow p-6'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-gray-600 text-sm'>
                                    {dict.owner.totalProperties}
                                </p>
                                <p className='text-3xl font-bold text-gray-900 mt-1'>
                                    {stats.totalProperties}
                                </p>
                            </div>
                            <HomeIcon className='h-12 w-12 text-blue-600' />
                        </div>
                    </div>

                    <div className='bg-white rounded-lg shadow p-6'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-gray-600 text-sm'>{dict.owner.unreadMessages}</p>
                                <p className='text-3xl font-bold text-gray-900 mt-1'>
                                    {stats.messages}
                                </p>
                            </div>
                            <ChatBubbleLeftRightIcon className='h-12 w-12 text-green-600' />
                        </div>
                    </div>

                    <div className='bg-white rounded-lg shadow p-6'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-gray-600 text-sm'>{dict.owner.totalViews}</p>
                                <p className='text-3xl font-bold text-gray-900 mt-1'>
                                    {stats.views}
                                </p>
                            </div>
                            <div className='h-12 w-12 flex items-center justify-center text-purple-600 text-2xl'>
                                👁️
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className='bg-white rounded-lg shadow p-6'>
                    <h2 className='text-xl font-bold text-gray-900 mb-4'>
                        {dict.owner.quickActions}
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <Link
                            href={`/${lang}/owner/properties/create`}
                            className='flex items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors group'
                        >
                            <PlusIcon className='h-8 w-8 text-gray-400 group-hover:text-blue-600 mr-3' />
                            <span className='text-lg font-semibold text-gray-600 group-hover:text-blue-600'>
                                {dict.owner.addNewProperty}
                            </span>
                        </Link>

                        <Link
                            href={`/${lang}/owner/inbox`}
                            className='flex items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors group'
                        >
                            <ChatBubbleLeftRightIcon className='h-8 w-8 text-gray-400 group-hover:text-green-600 mr-3' />
                            <span className='text-lg font-semibold text-gray-600 group-hover:text-green-600'>
                                {dict.owner.checkMessages}
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { HomeIcon, ChatBubbleLeftRightIcon, PlusIcon } from '@heroicons/react/24/outline'

interface OwnerDashboardClientProps {
    dict: any
    lang: string
}

export default function OwnerDashboardClient({ dict, lang }: OwnerDashboardClientProps) {
    const [user, setUser] = useState<any>(null)
    const [stats, setStats] = useState({
        totalProperties: 0,
        messages: 0,
        views: 0
    })
    const router = useRouter()

    useEffect(() => {
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

    if (!user) {
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
                    <h1 className='text-3xl font-bold text-gray-900'>{dict.owner.dashboard}</h1>
                    <p className='mt-2 text-gray-600'>{dict.owner.manageDashboardDescription}</p>
                </div>

                {/* Stats Cards */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
                    <div className='bg-white p-6 rounded-lg shadow'>
                        <div className='flex items-center'>
                            <div className='p-3 bg-blue-100 rounded-lg'>
                                <HomeIcon className='h-6 w-6 text-blue-600' />
                            </div>
                            <div className='ml-4'>
                                <p className='text-sm text-gray-600'>
                                    {dict.owner.totalProperties}
                                </p>
                                <p className='text-2xl font-bold text-gray-900'>
                                    {stats.totalProperties}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white p-6 rounded-lg shadow'>
                        <div className='flex items-center'>
                            <div className='p-3 bg-green-100 rounded-lg'>
                                <ChatBubbleLeftRightIcon className='h-6 w-6 text-green-600' />
                            </div>
                            <div className='ml-4'>
                                <p className='text-sm text-gray-600'>{dict.owner.messages}</p>
                                <p className='text-2xl font-bold text-gray-900'>{stats.messages}</p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white p-6 rounded-lg shadow'>
                        <div className='flex items-center'>
                            <div className='p-3 bg-purple-100 rounded-lg'>
                                <svg
                                    className='h-6 w-6 text-purple-600'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                                    />
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                                    />
                                </svg>
                            </div>
                            <div className='ml-4'>
                                <p className='text-sm text-gray-600'>{dict.owner.views}</p>
                                <p className='text-2xl font-bold text-gray-900'>{stats.views}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className='bg-white p-6 rounded-lg shadow'>
                    <h2 className='text-xl font-bold text-gray-900 mb-4'>
                        {dict.owner.quickActions}
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <Link
                            href={`/${lang}/owner/properties/create`}
                            className='flex items-center p-4 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors'
                        >
                            <PlusIcon className='h-6 w-6 text-blue-600 mr-3' />
                            <div>
                                <p className='font-semibold text-gray-900'>
                                    {dict.owner.createNewProperty}
                                </p>
                                <p className='text-sm text-gray-600'>
                                    {dict.owner.addPropertyDescription}
                                </p>
                            </div>
                        </Link>
                        <Link
                            href={`/${lang}/owner/properties`}
                            className='flex items-center p-4 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors'
                        >
                            <HomeIcon className='h-6 w-6 text-gray-600 mr-3' />
                            <div>
                                <p className='font-semibold text-gray-900'>
                                    {dict.owner.manageProperties}
                                </p>
                                <p className='text-sm text-gray-600'>
                                    {dict.owner.viewEditDescription}
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

'use client'

import Link from 'next/link'
import UrbitiaLogo from '@/app/ui/urbitia-logo'

interface OwnerNavBarProps {
    dict: any
    lang: string
    userName: string
    onLogout: () => void
    activePage?: 'dashboard' | 'properties' | 'inbox'
}

export default function OwnerNavBar({
    dict,
    lang,
    userName,
    onLogout,
    activePage
}: OwnerNavBarProps) {
    return (
        <nav className='bg-blue-600 shadow-sm'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between h-16'>
                    <div className='flex items-center space-x-8'>
                        <Link href={`/${lang}`} className='flex items-center'>
                            <div className='scale-[0.35] origin-left'>
                                <UrbitiaLogo />
                            </div>
                        </Link>
                        <div className='flex space-x-4'>
                            <Link
                                href={`/${lang}/owner/dashboard`}
                                className={`${
                                    activePage === 'dashboard'
                                        ? 'text-white font-medium border-b-2 border-white'
                                        : 'text-blue-100 hover:text-white'
                                } pb-4 pt-5 transition-colors`}
                            >
                                {dict.navigation.dashboard}
                            </Link>
                            <Link
                                href={`/${lang}/owner/properties`}
                                className={`${
                                    activePage === 'properties'
                                        ? 'text-white font-medium border-b-2 border-white'
                                        : 'text-blue-100 hover:text-white'
                                } pb-4 pt-5 transition-colors`}
                            >
                                {dict.owner.myProperties}
                            </Link>
                            <Link
                                href={`/${lang}/owner/inbox`}
                                className={`${
                                    activePage === 'inbox'
                                        ? 'text-white font-medium border-b-2 border-white'
                                        : 'text-blue-100 hover:text-white'
                                } pb-4 pt-5 transition-colors`}
                            >
                                {dict.navigation.inbox}
                            </Link>
                        </div>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <span className='text-blue-100'>
                            {dict.common.welcome}, {userName}
                        </span>
                        <button
                            onClick={onLogout}
                            className='text-sm text-blue-100 hover:text-white transition-colors'
                        >
                            {dict.navigation.logout}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

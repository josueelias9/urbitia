// TODO: move this to layout because it doesnt contain any client-side logic
'use client'

import Link from 'next/link'
import UrbitiaLogo from '@/app/ui/urbitia-logo'

interface BuyerNavBarProps {
    dict: any
    lang: string
    userName: string
    onLogout: () => void
    activePage?: 'properties' | 'chat'
}

export default function BuyerNavBar({
    dict,
    lang,
    userName,
    onLogout,
    activePage
}: BuyerNavBarProps) {
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
                                href={`/${lang}/buyer/properties`}
                                className={`${
                                    activePage === 'properties'
                                        ? 'text-white font-medium border-b-2 border-white'
                                        : 'text-blue-100 hover:text-white'
                                } pb-4 pt-5 transition-colors`}
                            >
                                {dict.navigation.properties}
                            </Link>
                            <Link
                                href={`/${lang}/buyer/chat`}
                                className={`${
                                    activePage === 'chat'
                                        ? 'text-white font-medium border-b-2 border-white'
                                        : 'text-blue-100 hover:text-white'
                                } pb-4 pt-5 transition-colors`}
                            >
                                {dict.navigation.chat}
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

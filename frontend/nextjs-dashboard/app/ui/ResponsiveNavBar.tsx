'use client'

import { useState } from 'react'
import Link from 'next/link'
import UrbitiaLogo from '@/app/ui/urbitia-logo'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { signOut } from 'next-auth/react'

type NavItem = {
    href: string
    label: string
    key: string
}

interface ResponsiveNavBarProps {
    dict: any
    lang: string
    userName: string
    navItems: NavItem[]
    activePage?: string
}

export default function ResponsiveNavBar({
    dict,
    lang,
    userName,
    navItems,
    activePage
}: ResponsiveNavBarProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <nav className='bg-blue-600 shadow-sm'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between h-16'>
                    {/* Logo y navegación desktop */}
                    <div className='flex items-center space-x-8'>
                        <Link href={`/${lang}`} className='flex items-center'>
                            <div className='scale-[0.35] origin-left'>
                                <UrbitiaLogo />
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className='hidden md:flex space-x-4'>
                            {navItems.map(item => (
                                <Link
                                    key={item.key}
                                    href={item.href}
                                    className={`${
                                        activePage === item.key
                                            ? 'text-white font-medium border-b-2 border-white'
                                            : 'text-blue-100 hover:text-white'
                                    } pb-4 pt-5 transition-colors`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Desktop User Menu */}
                    <div className='hidden md:flex items-center space-x-4'>
                        <span className='text-blue-100'>
                            {dict.common.welcome}, {userName}
                        </span>
                        <button
                            onClick={() => signOut({ callbackUrl: `/${lang}/legal-advisory` })}
                            className='text-sm text-blue-100 hover:text-white transition-colors'
                        >
                            {dict.navigation.logout}
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className='md:hidden flex items-center'>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className='text-blue-100 hover:text-white transition-colors'
                            aria-label='Toggle menu'
                        >
                            {isMobileMenuOpen ? (
                                <XMarkIcon className='h-6 w-6' />
                            ) : (
                                <Bars3Icon className='h-6 w-6' />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className='md:hidden bg-blue-700 border-t border-blue-500'>
                    <div className='px-2 pt-2 pb-3 space-y-1'>
                        {navItems.map(item => (
                            <Link
                                key={item.key}
                                href={item.href}
                                className={`${
                                    activePage === item.key
                                        ? 'bg-blue-800 text-white'
                                        : 'text-blue-100 hover:bg-blue-600 hover:text-white'
                                } block px-3 py-2 rounded-md text-base font-medium transition-colors`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className='border-t border-blue-500 pt-2'>
                            <div className='px-3 py-2 text-blue-100 text-sm'>
                                {dict.common.welcome}, {userName}
                            </div>
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false)
                                    signOut({ callbackUrl: `/${lang}` })
                                }}
                                className='w-full text-left px-3 py-2 text-blue-100 hover:bg-blue-600 hover:text-white rounded-md text-base font-medium transition-colors'
                            >
                                {dict.navigation.logout}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

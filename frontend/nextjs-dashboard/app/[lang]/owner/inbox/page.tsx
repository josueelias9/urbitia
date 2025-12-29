'use client'

import { useEffect, useState, use } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { EnvelopeIcon, EnvelopeOpenIcon } from '@heroicons/react/24/outline'
import { getChatsByUser, markMessagesAsRead } from '@/app/[lang]/marketplace/lib/actions'
import { Chat } from '@/app/[lang]/marketplace/lib/types'
import type { Locale } from '@/proxy'
import enDict from '@/app/dictionaries/en.json'
import esDict from '@/app/dictionaries/es.json'

export default function OwnerInboxPage({ params }: { params: Promise<{ lang: Locale }> }) {
    const resolvedParams = use(params)
    const [user, setUser] = useState<any>(null)
    const [chats, setChats] = useState<Chat[]>([])
    const [isLoading, setIsLoading] = useState(true)
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

        // Fetch real chats from database
        async function fetchChats() {
            const result = await getChatsByUser(parsedUser.id, 'owner')
            if (result.success && result.chats) {
                setChats(result.chats as Chat[])
            }
            setIsLoading(false)
        }

        fetchChats()
    }, [router, lang])

    if (!dict) {
        return null
    }

    const handleLogout = () => {
        localStorage.removeItem('marketplace-user')
        router.push(`/${lang}`)
    }

    const handleChatClick = async (chat: Chat) => {
        // Mark messages as read
        if (chat.id && user) {
            await markMessagesAsRead(chat.id, user.id)
            // Refresh chats to update unread status
            const result = await getChatsByUser(user.id, 'owner')
            if (result.success && result.chats) {
                setChats(result.chats as Chat[])
            }
        }
        // In a real app, this would navigate to a detailed chat view
    }

    const formatDate = (date: Date) => {
        const now = new Date()
        const diff = now.getTime() - new Date(date).getTime()
        const hours = diff / (1000 * 60 * 60)
        const days = diff / (1000 * 60 * 60 * 24)

        if (hours < 1) return dict.common.justNow
        if (hours < 24) return `${Math.floor(hours)} ${dict.common.hoursAgo}`
        if (days < 7) return `${Math.floor(days)} ${dict.common.daysAgo}`
        return new Date(date).toLocaleDateString()
    }

    if (!user) {
        return null
    }

    // Count unread messages across all chats
    const unreadCount = chats.reduce((count, chat) => {
        const unreadInChat = chat.messages?.filter(m => !m.read && m.senderId !== user.id).length || 0
        return count + unreadInChat
    }, 0)

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
                                    className='text-gray-600 hover:text-gray-900'
                                >
                                    {dict.navigation.dashboard}
                                </Link>
                                <Link
                                    href={`/${lang}/owner/properties`}
                                    className='text-gray-600 hover:text-gray-900'
                                >
                                    {dict.owner.myProperties}
                                </Link>
                                <Link href={`/${lang}/owner/inbox`} className='text-blue-600 font-medium'>
                                    {dict.navigation.inbox}
                                    {unreadCount > 0 && (
                                        <span className='ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full'>
                                            {unreadCount}
                                        </span>
                                    )}
                                </Link>
                            </div>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <span className='text-gray-700'>{dict.common.welcome}, {user.name}</span>
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
                    <h1 className='text-3xl font-bold text-gray-900'>{dict.navigation.inbox}</h1>
                    <p className='mt-2 text-gray-600'>
                        {unreadCount > 0
                            ? (unreadCount > 1 
                                ? dict.owner.unreadMessagesPlural.replace('{count}', unreadCount.toString())
                                : dict.owner.unreadMessagesSingular.replace('{count}', unreadCount.toString()))
                            : dict.owner.allMessagesRead}
                    </p>
                </div>

                {isLoading ? (
                    <div className='text-center py-12'>
                        <div className='inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'></div>
                        <p className='mt-2 text-gray-600'>{dict.common.loading}</p>
                    </div>
                ) : chats.length === 0 ? (
                    <div className='text-center py-12 bg-white rounded-lg shadow'>
                        <EnvelopeIcon className='h-16 w-16 text-gray-400 mx-auto mb-4' />
                        <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                            {dict.owner.noMessagesYet}
                        </h3>
                        <p className='text-gray-600'>
                            {dict.owner.noMessagesDescription}
                        </p>
                    </div>
                ) : (
                    <div className='bg-white rounded-lg shadow overflow-hidden'>
                        {chats.map((chat, index) => {
                            const lastMessage = chat.messages && chat.messages.length > 0 ? chat.messages[0] : null
                            const hasUnread = chat.messages?.some(m => !m.read && m.senderId !== user.id) || false
                            
                            return (
                                <div
                                    key={chat.id}
                                    className={`p-6 ${index !== 0 ? 'border-t' : ''} ${
                                        hasUnread ? 'bg-blue-50' : 'hover:bg-gray-50'
                                    } transition-colors cursor-pointer`}
                                    onClick={() => handleChatClick(chat)}
                                >
                                    <div className='flex items-start justify-between'>
                                        <div className='flex-1'>
                                            <div className='flex items-center mb-2'>
                                                {hasUnread ? (
                                                    <EnvelopeIcon className='h-5 w-5 text-blue-600 mr-3' />
                                                ) : (
                                                    <EnvelopeOpenIcon className='h-5 w-5 text-gray-400 mr-3' />
                                                )}
                                                <div>
                                                    <h3 className='font-semibold text-gray-900'>
                                                        {chat.buyer?.name || 'Unknown Buyer'}
                                                    </h3>
                                                    <p className='text-sm text-gray-600'>
                                                        {chat.buyer?.email || ''}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='ml-8'>
                                                <p className='text-sm text-gray-600 mb-2'>
                                                    Re: <strong>{chat.property?.title || 'Property'}</strong>
                                                </p>
                                                {lastMessage && (
                                                    <p className='text-gray-800'>{lastMessage.content}</p>
                                                )}
                                            </div>
                                        </div>
                                        <div className='ml-4 text-right'>
                                            {lastMessage && (
                                                <p className='text-sm text-gray-500'>
                                                    {formatDate(lastMessage.timestamp)}
                                                </p>
                                            )}
                                            {hasUnread && (
                                                <span className='inline-block mt-2 px-2 py-1 bg-blue-600 text-white text-xs rounded-full'>
                                                    {dict.common.new}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}

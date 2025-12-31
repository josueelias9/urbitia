'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { EnvelopeIcon, EnvelopeOpenIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline'
import { getChatsByUser, markMessagesAsRead } from '@/app/lib/actions'
import { Chat } from '@/app/lib/types'
import ChatInterface from '@/app/ui/ChatInterface'

interface OwnerInboxClientProps {
    dict: any
    lang: string
}

export default function OwnerInboxClient({ dict, lang }: OwnerInboxClientProps) {
    const [user, setUser] = useState<any>(null)
    const [chats, setChats] = useState<Chat[]>([])
    const [selectedChat, setSelectedChat] = useState<Chat | null>(null)
    const [isLoading, setIsLoading] = useState(true)
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

    const handleLogout = () => {
        localStorage.removeItem('marketplace-user')
        router.push(`/${lang}`)
    }

    const handleChatClick = async (chat: Chat) => {
        // Mark messages as read
        if (chat.id && user) {
            await markMessagesAsRead(chat.id, user.id)
        }
        setSelectedChat(chat)
        // Refresh chats to update unread status
        await refreshChats()
    }

    const refreshChats = async () => {
        if (!user) return
        const result = await getChatsByUser(user.id, 'owner')
        if (result.success && result.chats) {
            setChats(result.chats as Chat[])
            // Update selected chat if it exists
            if (selectedChat) {
                const updatedChat = result.chats.find((c: Chat) => c.id === selectedChat.id)
                if (updatedChat) {
                    setSelectedChat(updatedChat as Chat)
                }
            }
        }
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
        const unreadInChat =
            chat.messages?.filter(m => !m.read && m.senderId !== user.id).length || 0
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
                                <Link
                                    href={`/${lang}/owner/inbox`}
                                    className='text-blue-600 font-medium'
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
                    <h1 className='text-3xl font-bold text-gray-900'>{dict.owner.inbox}</h1>
                    <p className='mt-2 text-gray-600'>
                        {unreadCount > 0
                            ? unreadCount > 1
                                ? dict.owner.unreadMessagesPlural.replace(
                                      '{count}',
                                      unreadCount.toString()
                                  )
                                : dict.owner.unreadMessagesSingular.replace(
                                      '{count}',
                                      unreadCount.toString()
                                  )
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
                        <ChatBubbleLeftIcon className='h-16 w-16 text-gray-400 mx-auto mb-4' />
                        <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                            {dict.chat?.noConversations || 'No messages yet'}
                        </h3>
                        <p className='text-gray-600'>
                            {dict.chat?.waitForMessages ||
                                "You'll see buyer messages here when they contact you about your properties"}
                        </p>
                    </div>
                ) : (
                    <div className='flex gap-4 h-[calc(100vh-280px)]'>
                        {/* Chat List - Left Side */}
                        <div className='w-1/3 bg-white rounded-lg shadow overflow-hidden flex flex-col'>
                            <div className='bg-blue-600 text-white p-4'>
                                <h2 className='text-lg font-semibold flex items-center'>
                                    <ChatBubbleLeftIcon className='h-5 w-5 mr-2' />
                                    {dict.owner.inbox}
                                </h2>
                            </div>
                            <div className='flex-1 overflow-y-auto'>
                                {chats.map((chat, index) => {
                                    const lastMessage =
                                        chat.messages && chat.messages.length > 0
                                            ? chat.messages[0]
                                            : null
                                    const hasUnread =
                                        chat.messages?.some(
                                            m => !m.read && m.senderId !== user.id
                                        ) || false

                                    return (
                                        <div
                                            key={chat.id}
                                            className={`p-4 ${index !== 0 ? 'border-t' : ''} ${
                                                selectedChat?.id === chat.id
                                                    ? 'bg-blue-100 border-l-4 border-l-blue-600'
                                                    : hasUnread
                                                      ? 'bg-blue-50'
                                                      : 'hover:bg-gray-50'
                                            } transition-colors cursor-pointer`}
                                            onClick={() => handleChatClick(chat)}
                                        >
                                            <div className='flex items-start justify-between'>
                                                <div className='flex-1'>
                                                    <div className='flex items-center mb-1'>
                                                        {hasUnread ? (
                                                            <EnvelopeIcon className='h-4 w-4 text-blue-600 mr-2 flex-shrink-0' />
                                                        ) : (
                                                            <EnvelopeOpenIcon className='h-4 w-4 text-gray-400 mr-2 flex-shrink-0' />
                                                        )}
                                                        <h3 className='font-semibold text-gray-900 text-sm truncate'>
                                                            {chat.buyer?.name || 'Buyer'}
                                                        </h3>
                                                    </div>
                                                    <p className='text-xs text-gray-600 ml-6 truncate'>
                                                        {chat.property?.title || 'Property'}
                                                    </p>
                                                    {lastMessage && (
                                                        <p className='text-xs text-gray-500 ml-6 truncate mt-1'>
                                                            {lastMessage.content}
                                                        </p>
                                                    )}
                                                </div>
                                                <div className='ml-2 text-right flex-shrink-0'>
                                                    {lastMessage && (
                                                        <p className='text-xs text-gray-500'>
                                                            {formatDate(lastMessage.timestamp)}
                                                        </p>
                                                    )}
                                                    {hasUnread && (
                                                        <span className='inline-block mt-1 px-2 py-0.5 bg-blue-600 text-white text-xs rounded-full'>
                                                            {dict.common.new}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Chat Interface - Right Side */}
                        <div className='flex-1 bg-white rounded-lg shadow overflow-hidden'>
                            {selectedChat ? (
                                <ChatInterface
                                    chat={selectedChat}
                                    currentUserId={user.id}
                                    onMessageSent={refreshChats}
                                    dict={dict}
                                />
                            ) : (
                                <div className='flex items-center justify-center h-full text-gray-500'>
                                    <div className='text-center'>
                                        <ChatBubbleLeftIcon className='h-16 w-16 mx-auto mb-4 text-gray-300' />
                                        <p>
                                            {dict.chat?.selectConversation ||
                                                'Select a conversation to view messages'}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
    EnvelopeIcon,
    EnvelopeOpenIcon,
    ChatBubbleLeftIcon,
    ArrowLeftIcon
} from '@heroicons/react/24/outline'
import { getChatsByUser, markMessagesAsRead, getChatById } from '@/app/lib/actions'
import { Chat } from '@/app/lib/types'
import ChatInterface from '@/app/ui/ChatInterface'
import BuyerNavBar from '@/app/ui/buyer/BuyerNavBar'

interface BuyerChatClientProps {
    dict: any
    lang: string
}

export default function BuyerChatClient({ dict, lang }: BuyerChatClientProps) {
    const [user, setUser] = useState<any>(null)
    const [chats, setChats] = useState<Chat[]>([])
    const [selectedChat, setSelectedChat] = useState<Chat | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const savedUser = localStorage.getItem('marketplace-user')
        if (!savedUser) {
            router.push(`/${lang}/login?role=buyer`)
            return
        }

        const parsedUser = JSON.parse(savedUser)
        if (parsedUser.role !== 'buyer') {
            router.push(`/${lang}/login?role=buyer`)
            return
        }

        setUser(parsedUser)

        // Fetch real chats from database
        // TODO: this should be passed from server component to avoid flicker
        async function fetchChats() {
            const result = await getChatsByUser(parsedUser.id, 'buyer')
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
            // Load full chat with all messages
            const chatResult = await getChatById(chat.id)
            if (chatResult.success && chatResult.chat) {
                setSelectedChat(chatResult.chat as Chat)
            }
        }
        // Refresh chats list to update unread status
        const result = await getChatsByUser(user.id, 'buyer')
        if (result.success && result.chats) {
            setChats(result.chats as Chat[])
        }
    }

    const refreshChats = async () => {
        if (!user) return
        const result = await getChatsByUser(user.id, 'buyer')
        if (result.success && result.chats) {
            setChats(result.chats as Chat[])
            // Update selected chat with all messages if it exists
            if (selectedChat && selectedChat.id) {
                const { getChatById } = await import('@/app/lib/actions')
                const chatResult = await getChatById(selectedChat.id)
                if (chatResult.success && chatResult.chat) {
                    setSelectedChat(chatResult.chat as Chat)
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
            <BuyerNavBar
                dict={dict}
                lang={lang}
                userName={user.name}
                onLogout={handleLogout}
                activePage='chat'
            />

            {/* Main Content */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                <div className='mb-8'>
                    <h1 className='text-3xl font-bold text-gray-900'>
                        {dict.chat?.title || 'Messages'}
                    </h1>
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
                            {dict.chat?.noConversations || 'No conversations yet'}
                        </h3>
                        <p className='text-gray-600 mb-4'>
                            {dict.chat?.startConversation ||
                                'Start a conversation with a property owner'}
                        </p>
                        <Link
                            href={`/${lang}/buyer/properties`}
                            className='inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors'
                        >
                            {dict.navigation.properties}
                        </Link>
                    </div>
                ) : (
                    <div className='flex gap-4 h-[calc(100vh-280px)]'>
                        {/* Chat List - Left Side */}
                        <div className='w-1/3 bg-white rounded-lg shadow overflow-hidden flex flex-col'>
                            <div className='bg-blue-600 text-white p-4'>
                                <h2 className='text-lg font-semibold flex items-center'>
                                    <ChatBubbleLeftIcon className='h-5 w-5 mr-2' />
                                    {dict.chat?.title || 'Messages'}
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
                                                <div className='flex items-start space-x-3 flex-1'>
                                                    {/* Avatar */}
                                                    {chat.owner?.avatar ? (
                                                        <img
                                                            src={chat.owner.avatar}
                                                            alt={chat.owner.name || 'Owner'}
                                                            className='h-10 w-10 rounded-full object-cover flex-shrink-0'
                                                        />
                                                    ) : (
                                                        <div className='h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold flex-shrink-0'>
                                                            {(chat.owner?.name || 'O')
                                                                .charAt(0)
                                                                .toUpperCase()}
                                                        </div>
                                                    )}

                                                    <div className='flex-1 min-w-0'>
                                                        <div className='flex items-center mb-1'>
                                                            {hasUnread && (
                                                                <EnvelopeIcon className='h-4 w-4 text-blue-600 mr-2 flex-shrink-0' />
                                                            )}
                                                            <h3 className='font-semibold text-gray-900 text-sm truncate'>
                                                                {chat.owner?.name ||
                                                                    'Property Owner'}
                                                            </h3>
                                                        </div>
                                                        <p className='text-xs text-gray-600 truncate'>
                                                            {chat.property?.title || 'Property'}
                                                        </p>
                                                        {lastMessage && (
                                                            <p className='text-xs text-gray-500 truncate mt-1'>
                                                                {lastMessage.content}
                                                            </p>
                                                        )}
                                                    </div>
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

'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
    EnvelopeIcon,
    ChatBubbleLeftIcon,
    ChatBubbleLeftRightIcon,
    ArrowLeftIcon
} from '@heroicons/react/24/outline'
import { getChatsByUser, markMessagesAsRead, getChatById } from '@/app/lib/actions'
import { Chat } from '@/app/lib/types'
import ChatInterface from '@/app/ui/ChatInterface'

interface ChatListClientProps {
    dict: any
    lang: string
    role: 'buyer' | 'owner'
}

export default function ChatListClient({ dict, lang, role }: ChatListClientProps) {
    const [user, setUser] = useState<any>(null)
    const [userId, setUserId] = useState<string | null>(null)
    const [chats, setChats] = useState<Chat[]>([])
    const [selectedChat, setSelectedChat] = useState<Chat | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const saved = localStorage.getItem('marketplace-user')
        if (!saved) {
            router.push(`/${lang}/login?role=${role}`)
            return
        }

        const parsed = JSON.parse(saved)
        if (parsed.role !== role) {
            router.push(`/${lang}/login?role=${role}`)
            return
        }

        setUser(parsed)
        setUserId(parsed.id)

        async function fetchChats() {
            const result = await getChatsByUser(parsed.id, role)
            if (result.success && result.chats) {
                setChats(result.chats as Chat[])
            }
            setIsLoading(false)
        }

        fetchChats()
    }, [router, lang, role])

    const handleLogout = () => {
        localStorage.removeItem('marketplace-user')
        router.push(`/${lang}`)
    }

    const handleChatClick = async (chat: Chat) => {
        if (!user && !userId) return
        const id = user?.id || userId
        if (chat.id && id) {
            await markMessagesAsRead(chat.id, id)
            const chatResult = await getChatById(chat.id)
            if (chatResult.success && chatResult.chat) {
                setSelectedChat(chatResult.chat as Chat)
            }
        }

        const result = await getChatsByUser(id as string, role)
        if (result.success && result.chats) {
            setChats(result.chats as Chat[])
        }
    }

    const refreshChats = async () => {
        const id = user?.id || userId
        if (!id) return
        const result = await getChatsByUser(id, role)
        if (result.success && result.chats) {
            setChats(result.chats as Chat[])
            if (selectedChat && selectedChat.id) {
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

    if (!user && !userId) return null

    const currentId = user?.id || userId

    const unreadCount = chats.reduce((count, chat) => {
        const unreadInChat =
            chat.messages?.filter(m => !m.read && m.senderId !== currentId).length || 0
        return count + unreadInChat
    }, 0)

    const headerTitle =
        role === 'buyer'
            ? dict.chat?.title || 'Messages'
            : dict.owner?.inbox || dict.navigation?.inbox || 'Inbox'

    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
            <div className='mb-8'>
                <h1 className='text-3xl font-bold text-gray-900 flex items-center gap-3'>
                    {role === 'buyer' ? (
                        <>
                            <ChatBubbleLeftIcon className='h-7 w-7 sm:hidden text-gray-700' />
                            <span className='hidden sm:inline'>{headerTitle}</span>
                        </>
                    ) : (
                        <span>{headerTitle}</span>
                    )}
                </h1>
                <p className='mt-2 text-gray-600 hidden sm:block'>
                    {unreadCount > 0
                        ? unreadCount > 1
                            ? dict.owner?.unreadMessagesPlural?.replace(
                                  '{count}',
                                  unreadCount.toString()
                              )
                            : dict.owner?.unreadMessagesSingular?.replace(
                                  '{count}',
                                  unreadCount.toString()
                              )
                        : dict.owner?.allMessagesRead}
                </p>
            </div>

            {isLoading ? (
                <div className='text-center py-12'>
                    <div className='inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'></div>
                    <p className='mt-2 text-gray-600'>{dict.common.loading}</p>
                </div>
            ) : chats.length === 0 ? (
                <div className='text-center py-12 bg-white rounded-lg shadow'>
                    <ChatBubbleLeftRightIcon className='h-16 w-16 text-gray-400 mx-auto mb-4' />
                    <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                        {dict.chat?.noConversations}
                    </h3>
                    <p className='text-gray-600 mb-4'>
                        {role === 'buyer'
                            ? dict.chat?.startConversation
                            : dict.chat?.waitForMessages}
                    </p>
                    {role === 'buyer' && (
                        <Link
                            href={`/${lang}/buyer/properties`}
                            className='inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors'
                        >
                            {dict.navigation.properties}
                        </Link>
                    )}
                </div>
            ) : (
                <div className='flex gap-4 h-[calc(100vh-280px)]'>
                    <div className='w-full sm:w-1/3 bg-white rounded-lg shadow overflow-hidden flex flex-col'>
                        <div className='bg-blue-600 text-white p-4'>
                            <h2 className='text-lg font-semibold flex items-center'>
                                <ChatBubbleLeftIcon className='h-5 w-5 mr-2' />
                                {headerTitle}
                            </h2>
                        </div>
                        <div className='flex-1 overflow-y-auto'>
                            {chats.map((chat, index) => {
                                const lastMessage =
                                    chat.messages && chat.messages.length > 0
                                        ? chat.messages[0]
                                        : null
                                const hasUnread =
                                    chat.messages?.some(m => !m.read && m.senderId !== currentId) ||
                                    false

                                return (
                                    <div
                                        key={chat.id}
                                        className={`p-4 ${index !== 0 ? 'border-t' : ''} ${selectedChat?.id === chat.id ? 'bg-blue-100 border-l-4 border-l-blue-600' : hasUnread ? 'bg-blue-50' : 'hover:bg-gray-50'} transition-colors cursor-pointer`}
                                        onClick={() => handleChatClick(chat)}
                                    >
                                        <div className='flex items-start justify-between'>
                                            <div className='flex items-start space-x-3 flex-1'>
                                                {(
                                                    role === 'buyer'
                                                        ? chat.owner?.avatar
                                                        : chat.buyer?.avatar
                                                ) ? (
                                                    <img
                                                        src={
                                                            (role === 'buyer'
                                                                ? chat.owner?.avatar
                                                                : chat.buyer?.avatar) || ''
                                                        }
                                                        alt={
                                                            (role === 'buyer'
                                                                ? chat.owner?.name
                                                                : chat.buyer?.name) || 'User'
                                                        }
                                                        className='h-10 w-10 rounded-full object-cover flex-shrink-0'
                                                    />
                                                ) : (
                                                    <div className='h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold flex-shrink-0'>
                                                        {(
                                                            (role === 'buyer'
                                                                ? chat.owner?.name
                                                                : chat.buyer?.name) ||
                                                            (role === 'buyer' ? 'O' : 'B')
                                                        )
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
                                                            {(role === 'buyer'
                                                                ? chat.owner?.name
                                                                : chat.buyer?.name) ||
                                                                (role === 'buyer'
                                                                    ? 'Property Owner'
                                                                    : 'Buyer')}
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

                    <div className='hidden sm:flex-1 sm:block bg-white rounded-lg shadow overflow-hidden'>
                        {selectedChat ? (
                            <ChatInterface
                                chat={selectedChat}
                                currentUserId={currentId as string}
                                onMessageSent={refreshChats}
                                dict={dict}
                            />
                        ) : (
                            <div className='flex items-center justify-center h-full text-gray-500'>
                                <div className='text-center'>
                                    <ChatBubbleLeftIcon className='h-16 w-16 mx-auto mb-4 text-gray-300' />
                                    <p>{dict.chat?.selectConversation}</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {selectedChat && (
                        <div className='sm:hidden fixed inset-0 z-50 bg-white'>
                            <div className='p-4 border-b flex items-center'>
                                <button className='mr-3 p-2' onClick={() => setSelectedChat(null)}>
                                    <ArrowLeftIcon className='h-6 w-6 text-gray-700' />
                                </button>
                                <h3 className='text-lg font-semibold'>
                                    {selectedChat.property?.title}
                                </h3>
                            </div>
                            <div className='h-[calc(100vh-64px)] overflow-auto'>
                                <ChatInterface
                                    chat={selectedChat}
                                    currentUserId={currentId as string}
                                    onMessageSent={refreshChats}
                                    dict={dict}
                                />
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

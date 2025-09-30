'use client'

import { useState, useEffect, useRef } from 'react'
import { useAuth } from '@/app/marketplace/lib/auth-context'
import { useSearchParams } from 'next/navigation'
import { mockChats, mockProperties, mockUsers, getUserById, getPropertyById } from '@/app/marketplace/lib/mock-data'
import { Chat, ChatMessage, Property, User } from '@/app/marketplace/lib/types'
import { ChatBubble } from '@/app/marketplace/components/chat-bubble'
import { UserAvatar } from '@/app/marketplace/components/user-avatar'
import Link from 'next/link'
import { 
    ArrowLeftIcon, 
    PaperAirplaneIcon,
    PhotoIcon,
    MapPinIcon
} from '@heroicons/react/24/outline'

export default function ChatPage() {
    const { user } = useAuth()
    const searchParams = useSearchParams()
    const [chats, setChats] = useState<Chat[]>([])
    const [activeChat, setActiveChat] = useState<Chat | null>(null)
    const [newMessage, setNewMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    // Get URL parameters
    const propertyId = searchParams.get('propertyId')
    const ownerId = searchParams.get('ownerId')
    const chatId = searchParams.get('chatId')

    useEffect(() => {
        if (user) {
            // Load user's chats
            const userChats = mockChats.filter(chat => 
                user.role === 'buyer' ? chat.buyerId === user.id : chat.ownerId === user.id
            )
            setChats(userChats)

            // Handle direct chat creation from property page
            if (propertyId && ownerId && user.role === 'buyer') {
                const existingChat = userChats.find(chat => 
                    chat.propertyId === propertyId && chat.ownerId === ownerId
                )
                
                if (existingChat) {
                    setActiveChat(existingChat)
                } else {
                    // Create new chat
                    const newChat: Chat = {
                        id: `chat-new-${Date.now()}`,
                        propertyId,
                        buyerId: user.id,
                        ownerId,
                        messages: [],
                        createdAt: new Date(),
                        updatedAt: new Date()
                    }
                    setActiveChat(newChat)
                }
            } else if (chatId) {
                const foundChat = userChats.find(chat => chat.id === chatId)
                if (foundChat) setActiveChat(foundChat)
            } else if (userChats.length > 0) {
                setActiveChat(userChats[0])
            }
        }
    }, [user, propertyId, ownerId, chatId])

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [activeChat?.messages])

    const sendMessage = async () => {
        if (!newMessage.trim() || !user || !activeChat) return

        setIsLoading(true)

        const message: ChatMessage = {
            id: `msg-${Date.now()}`,
            chatId: activeChat.id,
            senderId: user.id,
            content: newMessage.trim(),
            timestamp: new Date(),
            read: false
        }

        // Update active chat
        const updatedChat = {
            ...activeChat,
            messages: [...activeChat.messages, message],
            updatedAt: new Date()
        }

        setActiveChat(updatedChat)
        setNewMessage('')

        // If this is a new chat, add it to the chats list
        if (!chats.find(chat => chat.id === activeChat.id)) {
            setChats(prev => [updatedChat, ...prev])
        } else {
            setChats(prev => prev.map(chat => 
                chat.id === activeChat.id ? updatedChat : chat
            ))
        }

        setIsLoading(false)
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            sendMessage()
        }
    }

    const getOtherUser = (chat: Chat): User | null => {
        const otherUserId = user?.role === 'buyer' ? chat.ownerId : chat.buyerId
        return getUserById(otherUserId) || null
    }

    const getChatProperty = (chat: Chat): Property | null => {
        return getPropertyById(chat.propertyId) || null
    }

    if (!user) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-gray-400 text-6xl mb-4">💬</div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Sign In Required</h1>
                    <p className="text-gray-600 mb-6">Please sign in to access your messages.</p>
                    <Link
                        href="/marketplace/login"
                        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Sign In
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <Link 
                                href={user.role === 'buyer' ? '/marketplace/properties' : '/marketplace/owner/dashboard'} 
                                className="flex items-center space-x-2"
                            >
                                <ArrowLeftIcon className="h-5 w-5 text-gray-400" />
                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">R</span>
                                </div>
                                <span className="font-bold text-xl text-gray-800">RealEstate</span>
                            </Link>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-600">
                                Hello, {user.name}
                            </span>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden" style={{ height: 'calc(100vh - 200px)' }}>
                    <div className="flex h-full">
                        {/* Chat List Sidebar */}
                        <div className="w-1/3 border-r border-gray-200 flex flex-col">
                            <div className="p-4 border-b border-gray-200">
                                <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
                                <p className="text-sm text-gray-600">{chats.length} conversation{chats.length !== 1 ? 's' : ''}</p>
                            </div>

                            <div className="flex-1 overflow-y-auto">
                                {chats.length > 0 ? (
                                    chats.map((chat) => {
                                        const otherUser = getOtherUser(chat)
                                        const property = getChatProperty(chat)
                                        const lastMessage = chat.messages[chat.messages.length - 1]
                                        
                                        return (
                                            <div
                                                key={chat.id}
                                                onClick={() => setActiveChat(chat)}
                                                className={`p-4 cursor-pointer hover:bg-gray-50 border-b border-gray-100 ${
                                                    activeChat?.id === chat.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                                                }`}
                                            >
                                                {otherUser && (
                                                    <div className="flex items-start space-x-3">
                                                        <UserAvatar user={otherUser} size="sm" />
                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex items-center justify-between">
                                                                <p className="text-sm font-medium text-gray-900 truncate">
                                                                    {otherUser.name}
                                                                </p>
                                                                <p className="text-xs text-gray-500">
                                                                    {lastMessage ? new Date(lastMessage.timestamp).toLocaleDateString() : ''}
                                                                </p>
                                                            </div>
                                                            {property && (
                                                                <p className="text-xs text-gray-600 truncate mb-1">
                                                                    {property.title}
                                                                </p>
                                                            )}
                                                            <p className="text-sm text-gray-600 truncate">
                                                                {lastMessage ? lastMessage.content : 'No messages yet'}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    })
                                ) : (
                                    <div className="p-8 text-center">
                                        <div className="text-gray-400 text-4xl mb-3">💬</div>
                                        <p className="text-gray-600">No conversations yet</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Chat Messages */}
                        <div className="flex-1 flex flex-col">
                            {activeChat ? (
                                <>
                                    {/* Chat Header */}
                                    <div className="p-4 border-b border-gray-200">
                                        {(() => {
                                            const otherUser = getOtherUser(activeChat)
                                            const property = getChatProperty(activeChat)
                                            
                                            return (
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-3">
                                                        {otherUser && (
                                                            <>
                                                                <UserAvatar user={otherUser} size="sm" />
                                                                <div>
                                                                    <p className="font-medium text-gray-900">{otherUser.name}</p>
                                                                    <p className="text-sm text-gray-600 capitalize">{otherUser.role}</p>
                                                                </div>
                                                            </>
                                                        )}
                                                    </div>
                                                    
                                                    {property && (
                                                        <Link
                                                            href={`/marketplace/properties/${property.id}`}
                                                            className="flex items-center text-sm text-blue-600 hover:text-blue-800"
                                                        >
                                                            <PhotoIcon className="h-4 w-4 mr-1" />
                                                            View Property
                                                        </Link>
                                                    )}
                                                </div>
                                            )
                                        })()}
                                    </div>

                                    {/* Property Info (if available) */}
                                    {(() => {
                                        const property = getChatProperty(activeChat)
                                        return property && (
                                            <div className="p-4 bg-gray-50 border-b border-gray-200">
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-16 h-12 bg-gray-200 rounded overflow-hidden">
                                                        <img
                                                            src={property.images[0]}
                                                            alt={property.title}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <div className="flex-1">
                                                        <p className="font-medium text-gray-900 text-sm">{property.title}</p>
                                                        <p className="text-xs text-gray-600 flex items-center">
                                                            <MapPinIcon className="h-3 w-3 mr-1" />
                                                            {property.address.city}, {property.address.country}
                                                        </p>
                                                        <p className="text-sm font-semibold text-green-600">
                                                            {new Intl.NumberFormat('en-US', {
                                                                style: 'currency',
                                                                currency: property.currency,
                                                                minimumFractionDigits: 0,
                                                                maximumFractionDigits: 0,
                                                            }).format(property.price)}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })()}

                                    {/* Messages */}
                                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                        {activeChat.messages.length > 0 ? (
                                            activeChat.messages.map((message) => {
                                                const sender = getUserById(message.senderId)
                                                return sender && (
                                                    <ChatBubble
                                                        key={message.id}
                                                        message={message}
                                                        isCurrentUser={message.senderId === user.id}
                                                        sender={sender}
                                                    />
                                                )
                                            })
                                        ) : (
                                            <div className="text-center text-gray-500 py-8">
                                                <p>Start the conversation by sending a message!</p>
                                            </div>
                                        )}
                                        <div ref={messagesEndRef} />
                                    </div>

                                    {/* Message Input */}
                                    <div className="p-4 border-t border-gray-200">
                                        <div className="flex space-x-3">
                                            <div className="flex-1">
                                                <textarea
                                                    value={newMessage}
                                                    onChange={(e) => setNewMessage(e.target.value)}
                                                    onKeyPress={handleKeyPress}
                                                    placeholder="Type your message..."
                                                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                                    rows={2}
                                                />
                                            </div>
                                            <button
                                                onClick={sendMessage}
                                                disabled={!newMessage.trim() || isLoading}
                                                className="self-end bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                <PaperAirplaneIcon className="h-5 w-5" />
                                            </button>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="flex-1 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-gray-400 text-6xl mb-4">💬</div>
                                        <p className="text-gray-600">Select a conversation to start messaging</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
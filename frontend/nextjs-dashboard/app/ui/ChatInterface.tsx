'use client'

import { useState, useEffect, useRef } from 'react'
import { Chat } from '@/app/lib/types'
import { sendChatMessage } from '@/app/lib/actions'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'

interface ChatInterfaceProps {
    chat: Chat
    currentUserId: string
    onMessageSent: () => void
    dict: any
}

export default function ChatInterface({
    chat,
    currentUserId,
    onMessageSent,
    dict
}: ChatInterfaceProps) {
    const [newMessage, setNewMessage] = useState('')
    const [isSending, setIsSending] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    // Scroll to bottom when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [chat.messages])

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!newMessage.trim() || isSending) return

        setIsSending(true)
        try {
            const result = await sendChatMessage(chat.id!, currentUserId, newMessage.trim())

            if (result.success) {
                setNewMessage('')
                onMessageSent()
            }
        } catch (error) {
            console.error('Error sending message:', error)
        } finally {
            setIsSending(false)
        }
    }

    const sortedMessages = [...(chat.messages || [])].sort(
        (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    )

    return (
        <div className='flex flex-col h-full'>
            {/* Chat Header */}
            <div className='bg-white border-b border-gray-200 p-4'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-3'>
                        {chat.buyer?.avatar ? (
                            <img
                                src={chat.buyer.avatar}
                                alt={chat.buyer.name || 'User'}
                                className='h-10 w-10 rounded-full object-cover'
                            />
                        ) : (
                            <div className='h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold'>
                                {(chat.buyer?.name || 'U').charAt(0).toUpperCase()}
                            </div>
                        )}
                        <div>
                            <h2 className='text-lg font-semibold text-gray-900'>
                                {chat.buyer?.name || 'Unknown Buyer'}
                            </h2>
                            <p className='text-sm text-gray-600'>
                                {dict.chat?.propertyInquiry || 'Property Inquiry'}:{' '}
                                <span className='font-medium'>
                                    {chat.property?.title || 'Property'}
                                </span>
                            </p>
                        </div>
                    </div>
                    {chat.property?.id && (
                        <a
                            href={`/properties/${chat.property.id}`}
                            className='text-sm text-blue-600 hover:text-blue-700'
                        >
                            {dict.chat?.viewProperty || 'View Property'}
                        </a>
                    )}
                </div>
            </div>

            {/* Messages Area */}
            <div className='flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50'>
                {sortedMessages.length === 0 ? (
                    <div className='text-center text-gray-500 py-8'>
                        {dict.chat?.noMessages || 'No messages yet'}
                    </div>
                ) : (
                    sortedMessages.map((message, index) => {
                        const isOwn = message.senderId === currentUserId
                        return (
                            <div
                                key={message.id || index}
                                className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                                        isOwn
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-white text-gray-900 border border-gray-200'
                                    }`}
                                >
                                    <p className='text-sm'>{message.content}</p>
                                    <p
                                        className={`text-xs mt-1 ${
                                            isOwn ? 'text-blue-100' : 'text-gray-500'
                                        }`}
                                    >
                                        {new Date(message.timestamp).toLocaleTimeString([], {
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className='bg-white border-t border-gray-200 p-4'>
                <form onSubmit={handleSendMessage} className='flex space-x-2'>
                    <input
                        type='text'
                        value={newMessage}
                        onChange={e => setNewMessage(e.target.value)}
                        placeholder={dict.chat?.typeMessage || 'Type your message...'}
                        className='flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                        disabled={isSending}
                    />
                    <button
                        type='submit'
                        disabled={!newMessage.trim() || isSending}
                        className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center'
                    >
                        <PaperAirplaneIcon className='h-5 w-5' />
                    </button>
                </form>
            </div>
        </div>
    )
}

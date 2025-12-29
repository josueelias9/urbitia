'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { EnvelopeIcon, EnvelopeOpenIcon } from '@heroicons/react/24/outline'

interface Message {
    id: string
    from: {
        name: string
        email: string
    }
    property: {
        id: string
        title: string
    }
    message: string
    date: Date
    read: boolean
}

export default function OwnerInboxPage() {
    const [user, setUser] = useState<any>(null)
    const [messages, setMessages] = useState<Message[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const savedUser = localStorage.getItem('marketplace-user')
        if (!savedUser) {
            router.push('/login?role=owner')
            return
        }

        const parsedUser = JSON.parse(savedUser)
        if (parsedUser.role !== 'owner') {
            router.push('/login?role=owner')
            return
        }

        setUser(parsedUser)

        // Mock messages - in real app would fetch from API
        setMessages([
            {
                id: '1',
                from: {
                    name: 'John Buyer',
                    email: 'john@example.com'
                },
                property: {
                    id: 'prop-1',
                    title: 'Modern Apartment in Downtown'
                },
                message:
                    "Hi, I'm very interested in this property. Could we schedule a viewing this weekend?",
                date: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
                read: false
            },
            {
                id: '2',
                from: {
                    name: 'Sarah Smith',
                    email: 'sarah@example.com'
                },
                property: {
                    id: 'prop-2',
                    title: 'Cozy House with Garden'
                },
                message: 'Is this property still available? What are the move-in requirements?',
                date: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
                read: false
            },
            {
                id: '3',
                from: {
                    name: 'Mike Johnson',
                    email: 'mike@example.com'
                },
                property: {
                    id: 'prop-1',
                    title: 'Modern Apartment in Downtown'
                },
                message: 'Thank you for showing me the property. I would like to make an offer.',
                date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
                read: true
            }
        ])

        setIsLoading(false)
    }, [router])

    const handleLogout = () => {
        localStorage.removeItem('marketplace-user')
        router.push('/')
    }

    const handleMarkAsRead = (messageId: string) => {
        setMessages(prev =>
            prev.map(msg => (msg.id === messageId ? { ...msg, read: true } : msg))
        )
    }

    const formatDate = (date: Date) => {
        const now = new Date()
        const diff = now.getTime() - date.getTime()
        const hours = diff / (1000 * 60 * 60)
        const days = diff / (1000 * 60 * 60 * 24)

        if (hours < 1) return 'Just now'
        if (hours < 24) return `${Math.floor(hours)} hours ago`
        if (days < 7) return `${Math.floor(days)} days ago`
        return date.toLocaleDateString()
    }

    if (!user) {
        return null
    }

    const unreadCount = messages.filter(m => !m.read).length

    return (
        <div className='min-h-screen bg-gray-50'>
            {/* Navigation Bar */}
            <nav className='bg-white shadow-sm'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex justify-between h-16'>
                        <div className='flex items-center space-x-8'>
                            <Link href='/' className='text-xl font-bold text-blue-600'>
                                RealEstate
                            </Link>
                            <div className='flex space-x-4'>
                                <Link
                                    href='/owner/dashboard'
                                    className='text-gray-600 hover:text-gray-900'
                                >
                                    Dashboard
                                </Link>
                                <Link
                                    href='/owner/properties'
                                    className='text-gray-600 hover:text-gray-900'
                                >
                                    My Properties
                                </Link>
                                <Link href='/owner/inbox' className='text-blue-600 font-medium'>
                                    Inbox
                                    {unreadCount > 0 && (
                                        <span className='ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full'>
                                            {unreadCount}
                                        </span>
                                    )}
                                </Link>
                            </div>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <span className='text-gray-700'>Welcome, {user.name}</span>
                            <button
                                onClick={handleLogout}
                                className='text-sm text-gray-600 hover:text-gray-900'
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                <div className='mb-8'>
                    <h1 className='text-3xl font-bold text-gray-900'>Inbox</h1>
                    <p className='mt-2 text-gray-600'>
                        {unreadCount > 0
                            ? `You have ${unreadCount} unread message${unreadCount > 1 ? 's' : ''}`
                            : 'All messages read'}
                    </p>
                </div>

                {isLoading ? (
                    <div className='text-center py-12'>
                        <div className='inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'></div>
                        <p className='mt-2 text-gray-600'>Loading messages...</p>
                    </div>
                ) : messages.length === 0 ? (
                    <div className='text-center py-12 bg-white rounded-lg shadow'>
                        <EnvelopeIcon className='h-16 w-16 text-gray-400 mx-auto mb-4' />
                        <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                            No messages yet
                        </h3>
                        <p className='text-gray-600'>
                            Messages from interested buyers will appear here
                        </p>
                    </div>
                ) : (
                    <div className='bg-white rounded-lg shadow overflow-hidden'>
                        {messages.map((message, index) => (
                            <div
                                key={message.id}
                                className={`p-6 ${index !== 0 ? 'border-t' : ''} ${
                                    !message.read ? 'bg-blue-50' : 'hover:bg-gray-50'
                                } transition-colors cursor-pointer`}
                                onClick={() => handleMarkAsRead(message.id)}
                            >
                                <div className='flex items-start justify-between'>
                                    <div className='flex-1'>
                                        <div className='flex items-center mb-2'>
                                            {message.read ? (
                                                <EnvelopeOpenIcon className='h-5 w-5 text-gray-400 mr-3' />
                                            ) : (
                                                <EnvelopeIcon className='h-5 w-5 text-blue-600 mr-3' />
                                            )}
                                            <div>
                                                <h3 className='font-semibold text-gray-900'>
                                                    {message.from.name}
                                                </h3>
                                                <p className='text-sm text-gray-600'>
                                                    {message.from.email}
                                                </p>
                                            </div>
                                        </div>
                                        <div className='ml-8'>
                                            <p className='text-sm text-gray-600 mb-2'>
                                                Re: <strong>{message.property.title}</strong>
                                            </p>
                                            <p className='text-gray-800'>{message.message}</p>
                                        </div>
                                    </div>
                                    <div className='ml-4 text-right'>
                                        <p className='text-sm text-gray-500'>
                                            {formatDate(message.date)}
                                        </p>
                                        {!message.read && (
                                            <span className='inline-block mt-2 px-2 py-1 bg-blue-600 text-white text-xs rounded-full'>
                                                New
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

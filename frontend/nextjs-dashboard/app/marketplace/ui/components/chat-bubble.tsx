import { ChatMessage } from '@/app/marketplace/lib/types'
import { UserAvatar } from './user-avatar'

interface ChatBubbleProps {
    message: ChatMessage
    isCurrentUser: boolean
    sender: {
        name: string
        avatar?: string
    }
    showAvatar?: boolean
}

export function ChatBubble({ message, isCurrentUser, sender, showAvatar = true }: ChatBubbleProps) {
    const formatTime = (timestamp: Date) => {
        return new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        }).format(new Date(timestamp))
    }

    return (
        <div className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'} mb-4`}>
            <div
                className={`flex max-w-xs lg:max-w-md ${isCurrentUser ? 'flex-row-reverse' : 'flex-row'}`}
            >
                {showAvatar && !isCurrentUser && (
                    <UserAvatar user={sender} size='sm' className='flex-shrink-0' />
                )}

                <div className={`mx-2 ${isCurrentUser ? 'mr-0' : 'ml-0'}`}>
                    <div
                        className={`px-4 py-2 rounded-2xl ${
                            isCurrentUser
                                ? 'bg-blue-600 text-white rounded-br-sm'
                                : 'bg-gray-200 text-gray-800 rounded-bl-sm'
                        }`}
                    >
                        <p className='text-sm'>{message.content}</p>
                    </div>

                    <div
                        className={`mt-1 text-xs text-gray-500 ${isCurrentUser ? 'text-right' : 'text-left'}`}
                    >
                        {formatTime(message.timestamp)}
                        {isCurrentUser && <span className='ml-2'>{message.read ? '✓✓' : '✓'}</span>}
                    </div>
                </div>

                {showAvatar && isCurrentUser && (
                    <UserAvatar user={sender} size='sm' className='flex-shrink-0' />
                )}
            </div>
        </div>
    )
}

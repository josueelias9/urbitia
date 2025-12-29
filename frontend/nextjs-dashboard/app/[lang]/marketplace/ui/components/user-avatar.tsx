import Image from 'next/image'

interface UserAvatarProps {
    user: {
        name: string
        avatar?: string | null
        email?: string
    }
    size?: 'sm' | 'md' | 'lg'
    showName?: boolean
    showEmail?: boolean
    className?: string
}

export function UserAvatar({
    user,
    size = 'md',
    showName = false,
    showEmail = false,
    className = ''
}: UserAvatarProps) {
    const sizeClasses = {
        sm: 'h-8 w-8',
        md: 'h-10 w-10',
        lg: 'h-16 w-16'
    }

    const textSizes = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg'
    }

    return (
        <div className={`flex items-center ${className}`}>
            <div
                className={`${sizeClasses[size]} rounded-full overflow-hidden bg-gray-300 flex items-center justify-center`}
            >
                {user.avatar ? (
                    <Image
                        src={user.avatar}
                        alt={user.name}
                        width={size === 'sm' ? 32 : size === 'md' ? 40 : 64}
                        height={size === 'sm' ? 32 : size === 'md' ? 40 : 64}
                        className='object-cover'
                    />
                ) : (
                    <span className={`font-semibold text-gray-600 ${textSizes[size]}`}>
                        {user.name.charAt(0).toUpperCase()}
                    </span>
                )}
            </div>
            {(showName || showEmail) && (
                <div className='ml-3'>
                    {showName && (
                        <div className={`font-medium text-gray-900 ${textSizes[size]}`}>
                            {user.name}
                        </div>
                    )}
                    {showEmail && user.email && (
                        <div className='text-sm text-gray-500'>{user.email}</div>
                    )}
                </div>
            )}
        </div>
    )
}

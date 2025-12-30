import { Metadata } from 'next'
import { SessionProvider } from 'next-auth/react'
import { AuthProvider } from '../../lib/auth-context'

export const metadata: Metadata = {
    title: {
        template: '%s | Real Estate Marketplace',
        default: 'Real Estate Marketplace'
    },
    description: 'Find your perfect property or list your real estate with our marketplace.'
}

export default function MarketplaceLayout({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <AuthProvider>
                <div className='min-h-screen bg-gray-50'>{children}</div>
            </AuthProvider>
        </SessionProvider>
    )
}

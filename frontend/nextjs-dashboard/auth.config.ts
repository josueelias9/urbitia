import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
    pages: {
        signIn: '/login'
    },
    providers: [
        // added later in auth.ts since it requires bcrypt which is only compatible with Node.js
        // while this file is also used in non-Node.js environments
    ],
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard')
            const isOnMarketplace = nextUrl.pathname.startsWith('/marketplace')
            const isOnMarketplaceHome = nextUrl.pathname === '/marketplace'
            const isOnMarketplaceLogin = nextUrl.pathname === '/marketplace/login'

            // Protect dashboard routes
            if (isOnDashboard) {
                if (isLoggedIn) return true
                return false // Redirect unauthenticated users to login page
            }

            // Protect marketplace routes (except home and login)
            if (isOnMarketplace && !isOnMarketplaceHome && !isOnMarketplaceLogin) {
                if (isLoggedIn) return true
                return false // Redirect unauthenticated users to login page
            }

            return true
        }
    }
} satisfies NextAuthConfig

import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
    pages: {
        signIn: 'es/login?role=buyer'
    },
    providers: [
        // added later in auth.ts since it requires bcrypt which is only compatible with Node.js
        // while this file is also used in non-Node.js environments
    ],
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            return true
        },
        async jwt({ token, user }) {
            // Add role to token when user logs in
            if (user) {
                token.role = (user as any).role
                token.id = user.id
            }
            return token
        },
        async session({ session, token }) {
            // Add role and id to session
            if (session.user) {
                ;(session.user as any).role = token.role as string
                ;(session.user as any).id = token.id as string
            }
            return session
        }
    }
} satisfies NextAuthConfig

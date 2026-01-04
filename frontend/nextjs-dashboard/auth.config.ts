import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'
import { z } from 'zod'
import { PrismaClient } from '@/generated/prisma'

const prisma = new PrismaClient()

async function getUser(email: string) {
    try {
        const user = await prisma.marketplace_user.findUnique({
            where: { email }
        })
        return user
    } catch (error) {
        console.error('Failed to fetch user:', error)
        throw new Error('Failed to fetch user.')
    }
}

export const authOptions = {
    // Configure authentication pages
    pages: {
        signIn: '/es/login'
    },

    // Configure authentication providers
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials)

                if (!parsedCredentials.success) {
                    return null
                }

                const { email, password } = parsedCredentials.data
                const user = await getUser(email)

                if (!user || !user.password) {
                    return null
                }

                const passwordsMatch = await bcrypt.compare(password, user.password)

                if (passwordsMatch) {
                    // Return user object that will be stored in the session
                    return {
                        id: user.id,
                        email: user.email,
                        name: user.name,
                        role: user.role
                    }
                }

                return null
            }
        })
    ],

    // Configure callbacks
    callbacks: {
        // JWT callback - runs when JWT is created or updated
        async jwt({ token, user }: { token: any; user: any }) {
            // Add custom properties to the token when user logs in
            if (user) {
                token.id = user.id
                token.role = (user as any).role
                token.name = user.name
            }
            return token
        },

        // Session callback - runs when session is checked
        async session({ session, token }: { session: any; token: any }) {
            // Send properties to the client
            if (session.user) {
                ;(session.user as any).id = token.id
                ;(session.user as any).role = token.role
                session.user.name = token.name as string
            }
            return session
        }
    },

    // Configure session strategy
    session: {
        strategy: 'jwt' as const
    },

    // Enable debug messages in development
    debug: process.env.NODE_ENV === 'development'
}

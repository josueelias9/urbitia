import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'
import { z } from 'zod'
import type { User } from '@/app/lib/definitions'
import { authConfig } from './auth.config'
import { PrismaClient } from '@/generated/prisma/client'

const prisma = new PrismaClient()

async function getUser(email: string): Promise<User | undefined> {
    try {
        const user = await prisma.users.findUnique({
            where: { email }
        })
        return user as User | undefined
    } catch (error) {
        console.error('Failed to fetch user:', error)
        throw new Error('Failed to fetch user.')
    }
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials)

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data

                    const user = await getUser(email)
                    if (!user) return null

                    const passwordsMatch = await bcrypt.compare(password, user.password)
                    if (passwordsMatch) return user
                }

                console.log('Invalid credentials')
                return null
            }
        })
    ]
})

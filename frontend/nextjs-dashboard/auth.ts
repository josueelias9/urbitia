import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/auth.config'

// Helper to get session in server components
export async function auth() {
    return await getServerSession(authOptions)
}

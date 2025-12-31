// TODO: validate if this file is still needed or can be removed

// lib/prisma.ts

import { PrismaClient } from '@/generated/prisma/client'

declare global {
    // Trick para evitar múltiples instancias en hot reload (Next.js dev mode)
    // eslint-disable-next-line no-var
    var prisma: PrismaClient | undefined
}

export const prisma =
    global.prisma ||
    new PrismaClient({
        log: ['query', 'info', 'warn', 'error'] // opcional para debug
    })

if (process.env.NODE_ENV !== 'production') global.prisma = prisma

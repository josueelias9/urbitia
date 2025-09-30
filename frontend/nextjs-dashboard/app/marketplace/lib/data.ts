'use server'
import { PrismaClient } from '@/generated/prisma'
import { Property } from './types'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

const prisma = globalForPrisma.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export async function getPropertiesByOwner(ownerId: string) {
    const data = await prisma.property.findMany({
        where: { ownerId },
        orderBy: { createdAt: 'desc' }
    })
    return data.map((p: any) => ({
        ...p,
        address: {
            street: p.street,
            city: p.city,
            country: p.country,
            zipCode: p.zipCode,
            coordinates: p.lat && p.lng ? { lat: p.lat, lng: p.lng } : undefined
        }
    }))
}

export async function getChatsByUser(userId: string, role: 'owner' | 'buyer') {
    const where = role === 'owner' ? { ownerId: userId } : { buyerId: userId }
    return await prisma.chat.findMany({
        where,
        orderBy: { createdAt: 'desc' }
    })
}

export async function getAllProperties(): Promise<Property[]> {
    const data = await prisma.property.findMany({
        orderBy: { createdAt: 'desc' }
    })
    return data.map((p: any) => ({
        ...p,
        address: {
            street: p.street,
            city: p.city,
            country: p.country,
            zipCode: p.zipCode,
            coordinates: p.lat && p.lng ? { lat: p.lat, lng: p.lng } : undefined
        }
    }))
}

export async function getFeaturedProperties(): Promise<Property[]> {
    const data = await prisma.property.findMany({
        take: 4,
        orderBy: { createdAt: 'desc' }
    })
    return data.map((p: any) => ({
        ...p,
        address: {
            street: p.street,
            city: p.city,
            country: p.country,
            zipCode: p.zipCode,
            coordinates: p.lat && p.lng ? { lat: p.lat, lng: p.lng } : undefined
        }
    }))
}

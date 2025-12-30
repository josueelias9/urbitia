'use server'
import { PrismaClient } from '@/generated/prisma'
import { revalidatePath } from 'next/cache'

const globalForPrisma = global as unknown as { prisma: PrismaClient }
const prisma = globalForPrisma.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// Validate login credentials
export async function validateLogin(email: string, role: 'buyer' | 'owner') {
    try {
        const user = await prisma.marketplace_user.findFirst({
            where: {
                email,
                role
            }
        })

        if (!user) {
            return { success: false, error: 'Invalid email or role' }
        }

        return { success: true, user }
    } catch (error) {
        console.error('Error validating login:', error)
        return { success: false, error: 'Failed to validate credentials' }
    }
}

// Create or update a marketplace user
export async function upsertMarketplaceUser(userData: {
    id: string
    name: string
    email: string
    role: string
    avatar?: string
    phone?: string
}) {
    try {
        const user = await prisma.marketplace_user.upsert({
            where: { id: userData.id },
            update: {
                name: userData.name,
                email: userData.email,
                role: userData.role,
                avatar: userData.avatar,
                phone: userData.phone
            },
            create: {
                id: userData.id,
                name: userData.name,
                email: userData.email,
                role: userData.role,
                avatar: userData.avatar,
                phone: userData.phone
            }
        })

        return { success: true, user }
    } catch (error) {
        console.error('Error upserting marketplace user:', error)
        return { success: false, error: 'Failed to create/update user' }
    }
}

// Get or create a chat between a buyer and owner for a specific property
export async function getOrCreateChat(buyerId: string, ownerId: string, propertyId: string) {
    try {
        // Check if chat already exists
        let chat = await prisma.chat.findFirst({
            where: {
                buyerId,
                ownerId,
                propertyId
            },
            include: {
                messages: {
                    orderBy: { timestamp: 'asc' },
                    include: {
                        sender: true
                    }
                },
                property: true,
                buyer: true,
                owner: true
            }
        })

        // If no chat exists, create one
        if (!chat) {
            chat = await prisma.chat.create({
                data: {
                    buyerId,
                    ownerId,
                    propertyId
                },
                include: {
                    messages: {
                        orderBy: { timestamp: 'asc' },
                        include: {
                            sender: true
                        }
                    },
                    property: true,
                    buyer: true,
                    owner: true
                }
            })
        }

        return { success: true, chat }
    } catch (error) {
        console.error('Error getting or creating chat:', error)
        return { success: false, error: 'Failed to get or create chat' }
    }
}

// Send a message in a chat
export async function sendChatMessage(chatId: string, senderId: string, content: string) {
    try {
        const message = await prisma.chat_message.create({
            data: {
                chatId,
                senderId,
                content,
                read: false
            },
            include: {
                sender: true
            }
        })

        revalidatePath('/[lang]/owner/inbox')
        revalidatePath('/[lang]/buyer/properties')

        return { success: true, message }
    } catch (error) {
        console.error('Error sending message:', error)
        return { success: false, error: 'Failed to send message' }
    }
}

// Get all chats for a user (buyer or owner)
export async function getChatsByUser(userId: string, role: 'buyer' | 'owner') {
    try {
        const where = role === 'owner' ? { ownerId: userId } : { buyerId: userId }

        const chats = await prisma.chat.findMany({
            where,
            include: {
                messages: {
                    orderBy: { timestamp: 'desc' },
                    take: 1, // Only get the last message for preview
                    include: {
                        sender: true
                    }
                },
                property: true,
                buyer: true,
                owner: true
            }
        })

        return { success: true, chats }
    } catch (error) {
        console.error('Error getting chats:', error)
        return { success: false, error: 'Failed to get chats' }
    }
}

// Get a single chat with all messages
export async function getChatById(chatId: string) {
    try {
        const chat = await prisma.chat.findUnique({
            where: { id: chatId },
            include: {
                messages: {
                    orderBy: { timestamp: 'asc' },
                    include: {
                        sender: true
                    }
                },
                property: true,
                buyer: true,
                owner: true
            }
        })

        if (!chat) {
            return { success: false, error: 'Chat not found' }
        }

        return { success: true, chat }
    } catch (error) {
        console.error('Error getting chat:', error)
        return { success: false, error: 'Failed to get chat' }
    }
}

// Mark messages as read
export async function markMessagesAsRead(chatId: string, userId: string) {
    try {
        await prisma.chat_message.updateMany({
            where: {
                chatId,
                senderId: { not: userId },
                read: false
            },
            data: {
                read: true
            }
        })

        revalidatePath('/[lang]/owner/inbox')

        return { success: true }
    } catch (error) {
        console.error('Error marking messages as read:', error)
        return { success: false, error: 'Failed to mark messages as read' }
    }
}

// Get property by ID with owner info
export async function getPropertyById(propertyId: string) {
    try {
        const property = await prisma.property.findUnique({
            where: { id: propertyId },
            include: {
                owner: true
            }
        })

        if (!property) {
            return { success: false, error: 'Property not found' }
        }

        return {
            success: true,
            property: {
                ...property,
                address: {
                    street: property.street,
                    city: property.city,
                    country: property.country,
                    zipCode: property.zipCode,
                    coordinates:
                        property.lat && property.lng
                            ? { lat: property.lat, lng: property.lng }
                            : undefined
                }
            }
        }
    } catch (error) {
        console.error('Error getting property:', error)
        return { success: false, error: 'Failed to get property' }
    }
}

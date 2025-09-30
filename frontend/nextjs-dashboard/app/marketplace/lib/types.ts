import type { marketplace_user, property, chat, chat_message } from '@/generated/prisma/client'

export type User = marketplace_user
export type Property = property & {
    address: {
        street: string
        city: string
        country: string
        zipCode: string
        coordinates?: {
            lat: number
            lng: number
        }
    }
}
export type Chat = chat
export type ChatMessage = chat_message

// Removed manual interfaces for Property, ChatMessage, and Chat
// https://www.prisma.io/docs/orm/prisma-schema/overview/generators#importing-generated-model-types
// TODO: check if it is better to import from "models" instead of "client"

import type { marketplace_user, property, chat, chat_message } from '@/generated/prisma/client'

export type User = marketplace_user
export type Property = property & {
    address?: {
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

export type Chat = chat & {
    messages?: ChatMessage[]
    property?: Property
    buyer?: User
    owner?: User
}

export type ChatMessage = chat_message & {
    sender?: User
}

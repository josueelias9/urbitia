import { Chat, Property, User } from './types'

export const mockUsers: User[] = [
    {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        role: 'buyer',
        avatar: null,
        phone: null,
        createdAt: new Date()
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'owner',
        avatar: null,
        phone: null,
        createdAt: new Date()
    }
]

export const mockProperties: Property[] = [
    {
        id: '1',
        title: 'Modern Downtown Apartment',
        description: 'Beautiful 2-bedroom apartment in the heart of downtown',
        price: 350000,
        currency: 'USD',
        type: 'apartment',
        status: 'available',
        bedrooms: 2,
        bathrooms: 2,
        area: 1200,
        street: '123 Main St',
        city: 'New York',
        country: 'United States',
        zipCode: '10001',
        lat: 40.7128,
        lng: -74.006,
        images: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00'],
        amenities: ['parking', 'gym', 'pool'],
        ownerId: '2',
        createdAt: new Date(),
        updatedAt: new Date()
    }
]

export const mockChats: Chat[] = []

export function getUserById(id: string): User | undefined {
    return mockUsers.find(user => user.id === id)
}

export function getPropertyById(id: string): Property | undefined {
    return mockProperties.find(property => property.id === id)
}

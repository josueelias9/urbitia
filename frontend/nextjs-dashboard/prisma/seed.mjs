import { PrismaClient } from '../generated/prisma/index.js'
const prisma = new PrismaClient()
import bcrypt from 'bcrypt'
async function main() {
    await prisma.marketplace_user.createMany({
        data: [
            {
                id: 'owner-1',
                name: 'Sarah Johnson',
                email: 'sarah@example.com',
                password: await bcrypt.hash('123456', 10),
                role: 'owner',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
                phone: '+1234567890'
            },
            {
                id: 'owner-2',
                name: 'Michael Chen',
                email: 'michael@example.com',
                password: await bcrypt.hash('123456', 10),
                role: 'owner',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
                phone: '+1234567891'
            },
            {
                id: 'buyer-1',
                name: 'Emma Davis',
                email: 'emma@example.com',
                password: await bcrypt.hash('123456', 10),
                role: 'buyer',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
                phone: '+1234567892'
            }
        ],
        skipDuplicates: true
    })

    await prisma.property.createMany({
        data: [
            {
                id: 'prop-1',
                title: 'Modern Downtown Apartment',
                description:
                    'Beautiful 2-bedroom apartment in the heart of downtown. Features include hardwood floors, modern kitchen, and stunning city views.',
                price: 450000,
                currency: 'USD',
                type: 'apartment',
                status: 'available',
                bedrooms: 2,
                bathrooms: 2,
                area: 85,
                street: '123 Main Street, Apt 4B',
                city: 'New York',
                country: 'USA',
                zipCode: '10001',
                lat: 40.7128,
                lng: -74.006,
                images: [
                    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
                    'https://images.unsplash.com/photo-1560449752-34e4a4d171c4?w=800',
                    'https://images.unsplash.com/photo-1560448075-bb485b067938?w=800'
                ],
                amenities: ['Parking', 'Gym', 'Pool', 'Concierge', 'Rooftop Terrace'],
                ownerId: 'owner-1'
            },
            {
                id: 'prop-2',
                title: 'Spacious Family House',
                description:
                    'Perfect family home with a large backyard, updated kitchen, and plenty of space for everyone. Located in a quiet neighborhood with great schools.',
                price: 675000,
                currency: 'USD',
                type: 'house',
                status: 'available',
                bedrooms: 4,
                bathrooms: 3,
                area: 180,
                street: '456 Oak Avenue',
                city: 'Austin',
                country: 'USA',
                zipCode: '78701',
                lat: null,
                lng: null,
                images: [
                    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800',
                    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
                    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800'
                ],
                amenities: ['Garden', 'Garage', 'Fireplace', 'Updated Kitchen', 'Walk-in Closet'],
                ownerId: 'owner-2'
            },
            {
                id: 'prop-3',
                title: 'Luxury Penthouse',
                description:
                    'Stunning penthouse with panoramic city views, private elevator access, and premium finishes throughout.',
                price: 1200000,
                currency: 'USD',
                type: 'apartment',
                status: 'available',
                bedrooms: 3,
                bathrooms: 3,
                area: 150,
                street: '789 Skyline Drive, PH',
                city: 'Miami',
                country: 'USA',
                zipCode: '33101',
                lat: null,
                lng: null,
                images: [
                    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
                    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
                    'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800'
                ],
                amenities: [
                    'Private Elevator',
                    'Balcony',
                    'Premium Finishes',
                    'City Views',
                    'Concierge'
                ],
                ownerId: 'owner-1'
            },
            {
                id: 'prop-4',
                title: 'Cozy Studio Apartment',
                description:
                    'Perfect starter home or investment property. Well-designed studio with modern amenities and great location.',
                price: 280000,
                currency: 'USD',
                type: 'apartment',
                status: 'available',
                bedrooms: 1,
                bathrooms: 1,
                area: 45,
                street: '321 Pine Street, Unit 2A',
                city: 'Seattle',
                country: 'USA',
                zipCode: '98101',
                lat: null,
                lng: null,
                images: [
                    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
                    'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800'
                ],
                amenities: ['Modern Kitchen', 'In-unit Laundry', 'Fitness Center', 'Pet Friendly'],
                ownerId: 'owner-2'
            }
        ],
        skipDuplicates: true
    })
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

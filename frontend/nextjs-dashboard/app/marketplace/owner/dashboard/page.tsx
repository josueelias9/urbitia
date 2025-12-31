import { getPropertiesByOwner, getChatsByUser } from '@/app/marketplace/lib/data'
import { Property } from '@/app/marketplace/lib/types'
import { PropertyCard } from '@/app/marketplace/ui/components/property-card'
import Link from 'next/link'
import {
    PlusIcon,
    HomeIcon,
    ChatBubbleLeftRightIcon,
    EyeIcon,
    BanknotesIcon,
    ArrowLeftIcon
} from '@heroicons/react/24/outline'

const userId = 'owner-1' // TODO: obtener dinámicamente

export default async function OwnerDashboard() {
    const properties: Property[] = await getPropertiesByOwner(userId)
    const chats = await getChatsByUser(userId, 'owner')
    const stats = {
        totalProperties: properties.length,
        totalViews: properties.length * 23,
        totalInquiries: chats.length,
        totalRevenue: properties.reduce((sum: number, prop: Property) => sum + prop.price, 0) * 0.03
    }

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount)
    }

    return (
        <div className='min-h-screen bg-gray-50'>
            <div className='max-w-7xl mx-auto py-8 px-4'>
                <div className='flex items-center mb-8'>
                    <ArrowLeftIcon className='h-6 w-6 text-gray-500 mr-2' />
                    <h1 className='text-2xl font-bold'>Owner Dashboard</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-8'>
                    <div className='bg-white rounded-lg shadow p-6 flex flex-col items-center'>
                        <HomeIcon className='h-8 w-8 text-blue-600 mb-2' />
                        <div className='text-lg font-bold'>{stats.totalProperties}</div>
                        <div className='text-gray-500'>Properties</div>
                    </div>
                    <div className='bg-white rounded-lg shadow p-6 flex flex-col items-center'>
                        <EyeIcon className='h-8 w-8 text-green-600 mb-2' />
                        <div className='text-lg font-bold'>{stats.totalViews}</div>
                        <div className='text-gray-500'>Views</div>
                    </div>
                    <div className='bg-white rounded-lg shadow p-6 flex flex-col items-center'>
                        <ChatBubbleLeftRightIcon className='h-8 w-8 text-purple-600 mb-2' />
                        <div className='text-lg font-bold'>{stats.totalInquiries}</div>
                        <div className='text-gray-500'>Inquiries</div>
                    </div>
                    <div className='bg-white rounded-lg shadow p-6 flex flex-col items-center'>
                        <BanknotesIcon className='h-8 w-8 text-yellow-600 mb-2' />
                        <div className='text-lg font-bold'>
                            {formatCurrency(stats.totalRevenue)}
                        </div>
                        <div className='text-gray-500'>Revenue</div>
                    </div>
                </div>
                <div className='mb-8 flex justify-between items-center'>
                    <h2 className='text-xl font-bold'>My Properties</h2>
                    <Link
                        href='/marketplace/owner/properties/create'
                        className='bg-blue-600 text-white px-4 py-2 rounded flex items-center'
                    >
                        <PlusIcon className='h-5 w-5 mr-2' /> Add Property
                    </Link>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {properties.map(property => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>
                <div className='mt-12'>
                    <h2 className='text-xl font-bold mb-4'>Recent Chats</h2>
                    <div className='bg-white rounded-lg shadow p-6'>
                        {chats.length === 0 ? (
                            <div className='text-gray-500'>No chats yet.</div>
                        ) : (
                            <ul>
                                {chats.map(chat => (
                                    <li key={chat.id} className='mb-2'>
                                        <Link
                                            href={`/marketplace/chat/${chat.id}`}
                                            className='text-blue-600 hover:underline'
                                        >
                                            Chat with {chat.buyerId === userId ? 'Owner' : 'Buyer'}{' '}
                                            ({chat.id})
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

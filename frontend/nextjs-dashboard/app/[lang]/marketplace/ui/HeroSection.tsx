import Link from 'next/link'
import { useAuth } from '@/app/lib/auth-context'

export function HeroSection() {
    const { user } = useAuth()
    return (
        <div className='bg-gradient-to-r from-urbitia-primary to-urbitia-dark text-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
                <div className='text-center'>
                    <h1 className='text-4xl md:text-6xl font-bold mb-6'>
                        Transforma tu propiedad en oportunidad
                    </h1>
                    <p className='text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-urbitia-secondary'>
                        Descubre increíbles oportunidades inmobiliarias o lista tu propiedad en
                        nuestro marketplace confiable
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                        {!user ? (
                            <>
                                <Link
                                    href='/marketplace/login?role=buyer'
                                    className='bg-urbitia-secondary text-urbitia-dark px-8 py-3 rounded-lg font-semibold hover:bg-white transition-colors'
                                >
                                    Busco Comprar
                                </Link>
                                <Link
                                    href='/marketplace/login?role=owner'
                                    className='bg-transparent border-2 border-urbitia-secondary text-urbitia-secondary px-8 py-3 rounded-lg font-semibold hover:bg-urbitia-secondary hover:text-urbitia-dark transition-colors'
                                >
                                    Soy Propietario
                                </Link>
                            </>
                        ) : user.role === 'buyer' ? (
                            <Link
                                href='/marketplace/properties'
                                className='bg-urbitia-secondary text-urbitia-dark px-8 py-3 rounded-lg font-semibold hover:bg-white transition-colors'
                            >
                                Ver Propiedades
                            </Link>
                        ) : (
                            <Link
                                href='/marketplace/owner/dashboard'
                                className='bg-urbitia-secondary text-urbitia-dark px-8 py-3 rounded-lg font-semibold hover:bg-white transition-colors'
                            >
                                Ir al Dashboard
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

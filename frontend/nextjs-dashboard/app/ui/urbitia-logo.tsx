import Image from 'next/image'
import { lusitana } from '@/app/ui/fonts'

export default function UrbitiaLogo() {
    return (
        <div className={`${lusitana.className} flex flex-row items-center leading-none text-white`}>
            <Image
                src='/urbitia.jpeg'
                alt='Urbitia Logo'
                width={48}
                height={48}
                className='rounded-lg'
            />
            <p className='text-[44px] ml-3'>Urbitia</p>
        </div>
    )
}

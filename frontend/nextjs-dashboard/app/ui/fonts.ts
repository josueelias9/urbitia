// TODO: check the official example and see if this is applied to all components. If so, replicate it everywhere.

import { Inter, Lusitana } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin']
})

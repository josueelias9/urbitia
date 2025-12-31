import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                '13': 'repeat(13, minmax(0, 1fr))'
            },
            colors: {
                blue: {
                    400: '#2589FE',
                    500: '#0070F3',
                    600: '#2F6FEB'
                },
                urbitia: {
                    primary: '#B85C2B', // Terracota/naranja cálido
                    secondary: '#F2E6D8', // Beige claro
                    dark: '#2E2E2E' // Gris oscuro/negro
                }
            }
        },
        keyframes: {
            shimmer: {
                '100%': {
                    transform: 'translateX(100%)'
                }
            }
        }
    },
    plugins: [require('@tailwindcss/forms')]
}
export default config

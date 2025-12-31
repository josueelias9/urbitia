import NextAuth from 'next-auth'
import { authConfig } from '@/auth.config'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

export const locales = ['es', 'en'] as const
export const defaultLocale = 'es' as const
export type Locale = (typeof locales)[number]

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
    // Negotiator expects plain object so we need to transform headers
    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

    const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
    return match(languages, locales, defaultLocale)
}

// i18n routing logic
function i18nProxy(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Check if there is any supported locale in the pathname
    const pathnameHasLocale = locales.some(
        locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return

    // Redirect if there is no locale
    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    // e.g. incoming request is /products
    // The new URL is now /es/products
    return NextResponse.redirect(request.nextUrl)
}

// Auth middleware
const authMiddleware = NextAuth(authConfig).auth

// Combined proxy
export default async function proxy(request: NextRequest) {
    // First check i18n routing
    const i18nResponse = i18nProxy(request)
    if (i18nResponse) return i18nResponse

    // Then apply auth middleware
    return authMiddleware(request as any)
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
}

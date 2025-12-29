import NextAuth from 'next-auth'
import { authConfig } from './auth.config'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from '@/app/i18n/config'
import { getLocale, getLocaleFromPathname } from '@/app/i18n/locale'

// First handle i18n routing
function i18nMiddleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    // Check if there is any supported locale in the pathname
    const pathnameHasLocale = getLocaleFromPathname(pathname)

    if (pathnameHasLocale) return

    // Redirect if there is no locale
    const locale = getLocale(request) || i18n.defaultLocale
    request.nextUrl.pathname = `/${locale}${pathname}`
    
    return NextResponse.redirect(request.nextUrl)
}

// Combine i18n middleware with auth middleware
const authMiddleware = NextAuth(authConfig).auth

export default async function middleware(request: NextRequest) {
    // First check i18n routing
    const i18nResponse = i18nMiddleware(request)
    if (i18nResponse) return i18nResponse

    // Then apply auth middleware
    return authMiddleware(request as any)
}

export const config = {
    // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
    runtime: 'nodejs'
}

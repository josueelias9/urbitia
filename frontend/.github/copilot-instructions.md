# Urbitia - Real Estate Platform

## Architecture

Bilingual (es/en) Next.js 15 marketplace connecting property owners with buyers. PostgreSQL via Prisma, localStorage auth, two-column chat UI.

## Critical: Prisma Custom Path
```typescript
import { PrismaClient } from '@/generated/prisma'  // ✅ Custom output
// NOT: '@prisma/client'  // ❌ Will fail
```
Schema in `prisma/schema.prisma` with `output = "../generated/prisma"`

## i18n Pattern
- All pages: `app/[lang]/{page}.tsx` with `[lang]` dynamic segment
- Dictionaries: `app/dictionaries/{en,es}.json` - update BOTH simultaneously
- Server: `const dict = await getDictionary(lang)` 
- Client: Load in `useEffect` from static imports (`enDict`/`esDict`)

## Auth Flow (localStorage)
```typescript
// Login: app/lib/actions.ts → validateLogin()
localStorage.setItem('marketplace-user', JSON.stringify(user))
// Format: {id: string, name: string, email: string, role: 'buyer'|'owner'}

// Route guards: Check role in useEffect, redirect if mismatch
const savedUser = localStorage.getItem('marketplace-user')
if (parsedUser.role !== 'buyer') router.push(`/${lang}/login?role=buyer`)
```
Routes: `/[lang]/buyer/*` and `/[lang]/owner/*`

## Database Actions Pattern
All mutations via `app/lib/actions.ts` with:
```typescript
'use server'
// Singleton: const prisma = globalForPrisma.prisma || new PrismaClient()
export async function actionName() {
  const result = await prisma.table.method()
  revalidatePath('/[lang]/route')  // Refresh cached data
  return { success: true, result }  // Always return success/error
}
```
Queries in `app/lib/data.ts` (read-only)

## Type Extensions
```typescript
// app/lib/types.ts - Extend Prisma types for nested data
import type { property } from '@/generated/prisma/client'
export type Property = property & {
  address?: { street: string; city: string; /* flattened in DB */ }
}
```
Use optional chaining: `property.address?.city`

## Chat System
- Two-column layout: chat list (left) | active conversation (right)
- Shared: `app/[lang]/components/ChatInterface.tsx` 
- Actions: `getChatsByUser(userId, role)`, `sendChatMessage(chatId, senderId, content)`
- Messages sorted ASC for display, DESC for preview

## Dev Workflow
```bash
cd nextjs-dashboard
pnpm i                                # pnpm only, not npm
npx prisma migrate deploy             # Apply migrations
npx prisma db seed                    # Test data
pnpm dev                              # Turbopack mode

# After schema changes:
npx prisma migrate dev --name add_field_x  # Migrate + generate client
npx prettier . --write                # Before commits
```

## Naming & Conventions
- Brand: "Urbitia" (not RealEstate/RealState)
- DB: snake_case (`marketplace_user`)
- Components: PascalCase (`ChatInterface.tsx`)
- Actions: camelCase (`sendChatMessage`)
- Use `'use client'` for localStorage, forms, interactive state

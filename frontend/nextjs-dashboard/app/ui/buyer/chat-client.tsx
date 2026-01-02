'use client'

import ChatListClient from '@/app/ui/ChatListClient'

interface BuyerChatClientProps {
    dict: any
    lang: string
}

export default function BuyerChatClient({ dict, lang }: BuyerChatClientProps) {
    return <ChatListClient dict={dict} lang={lang} role={'buyer'} />
}

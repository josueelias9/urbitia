'use client'

import ChatListClient from '@/app/ui/ChatListClient'

interface OwnerInboxClientProps {
    dict: any
    lang: string
}

export default function OwnerInboxClient({ dict, lang }: OwnerInboxClientProps) {
    return <ChatListClient dict={dict} lang={lang} role={'owner'} />
}

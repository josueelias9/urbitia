'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { User } from '@/app/lib/types'

interface AuthContextType {
    user: User | null
    login: (email: string, password: string, role: 'buyer' | 'owner') => Promise<boolean>
    logout: () => void
    isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Check if user is logged in from localStorage
        const savedUser = localStorage.getItem('marketplace-user')
        if (savedUser) {
            setUser(JSON.parse(savedUser))
        }
        setIsLoading(false)
    }, [])

    const login = async (
        email: string,
        password: string,
        role: 'buyer' | 'owner'
    ): Promise<boolean> => {
        setIsLoading(true)

        // Mock authentication - in a real app, this would be an API call
        if (email && password) {
            const mockUser: User = {
                id: `${role}-${Date.now()}`,
                name: email.split('@')[0],
                email,
                role,
                avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
                phone: '+1234567890',
                createdAt: new Date()
            }

            setUser(mockUser)
            localStorage.setItem('marketplace-user', JSON.stringify(mockUser))
            setIsLoading(false)
            return true
        }

        setIsLoading(false)
        return false
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('marketplace-user')
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}

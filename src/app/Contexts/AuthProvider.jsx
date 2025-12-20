"use client"
import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import axios from 'axios';
import { axiosPrivate } from '../utils/axiosPrivate';
import { useRouter } from 'next/navigation';


const AuthProvider = ({ children }) => {
    const router = useRouter()
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const login = (user) => {
        setUser(user)
        setIsLoading(false)
    }

    const logout = () => {
        setUser(null)
    }

    useEffect(() => {

        const verifyUser = async () => {
            try {
                const response = await axiosPrivate.post('/api/auth/verify')
                if (response?.data?.user) {
                    setUser(response?.data?.user)
                    setIsLoading(false)
                } else {
                    setIsLoading(false)
                    router.push('/login')
                }
            } catch (error) {
                setIsLoading(false)
                router.push('/login')
            }
        }

        verifyUser()
    }, [router]);


    const authInfo = {
        user,
        login,
        logout,
        isLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;
"use client"
import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import axios from 'axios';
import { axiosPrivate } from '../utils/axiosPrivate';


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [isLoading,setIsLoading]=useState(true)

    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
    }

    useEffect(() => {

        const verifyUser = async () => {
            const response = await axiosPrivate.post('/api/auth/verify')
            setUser(response?.data?.user)
            setIsLoading(false)
        }

        verifyUser()
    }, []);


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
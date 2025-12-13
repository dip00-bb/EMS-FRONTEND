"use client"
import React, { useState } from 'react';
import { AuthContext } from './AuthContext';


const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)

    const login=(user)=>{
        setUser(user)
    }

    const logout=()=>{
        setUser(null)
    }


    const authInfo={
        user,
        login,
        logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;
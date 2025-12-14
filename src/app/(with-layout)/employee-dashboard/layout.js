"use client"
import useAuth from '@/app/Hooks/useAuth';
import { useRouter } from 'next/navigation';
import React from 'react';

const DashboardLayout = ({ children }) => {
    const router=useRouter()
    const { user, isLoading } = useAuth()
    if (isLoading) {
        return <div>Loading...</div>
    }

    if (user.role === "employee" && user) {
        return children
    }

    return router.push('/login')

};

export default DashboardLayout;
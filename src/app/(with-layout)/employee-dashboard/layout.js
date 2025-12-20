"use client"
import Loader from '@/app/Components/Loader/Loader';
import useAuth from '@/app/Hooks/useAuth';
import { useRouter } from 'next/navigation';
import React from 'react';

const DashboardLayout = ({ children }) => {
    const router=useRouter()
    const { user, isLoading } = useAuth()
    if (isLoading) {
        return <Loader/>
    }

    if (user && user.role === "employee") {
        return children
    }

    return router.push('/login')

};

export default DashboardLayout;
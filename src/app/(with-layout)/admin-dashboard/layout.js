"use client"
import AdminSidebar from '@/app/Components/dashboard/AdminSidebar';
import Navbar from '@/app/Components/dashboard/Navbar';
import Loader from '@/app/Components/Loader/Loader';
import useAuth from '@/app/Hooks/useAuth';
import { useRouter } from 'next/navigation';
import React from 'react';

const AdminDashboard = ({ children }) => {
    const router = useRouter()
    const { user, isLoading } = useAuth()
    if (isLoading) {
        return <Loader />
    }

    if (user && user.role === "admin") {
        return <div className='flex w-full'>
            <div>
                <AdminSidebar />
            </div>
            <div className='flex-1'>
                <Navbar />
                {children}
            </div>
        </div>
    }

    return router.push('/login')

};

export default AdminDashboard;
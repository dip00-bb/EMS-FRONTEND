"use client"
import AdminSidebar from '@/app/Components/dashboard/AdminSidebar';
import Navbar from '@/app/Components/dashboard/Navbar';
import useAuth from '@/app/Hooks/useAuth';
import { useRouter } from 'next/navigation';
import React from 'react';

const AdminDashboard = ({ children }) => {
    const router = useRouter()
    const { user, isLoading } = useAuth()
    if (isLoading) {
        return <div>Loading...</div>
    }

    if ( user&& user.role === "admin") {
       return <div className='flex'>
            <AdminSidebar />
            <div className='flex-1'>
                <Navbar />
                {children}
            </div>
        </div>
    }

    return router.push('/login')

};

export default AdminDashboard;

"use client"
import useAuth from '@/app/Hooks/useAuth';
import { axiosPrivate } from '@/app/utils/axiosPrivate';
import React, { useEffect } from 'react';

const AdminDashboard = () => {
    const { user } = useAuth()

    useEffect(() => {
        const response = axiosPrivate.get('/api/auth/verify')
    }, [])
    console.log(user)
    return (
        <div>
            Admin Dashboard
        </div>
    );
};

export default AdminDashboard;
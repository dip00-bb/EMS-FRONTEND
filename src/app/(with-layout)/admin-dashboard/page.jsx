
"use client"
import useAuth from '@/app/Hooks/useAuth';
import { axiosPrivate } from '@/app/utils/axiosPrivate';
import React, { useEffect } from 'react';

const AdminDashboard = () => {
    const { user,isLoading } = useAuth()
    if(isLoading) {
        return <div>Loading...</div>
    }
    console.log(user)
    return (
        <div>
            Admin Dashboard
        </div>
    );
};

export default AdminDashboard;
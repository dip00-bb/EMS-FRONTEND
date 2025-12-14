
"use client"
import AdminSidebar from '@/app/Components/dashboard/AdminSidebar';
import AdminSummary from '@/app/Components/dashboard/AdminSummary';
import Navbar from '@/app/Components/dashboard/Navbar';
import React from 'react';

const AdminDashboard = () => {

    return (
        <div className='flex'>
            <AdminSidebar/>
            <div className='flex-1'>
                <Navbar/>
                <AdminSummary/>
            </div>
        </div>
    );
};

export default AdminDashboard;
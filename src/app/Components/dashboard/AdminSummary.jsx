import React from 'react';
import SummaryCard from './SummaryCard';
import { ArrowUpRightFromSquareIcon, Building, LayoutDashboard, LucideAirVent, User } from 'lucide-react';

const AdminSummary = () => {
    return (
        <div className='p-6'>
            <h3 className='text-2xl font-bold'>Dashboard Overview</h3>

            <div className='grid grid-cols-1 md:grid-cols-3 mt-6 gap-4'>
                <SummaryCard icon={<User />} text={"Total Employees"} number={13} />
                <SummaryCard icon={<LayoutDashboard />} text={"Total Departments"} number={5} />
                <SummaryCard icon={<Building />} text={"Total Employees"} number={6} />
                <SummaryCard icon={<Building />} text={"Monthly Salary"} number={6} />
            </div>

            <h3 className='text-2xl font-bold text-center mt-12'>Leave Details</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 mt-6 gap-4'>
                <SummaryCard icon={<User />} text={"Leave Applied"} number={13} />
                <SummaryCard icon={<ArrowUpRightFromSquareIcon />} text={"Leave Approved"} number={5} />
                <SummaryCard icon={<LucideAirVent />} text={"Leave Pending"} number={6} />
                <SummaryCard icon={<Building />} text={"Leave Rejected"} number={6} />
            </div>
        </div>
    );
};

export default AdminSummary;
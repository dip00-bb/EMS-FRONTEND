import { Banknote, Building, Calendar, LayoutDashboard, Settings, Users } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';




const AdminSidebar = () => {

    const pathName=usePathname()

    return (
        <div className='w-64 h-screen top-0 bottom-0 left-0 space-y-2 bg-(--neurtal-color)'>
            <div className='bg-(--primary-color) py-3 text-center'>
                <h3 className='text-2xl pacifico-regular text-white'>Employee MS</h3>
            </div>
            <div className='px-4'>
                <div>
                    <Link href={'/admin-dashboard'}
                        className={ ` ${pathName==='/admin-dashboard' ? "bg-red-500 rounded":"" } flex items-center gap-3 py-2.5 px-4`}
                    >
                        <LayoutDashboard color='white' />
                        <span>Dashboard</span>
                    </Link>
                </div>
                <div>
                    <Link href={'/admin-dashboard/employee'}
                        className={ ` ${pathName==='/admin-dashboard/employee' ? "bg-red-500 rounded":"" } flex items-center gap-3 py-2.5 px-4`}
                    >
                        <Users color='white' />
                        <span>Employee</span>
                    </Link>
                </div>
                <div>
                    <Link href={'/'}
                        className='flex items-center gap-3 py-2.5 px-4'
                    >
                        <Building color='white' />
                        <span>Department</span>
                    </Link>
                </div>

                <div>
                    <Link href={'/'}
                        className='flex items-center gap-3 py-2.5 px-4'
                    >
                        <Calendar color='white' />
                        <span>Leaves</span>
                    </Link>
                </div>


                <div>
                    <Link href={'/'}
                        className='flex items-center gap-3 py-2.5 px-4'
                    >
                        <Banknote  color='white'/>
                        <span>Leaves</span>
                    </Link>
                </div>


                <div>
                    <Link href={'/'}
                        className='flex items-center gap-3 py-2.5 px-4'
                    >
                        <Settings color='white' />
                        <span>Leaves</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdminSidebar;
import Link from 'next/link';
import React from 'react';

const DepartmentList = () => {
    return (
        <div>
            <div className='text-center'>
                <h3 className='text-2xl font-bold text-center mb-4'>Manage Department</h3>
            </div>

            <div className='flex justify-between'>
                <div>
                    <input type="text" placeholder='Search by name' className='bg-white border px-2 rounded'/>
                </div>
                <div>
                    <Link href={'/admin-dashboard/add-department'} className='bg-(--primary-color) px-2 py-1.5 rounded cursor-pointer'>Add New Department</Link>
                </div>
            </div>
        </div>
    );
};

export default DepartmentList;
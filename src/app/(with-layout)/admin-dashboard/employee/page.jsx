"use client"

import Loader from '@/app/Components/Loader/Loader';
import TableBody from '@/app/Components/Tables/TableBody';
import TableFooter from '@/app/Components/Tables/TableFooter';
import TableHead from '@/app/Components/Tables/TableHead';
import { axiosPrivate } from '@/app/utils/axiosPrivate';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const EmployeeList = () => {

    const { isPending, error, data } = useQuery({
        queryKey: ["listOfDepartment"],
        queryFn: async () => {
            const response = await axiosPrivate.get('/api/department/get-department');
            if (response?.data?.success) {
                return response?.data?.departmentList
            }
        },

    })

    if (isPending) <Loader />

    return (
        <div className='w-full'>
            {/* Table Header */}
            <div>
                <TableHead depName={"Department Name"} depDescription={"Department Description"} action={"Action"} />
            </div>

            {/* Table Body */}

            <div>
                {
                    data && data.map((dep) => (
                        <TableBody key={dep._id} depName={dep.departmentName} depDes={dep.departmentDescription} id={dep._id} />
                    ))
                }
            </div>

            {/* table footer */}

            <div className='px-3'>
                <TableFooter />
            </div>
        </div>
    );
};

export default EmployeeList;
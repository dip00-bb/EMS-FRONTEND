"use client"

import DepartmentHeader from '@/app/Components/department/DepartmentHeader';
import Loader from '@/app/Components/Loader/Loader';
import TableBody from '@/app/Components/Tables/TableBody';
import TableFooter from '@/app/Components/Tables/TableFooter';
import TableHead from '@/app/Components/Tables/TableHead';
import { axiosPrivate } from '@/app/utils/axiosPrivate';
import { setTotalData } from '@/lib/feature/pagination/paginationSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

const DepartmentList = () => {

    const dispatch = useAppDispatch()
    const currentPage = useAppSelector(state => state.pagination.currentPage);
    const limit = useAppSelector(state => state.pagination.limit)


    const { isPending, data } = useQuery({
        queryKey: ["listOfDepartment", limit, currentPage],
        queryFn: async () => {
            const response = await axiosPrivate.get(`/api/department/get-department/?limit=${limit}&page=${currentPage}`);
            if (response?.data?.success) {
                dispatch(setTotalData(response?.data?.totalData))
                return response?.data?.departmentList
            }
        },

    })


    if (isPending) {
        return <Loader />
    }

    return (
        <div className='w-full px-6'>
            <div className='mb-4'>
                <DepartmentHeader />
            </div>
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

export default DepartmentList;
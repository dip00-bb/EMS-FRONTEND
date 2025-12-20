"use client"

import Loader from '@/app/Components/Loader/Loader';
import { axiosPrivate } from '@/app/utils/axiosPrivate';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Employee = () => {

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
        <div>

        </div>
    );
};

export default Employee;
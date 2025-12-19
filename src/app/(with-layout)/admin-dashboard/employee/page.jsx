"use client"

import { axiosPrivate } from '@/app/utils/axiosPrivate';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Employee = () => {

    const { isPending, error, data } = useQuery({
        queryKey: ["listOfDepartment"],
        queryFn: async () => {
            const response = await axiosPrivate.get('/api/department/get-department');

            console.log(response)
            if (response?.data?.success) {
                return response?.data?.departmentList
            }
        }
    })

    console.log(data)
    return (
        <div>
            
        </div>
    );
};

export default Employee;
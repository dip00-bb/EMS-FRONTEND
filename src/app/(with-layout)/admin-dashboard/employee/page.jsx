"use client"

import Loader from '@/app/Components/Loader/Loader';
import TableBody from '@/app/Components/Tables/TableBody';
import TableFooter from '@/app/Components/Tables/TableFooter';
import TableHead from '@/app/Components/Tables/TableHead';
import { axiosPrivate } from '@/app/utils/axiosPrivate';
import { useQuery } from '@tanstack/react-query';
import { CircleGauge } from 'lucide-react';
import React, { useState } from 'react';

const EmployeeList = () => {

    const [totalData, setTotalData] = useState(0)
    const [limit, setLimit] = useState(10);
    const [cuurentPage, setCurrentPage] = useState(1);


    const { isPending, error, data } = useQuery({
        queryKey: ["listOfDepartment", limit, cuurentPage],
        queryFn: async () => {
            const response = await axiosPrivate.get(`/api/department/get-department/?limit=${limit}&page=${cuurentPage}`);
            if (response?.data?.success) {
                setTotalData(response?.data?.totalData)
                return response?.data?.departmentList
            }
        },

    })


    if (isPending) {
        return <Loader />
    }

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
                <TableFooter setLimit={setLimit} totalData={totalData} limit={limit} setCurrentPage={setCurrentPage} cuurentPage={cuurentPage}/>
            </div>
        </div>
    );
};

export default EmployeeList;
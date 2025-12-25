"use client"

import { axiosPrivate } from '@/app/utils/axiosPrivate';
import { errorToast, sucessToast } from '@/lib/toastNotifaction';
import { useQuery } from '@tanstack/react-query';
import { useParams, usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Department = ({ title }) => {
    const pathname = usePathname()
    const {id} =useParams()

    const isEditPath = pathname === `/admin-dashboard/update-department/${id}`


    const router = useRouter()

    const [departmentInfo, setDepInfo] = useState({
        departmentName: "",
        departmentDescription: ""
    })


    const { isPending, data } = useQuery({
        queryKey: ["edit-department"],

        queryFn: async () => {
            const response = await axiosPrivate.get(`/api/department/department-details/${id}`);
            
            if (response?.data?.success) {
                setDepInfo({
                    departmentName:response.data.departmentDetails.departmentName,
                    departmentDescription:response.data.departmentDetails.departmentDescription,
                    
                })
                return response?.data?.departmentDetails
            }

        },
        enabled: !!isEditPath

    })


    const handleInfoChange = (event) => {
        const { name, value } = event.target
        setDepInfo((prev) => ({
            ...prev,
            [name]: value
        }))
    }


    const handleSubmit = async () => {
        const response = await axiosPrivate.post('/api/department/add-depertment', { departmentName: departmentInfo.departmentName, departmentDescription: departmentInfo.departmentDescription })
        if (response?.data?.success) {
            sucessToast(response?.data?.message)
            router.push('/admin-dashboard/department')
        } else {
            errorToast(response?.data?.message)
        }
    }



    return (

        <div className='max-w-3xl mx-auto w-96 mt-10 p-8 bg-white shadow rounded'>
            <header className='mb-4'>
                <h1 className='text-xl text-center text-(--primary-color) font-bold'>{title}</h1>
            </header>
            <div className='space-y-4 mb-4'>

                <div className='w-full'>
                    <h6 className='mb-2 font-semibold'>Department Name</h6>
                    <input onChange={handleInfoChange} value={departmentInfo.departmentName} id='dep-title' type="text" name="departmentName"

                        className='border w-full outline-0 px-3 py-2 rounded'
                        placeholder='Name of  Department'
                    />
                </div>

                <div className='w-full'>
                    <h6 className="dep-des mb-2 font-semibold">Description</h6>
                    <textarea onChange={handleInfoChange} value={departmentInfo.departmentDescription} id="dep-des" name='departmentDescription'
                        className='w-full border outline-0 px-3 py-2 rounded' placeholder='Description.....' rows={4}></textarea>
                </div>

            </div>

            <footer className='w-full flex justify-center'>
                <button onClick={handleSubmit} className={`bg-(--primary-color) w-full py-3 rounded cursor-pointer ${isPending && 'Submitting..'}`}>{title}</button>
            </footer>
        </div>

    );
};

export default Department;
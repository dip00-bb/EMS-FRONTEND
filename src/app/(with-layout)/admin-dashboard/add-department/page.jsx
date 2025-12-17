"use client"

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const AddDepartment = () => {
    const router=useRouter()
    const [departmentInfo,setDepInfo]=useState({
        departmentName:"",
        departmentDescription:""
    })
    


    const handleInfoChange=(event)=>{
        const {name,value}=event.target
        setDepInfo((prev)=>({
            ...prev,
            [name]:value
        }))
    }


    const handleSubmit= async ()=>{
        const response = await axios.post('/api/department/add',departmentInfo)
        if(response?.data?.success){
            router.push('/admin-dashboard/department')
        }else{
            alert("something went wrong")
        }
    }
    return (

        <div className='max-w-3xl mx-auto w-96 mt-10 p-8 bg-white shadow rounded'>
            <header className='mb-4'>
                <h1 className='text-xl text-center text-(--primary-color) font-bold'>Add New Department</h1>
            </header>
            <div className='space-y-4 mb-4'>

                <div className='w-full'>
                    <h6 className='mb-2 font-semibold'>Department Name</h6>
                    <input onChange={handleInfoChange} value={departmentInfo.departmentName} id='dep-title' type="text" name="departmentName"

                        className='border w-full outline-0 px-3 py-2 rounded'
                    />
                </div>

                <div className='w-full'>
                    <h6 className="dep-des mb-2 font-semibold">Description</h6>
                    <textarea onChange={handleInfoChange} value={departmentInfo.departmentDescription} id="dep-des" name='departmentDescription'
                        className='w-full border outline-0 px-3 py-2 rounded' rows={4}></textarea>
                </div>

            </div>

            <footer className='w-full flex justify-center'>
                <button onClick={handleSubmit} className='bg-(--primary-color) w-full py-3 rounded'>Add New Department</button>
            </footer>
        </div>

    );
};

export default AddDepartment;
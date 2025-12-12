"use client"
import { axiosPublic } from '@/app/utils/axiosPublice';
import Link from 'next/link';
import React, { useState } from 'react';

const Login = () => {

    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    })

    const handleSetLogintInfo = (e) => {
        const { name, value } = e.target
        setLoginInfo((prev)=>({
            ...prev,
            [name]:value
        }))
        
    } 

    const handleSubmit=(e)=>{
        e.preventDefault()
        try {
            const response=axiosPublic.post('/api/auth/login',loginInfo)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div
            className='flex flex-col items-center h-screen justify-center bg-linear-to-b from-(--primary-color) from-50% to-gray-100 to-50% space-y-6'
        >
            <h2 className='font-sevillna text-3xl text-white text-center pacifico-regular'>Employee Management System</h2>
            <div className='bg-white w-80 px-3 py-5 shadow'>
                <h2 className='text-2xl font-bold mb-4 text-center'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label htmlFor="email" className='block text-gray-700'>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={loginInfo.email}
                            placeholder='Enter Email'
                            className='w-full px-3 py-2 border border-gray-200'
                            onChange={handleSetLogintInfo}
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="password">Password</label>
                        <input
                            type="text"
                            placeholder='*************'
                            value={loginInfo.password}
                            className='w-full px-3 py-2 border border-gray-200'
                            name="password"
                            onChange={handleSetLogintInfo}
                        />
                    </div>
                    <div className='mb-4 flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id="remember-me" className='cursor-pointer' />
                            <label htmlFor="remember-me" className='cursor-pointer'>Remember Me</label>
                        </div>
                        <div>
                            <Link href={'/reset-password'} className='underline cursor-pointer text-(--primary-color)'>Forget Password</Link>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <button type='submit' className='bg-(--primary-color) w-full px-3 py-2 cursor-pointer'>Login</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Login;
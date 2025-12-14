import useAuth from '@/app/Hooks/useAuth'
import React from 'react'

export default function Navbar() {

    const { user } = useAuth()
    return (
        <div className='flex bg-(--primary-color) h-14 justify-between items-center px-5'>
            <p className='text-2xl'>Welcome {user.name}</p>
            <button className='btn text-white bg-(--neurtal-color) rounded px-4 py-1.5 cursor-pointer'>Logout</button>
        </div>
    )
}

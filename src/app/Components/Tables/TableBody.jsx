import Link from 'next/link';
import React from 'react';

const TableBody = ({ depName, depDes, id }) => {


    const handleNavigate=()=>{

    }

    return (

        <div className='grid grid-cols-3 border-b'>
            <div className='px-3 py-2.5 w-full flex justify-center'>
                <p>{depName}</p>
            </div>
            <div className='px-3 py-2.5 w-full flex justify-center border-l border-r'>
                <p>{depDes}</p>
            </div>

            <div className='px-3 py-2.5 w-full flex justify-center items-center space-x-3'>
                <Link href={`update-department/${id}`} className='bg-(--primary-color)  px-2 py-1.5 rounded cursor-pointer' >EDIT</Link>
                <span className='bg-red-500  px-2 py-1.5 rounded cursor-pointer' >DELETE</span>
            </div>

        </div>

    );
};

export default TableBody;
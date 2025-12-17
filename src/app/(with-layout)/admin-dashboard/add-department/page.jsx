import React from 'react';

const AddDepartment = () => {
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className='bg-white w-90 px-4 py-5 shadow rounded'>
                <header className='mb-4'>
                    <h1 className='text-xl text-center text-(--primary-color) font-bold'>Add New Department</h1>
                </header>
                <div className='space-y-4 mb-4'>

                    <div className='w-full'>
                        <h6 className='mb-2 font-semibold'>Department Name</h6>
                        <input id='dep-title' type="text" 
                            className='border w-full outline-0 px-3 py-2 rounded'
                        />
                    </div>

                    <div className='w-full'>
                        <h6 className="dep-des mb-2 font-semibold">Description</h6>
                        <textarea id="dep-des" 
                        className='w-full border outline-0 px-3 py-2 rounded' rows={4}></textarea>
                    </div>

                </div>

                <footer className='w-full flex justify-center'>
                    <button className='bg-(--primary-color) w-full py-3 rounded'>Add New Department</button>
                </footer>
            </div>
        </div>
    );
};

export default AddDepartment;
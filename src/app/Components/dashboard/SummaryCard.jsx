import React from 'react';

const SummaryCard = ({ icon, text, number }) => {
    return (
        <div className='flex rounded bg-gray-300 items-center'>
            <div className='bg-(--primary-color) h-full flex items-center justify-center px-4'>
                {icon}
            </div>

            <div className='pl-4 py-1'>
                <p className='text-lg font-semibold'>{text}</p>
                <p className='text-xl font-bold'>{number}</p>
            </div>
        </div>
    );
};

export default SummaryCard;
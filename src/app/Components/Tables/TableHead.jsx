import React from 'react';

const TableHead = (props) => {
    return (
        <div className='flex border w-full'>
            {Object.keys(props).map((key, index) => {

                return (
                    <div key={index} className={`px-3 py-2.5 w-full flex justify-center  ${index===1 && 'border-l border-r'}` }>
                        <p className='font-semibold'>{props[key]}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default TableHead;
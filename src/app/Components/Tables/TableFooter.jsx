import { StepBack, StepForward } from 'lucide-react';
import React from 'react';

const TableFooter = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (


        <div className='flex justify-between items-center py-2.5'>
            <div>
                <select name="" id="" className='cursor-pointer'>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                </select>
            </div>
            <div className={`flex space-x-1 items-center`}>
                <div className='cursor-pointer items-center'>
                    <StepBack />
                </div>
                {
                    arr.map((el) => (
                        <div key={el} className='text-xl px-3'>
                            {el}
                        </div>
                    ))
                }
                <div className='cursor-pointer items-center'>
                    <StepForward />
                </div>
            </div>
        </div>
    );
};

export default TableFooter;
import { setCurrentPage, setLimit, toogleDisableButton } from '@/lib/feature/pagination/paginationSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { StepBack, StepForward } from 'lucide-react';
import React from 'react';

const TableFooter = () => {
    const dispatch = useAppDispatch()

    const totalData = useAppSelector(state => state.pagination.totalData);

    const currentPage = useAppSelector(state => state.pagination.currentPage);

    const limit = useAppSelector(state => state.pagination.limit);






    const handleSetPageLimit = (e) => {
        dispatch(setLimit(parseInt(e.target.value)))
    }


    const handleSetCurrentPage = (currentPage) => {
        dispatch(setCurrentPage(currentPage))
    }


    const totalPage = Math.ceil(totalData / limit);
    const arr = [...Array(totalPage).keys()];


    const handleNextAndPrevious = (buttonType) => {
        if (buttonType === "next") {
            if (currentPage === arr.length) {
                return
            }
            handleSetCurrentPage(currentPage + 1)



        } else if (buttonType === "prev") {
            if (currentPage == 1) {
                return
            }
            handleSetCurrentPage(currentPage - 1)
        } else {
            return
        }
    }

    return (
        <div className='flex justify-between items-center py-2.5'>
            <div>
                <select onChange={(e) => handleSetPageLimit(e)} className='cursor-pointer'>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                </select>
            </div>
            <div className={`flex space-x-1 items-center`}>
                <div onClick={() => handleNextAndPrevious("prev")} className={`cursor-pointer items-center`}>
                    <StepBack />
                </div>
                {
                    arr.map((el) => (
                        <div onClick={() => handleSetCurrentPage(el + 1)} key={el} className={`text-xl px-3 ${el + 1 == currentPage && 'bg-blue-400'} rounded cursor-pointer`}>
                            {el + 1}
                        </div>
                    ))
                }
                <div onClick={() => handleNextAndPrevious("next")} className={`cursor-pointer items-center`}>
                    <StepForward />
                </div>
            </div>
        </div>
    );
};

export default TableFooter;
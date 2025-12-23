
import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./initalState"

const paginationSlice = createSlice({
    name:"pagination",
    initialState,
    reducers:{
        setTotalData:(state,action)=>{
            state.totalData=action.payload
        },
        setLimit:(state,action)=>{
            state.limit=action.payload
        },
        setCurrentPage:(state,action)=>{
            state.currentPage=action.payload
        }
    }
}) 

export const {setTotalData,setLimit,setCurrentPage}=paginationSlice.actions;
export default paginationSlice.reducer
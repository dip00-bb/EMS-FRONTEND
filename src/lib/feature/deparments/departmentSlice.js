import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchDepartmentApi } from "./depermentsApi";
const initialState = {
    departments: [],
    isPending: false,
    isError: false,
    error: ""
}

export const fetchAsyncDepartments = createAsyncThunk(
    'department/fetchDepartment', async (limit, currentPage) => {
        const data = await fetchDepartmentApi(limit,currentPage);
        return data
    })



const departmentSlice = createSlice({
    name: "department",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncDepartments.pending, (state)=>{
                state.isPending=true
            })

            .addCase(fetchAsyncDepartments.fulfilled,(state,action)=>{
                state.isPending=false,
                state.departments=action.payload?.departmentList
            })

            .addCase(fetchAsyncDepartments.rejected,(state,action)=>{
                state.isPending=false,
                state.isError=true,
                state.error=action.payload.message
                state.departments=[]
            })
    }
}) 

export default departmentSlice.reducer
import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "./feature/pagination/paginationSlice"
import departmentReducer from './feature/deparments/departmentSlice'
const store=configureStore({
    reducer:{
        pagination:paginationReducer,
        department:departmentReducer,
    }
});

export default store
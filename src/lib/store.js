import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "./feature/pagination/paginationSlice"
const store=configureStore({
    reducer:{
        pagination:paginationReducer
    }
});

export default store
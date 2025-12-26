const { axiosPrivate } = require("@/app/utils/axiosPrivate")

export const fetchDepartmentApi=async(limit,currentPage)=>{
    const response=await axiosPrivate.get(`/api/department/get-department/?limit=${limit}&page=${currentPage}`);
    return response.data
}
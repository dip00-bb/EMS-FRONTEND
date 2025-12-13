import axios from "axios";

export const axiosPrivate = axios.create({
    baseURL: 'http://localhost:5000/',
    withCredentials: true
});
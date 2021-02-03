import axios from "axios";

export const setAxiosHeaders = () =>{

    const token = localStorage.getItem('token');

    if (token){
        axios.defaults.headers.common.Authorization = token;
    } else {
        delete axios.defaults.headers.common.Authorization;
    }

}
import axios from 'axios'

const axiosInstance  = axios.create({
    baseURL : 'http://35.225.43.56:3000/api/v1/',
    headers:{
        "Content-Type":'application/json'
    },
});

export default axiosInstance
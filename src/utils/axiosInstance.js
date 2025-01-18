import axios from 'axios'

const axiosInstance  = axios.create({
    baseURL : 'http://34.60.67.227:3000/api/v1/',
    // timeout: 10000,
    headers:{
        "Content-Type":'application/json'
    },
});

export default axiosInstance
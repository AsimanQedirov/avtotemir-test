import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export const URL = "https://test-api.avtotemir.az/"

export const axiosInstance = axios.create({
    baseURL : URL,
    withCredentials : true,
});

axiosInstance.interceptors.request.use( (config)=> {
    // Do something before request is sent

    console.log(config)
    config['headers']['Access-Control-Allow-Origin'] = "*"

    return config;
},  (error)=> {
    // Do something with request error
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use((response)=>{
    return response
} , (error)=>{

})
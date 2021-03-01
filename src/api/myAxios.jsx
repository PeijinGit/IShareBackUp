import axios from 'axios'
import store from "../redux/store";
import { message } from "antd";
import { createDeleteUserInfoAction } from "../redux/action_creators/login_action";
//import qs from 'querystring'

const instance = axios.create({
    timeout: 20000,
})

//request interceptors
instance.interceptors.request.use(function (config) {
    const {token} = store.getState().userInfo.user
    if(token) config.headers.Authorization = token
    const {method,data} = config
    return config;
});

//response interceptors
instance.interceptors.response.use(
    (response)=>{
        return response.data;
    },
    (error)=>{
        console.log("test enter1")
        if(error.response.status === 401){
            message.error(error.message,1)
            store.dispatch(createDeleteUserInfoAction())
        }
        return new Promise(()=>{})
    }
);


export default instance
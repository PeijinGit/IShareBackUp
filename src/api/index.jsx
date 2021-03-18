import axios from 'axios'
import {baseurl} from "../config";
import myAxios from './myAxios'
import qs from 'querystring'

export const testApi = (controllerName) => {
 return axios.post(`api.openweathermap.org/data/2.5/weather?q=New York&appid=87c807a7e5cf7c44eced223eb4dde619`)
}

export const RegisterUser = (user, controllerName) => {
    return axios.post(baseurl+`User/${controllerName}`, user)
}

export const getEventsByUser = (id, controllerName) => {
    console.log("request success: "+ id);
    return myAxios.get(baseurl+`Events/${controllerName}`, 
    {
        params:{
            id:id
        } 
    })
}

export const getAllActivities = () => {
    return myAxios.get(baseurl+`Events/GetAllAc`)
}

export const getACbyPage = (startPage,pageSize) => {
    return myAxios.get(baseurl+`Events/ListActivitiesByPage`,{params:{startPage,pageSize}})
}


export const addEvent = (values) => {
    
    return myAxios.post(baseurl+`Events/AddEvent`, values)
}

export const updateAcStatus = (id,newStatus) => {
    console.log("id,acStatus",id,newStatus);
    return myAxios.post(baseurl + `Events/UpdateAcStatus`, qs.stringify({id,newStatus})).then((res) => {
        console.log(res);
        if (res.status === -1) {
        
        } else {
            return res.status;
        }
        return "test test";
    })
        .catch(function (error) {
            console.log(error);
        });
}

export const getACbySearch = (startPage,pageSize,keyWord,condition) => {
    return myAxios.get(baseurl+`Events/SearchAC`,{params:{startPage,pageSize,keyWord,condition}})
}

export const updateEvent = (values) => {
    console.log("API",values)
    return myAxios.post(baseurl+`Events/UpdateEvent`, values)
}




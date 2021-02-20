import axios from 'axios'
import {baseurl} from "../config";

export const testApi = (controllerName) => {
    console.log("enter tests");
 return axios.post(`api.openweathermap.org/data/2.5/weather?q=New York&appid=87c807a7e5cf7c44eced223eb4dde619`)
}

export const RegisterUser = (user, controllerName) => {
    console.log("register success"+ user);
    return axios.post(baseurl+`User/${controllerName}`, user)
}


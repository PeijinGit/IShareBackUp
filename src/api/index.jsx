import axios from 'axios'
import {baseurl} from "../config";

export const testApi = (controllerName) => {
    console.log("enter tests");
 return axios.post(baseurl+`Events/${controllerName}`)
}

export const RegisterUser = (user, controllerName) => {
    console.log("register success"+ user);
    return axios.post(baseurl+`User/${controllerName}`, user)
}


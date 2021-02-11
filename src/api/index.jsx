import axios from 'axios'
import {baseurl} from "../config";

export const testApi = (controllerName) => {
    console.log("enter tests");
 return axios.post(baseurl+`Events/${controllerName}`)
        // .then((res) => {
        //     if (res.status === 401) {
        //         alert(res.data)
        //     } else if (res.status === 200) {
        //         alert("success")
        //         console.log(res.data);
        //         localStorage["ishareToken"] = res.data.id

        //         history.push({
        //             pathname: 'admin'
        //         })
        //     }
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
}

export const RegisterUser = (user, controllerName) => {
    console.log("register success"+ user);
    return axios.post(baseurl+`User/${controllerName}`, user)
        
}


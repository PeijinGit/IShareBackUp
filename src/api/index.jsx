import axios from 'axios'

export const validLogin = (name, pwd, history, controllerName) => {
    axios.post(`https://ishareapi.azurewebsites.net/User/${controllerName}`, {
        Username: name,
        Password: pwd
    })
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

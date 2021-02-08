import { SAVE_USERINFO } from "../action_types";

//let user = JSON.parse(localStorage.getItem('user'))
let user = ''
let initState = {
    user: user || '',
    isLogin: user? true :false
}

export default function loginAc(preState = initState,action) {
    const {type,data} = action
    let newState
    switch(type){
        case SAVE_USERINFO:
            newState = {user:data.user,isLogin:true}
            return newState
        default:
            return preState
    }
}
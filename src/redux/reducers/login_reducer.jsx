import { SAVE_USERINFO,DELETE_USERINFO } from "../action_types";
let user = '';
try {
    user = JSON.parse(localStorage.getItem('user'))
} catch (err) {
    console.log("No user info!!!!");
    user = '';
}

//let user = ''
let initState = {
    user: user || '',
    isLogin: user ? true : false
}

export default function loginAc(preState = initState, action) {
    //console.log("parse: "+JSON.parse(localStorage.getItem('user')).id)
    const { type, data } = action
    let newState
    switch (type) {
        case SAVE_USERINFO:
            newState = { user: data.user, isLogin: true }
            return newState
        case DELETE_USERINFO:
            newState = { user: '', isLogin: false }
            return newState
        default:
            return preState
    }
}
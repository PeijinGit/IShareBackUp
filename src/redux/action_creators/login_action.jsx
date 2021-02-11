import { SAVE_USERINFO } from "../action_types";
import {DELETE_USERINFO} from "../action_types";

export const createSaveUserInfoAction = (value) => {
    console.log("stringify: "+JSON.stringify(value.user))
    localStorage.setItem('user',JSON.stringify(value.user))

    return { type: SAVE_USERINFO, data: value }
}

export const createDeleteUserInfoAction = () => {
    localStorage.removeItem('user')


    return { type: DELETE_USERINFO}
}

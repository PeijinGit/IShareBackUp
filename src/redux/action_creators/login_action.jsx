import { SAVE_USERINFO } from "../action_types";

export const createSaveUserInfoAction = (value) => {
    localStorage.setItem('user',JSON.stringify(value.user))
    return { type: SAVE_USERINFO, data: value }
}


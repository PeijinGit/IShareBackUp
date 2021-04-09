import { SAVE_PROD_LIST } from "../action_types";


let initState = []

export default function acRelate(preState = initState, action) {
    const { type, data } = action
    let newState
    switch (type) {
        case SAVE_PROD_LIST:
            console.log("acRelate",data);
            newState = data
            return newState
        default:
            return preState
    }
}
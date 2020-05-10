import {FETCH_LIST_PRODUCT,
    SET_LIST_PRODUCT} from './../constants/ActionTypes';
export const ACTION_FETCH_LIST_PRODUCT = ()=>{
    return {
        type:FETCH_LIST_PRODUCT,
        payload:null
    }
}
export const ACTION_SET_LIST_PRODUCT= (data)=>{
    return {
        type:SET_LIST_PRODUCT,
        payload:data
    }
}

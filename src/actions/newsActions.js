import {FETCH_LIST_NEWS,
    SET_LIST_NEWS} from './../constants/ActionTypes';
    export const ACTION_FETCH_LIST_NEWS = ()=>{
        return {
            type:FETCH_LIST_NEWS,
            payload:null
        }
    }
    export const ACTION_SET_LIST_NEWS= (data)=>{
        return {
            type:SET_LIST_NEWS,
            payload:data
        }
    }
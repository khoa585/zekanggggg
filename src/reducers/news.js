import {SET_LIST_NEWS} from './../constants/ActionTypes';
let initalNews = {
    page:1,
    numberpage:1,
    listnews: [
        
    ]
};
const newsReducers = (state=initalNews,action)=>{
    switch (action.type) {
        case SET_LIST_NEWS :
            return {...state,listnews:[...action.payload]}
        default:
            return state
            break;
    }
}
export default newsReducers ;
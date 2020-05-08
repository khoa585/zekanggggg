import {SET_LIST_PRODUCT} from './../constants/ActionTypes';
const initialSate= {
    page:1,
    numberpage:1,
    listproducts: [
    
    ]
}
const reducersProducts = (state=initialSate,action) => {
    switch (action.type) {
        case SET_LIST_PRODUCT:
            return {...state,listproducts:[...action.payload]}
        default:
            return state ;
            break
    }
}
export default reducersProducts ;
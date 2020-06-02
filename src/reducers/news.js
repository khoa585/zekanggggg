import {
    SET_LIST_NEWS,
    SHOW_BUTTON_DETAIL,
    HIDDEN_BUTTON_DETAIL,
    DELETE_NEWS,
    DELETE_NEWS_SUCCESS,
    DELETE_NEWS_FAIL
} from './../constants/ActionTypes';
import {toast} from 'react-toastify';
let initalNews = {
    page:1,
    numberpage:1,
    listnews: [],
    showButton : true
};
const newsReducers = (state=initalNews,action)=>{
    switch (action.type) {
        case SET_LIST_NEWS :
            if(action.payload.length != 0){
                return {...state,
                    page : state.page +1,
                    listnews: state.listnews.concat(action.payload),
                }
            }else{
                return {...state,
                    showButton : false
                }
            }
        case SHOW_BUTTON_DETAIL :
            return {
                ...state,
                showButton : true
            }
        case HIDDEN_BUTTON_DETAIL : {
            return {
                ...state,
                showButton : false
            }
        }
        case DELETE_NEWS :
            return {
                ...state
            }
        case DELETE_NEWS_SUCCESS : {
            toast.success("Xóa Thành Công Tin Tức");
            return {
                ...state,
            }
        }
        case DELETE_NEWS_FAIL : {
            toast.error("Có Lỗi Xảy Ra Khi Xóa");
            return {
                ...state,
            }
        }
        default:
            return state;
    }
}
export default newsReducers ;
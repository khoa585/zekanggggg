import {
    FETCH_LIST_NEWS,
    SET_LIST_NEWS,
    SHOW_BUTTON_DETAIL,
    HIDDEN_BUTTON_DETAIL,
    DELETE_NEWS,
    DELETE_NEWS_SUCCESS,
    DELETE_NEWS_FAIL
} from './../constants/ActionTypes';
export const ACTION_FETCH_LIST_NEWS = () => {
    return {
        type: FETCH_LIST_NEWS,
        payload: null
    }
}
export const ACTION_SET_LIST_NEWS = (data) => {
    return {
        type: SET_LIST_NEWS,
        payload: data
    }
}
export const ACTION_SHOW_BUTTON = () => {
    return {
        type: SHOW_BUTTON_DETAIL
    }
}
export const ACTION_HIDDEN_BUTTON = () => {
    return {
        type: HIDDEN_BUTTON_DETAIL
    }
}

export const ACTION_DELETE_NEWS = (id) => {
    return {
        type: DELETE_NEWS,
        payload: {
            id
        }
    }
}
export const ACTION_DELETE_NEWS_SUCCESS = data => {
    return {
        type: DELETE_NEWS_SUCCESS,
        payload: {
            data
        }
    }
}
export const ACTION_DELETE_NEWS_FAIL = errors => {
    return {
        type: DELETE_NEWS_FAIL,
        payload: {
            errors
        }
    }
}
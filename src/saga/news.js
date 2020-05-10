import {takeEvery , select , call  ,fork ,put,all} from 'redux-saga/effects';
import {FETCH_LIST_NEWS} from '../constants/ActionTypes';
import {fetchListNews} from './../api/news';
import {ACTION_SET_LIST_NEWS} from './../actions/newsActions';
function* watchFetchListNews(){
    yield takeEvery(FETCH_LIST_NEWS,FetchListNews);
}
function*FetchListNews(){
    const page  = yield select(state=>state.news.page);
    const datafetch = yield call(fetchListNews,page);
    if(datafetch?.data?.status=="success"){
        yield put(ACTION_SET_LIST_NEWS(datafetch.data.data));
     }
}
export default function * news(){
    yield all([
        watchFetchListNews()
    ])
}
import {takeEvery , select , call  ,fork ,put,all} from 'redux-saga/effects';
import {FETCH_LIST_PRODUCT} from '../constants/ActionTypes';
import {fetchListProduct} from './../api/products';
import {ACTION_SET_LIST_PRODUCT} from './../actions/productsAction';
function* watchFetchListProduct(){
    yield takeEvery(FETCH_LIST_PRODUCT,FetchListProduct);
}
function* FetchListProduct(){
    const page  = yield select(state=>state.products.page);
    const datafetch = yield call(fetchListProduct,page);
    if(datafetch?.data?.status=="success"){
       yield put(ACTION_SET_LIST_PRODUCT(datafetch.data.data));
    }
}
export default function * product(){
    yield all([
        watchFetchListProduct()
    ])
}
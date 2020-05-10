import { takeEvery, select, call, fork, put, all } from 'redux-saga/effects';
import * as type from '../constants/ActionTypes';
import { fetchListProduct, fetchDeleteProduct } from './../api/products';
import { ACTION_SET_LIST_PRODUCT, ACTION_DELETE_PRODUCT_SUCCESS, ACTION_DELETE_PRODUCT_FAIL } from './../actions/productsAction';
function* watchFetchListProduct() {
    yield takeEvery(type.FETCH_LIST_PRODUCT, FetchListProduct);
}
function* FetchListProduct() {
    const page = yield select(state => state.products.page);
    const datafetch = yield call(fetchListProduct, page);
    if (datafetch?.data?.status == "success") {
        yield put(ACTION_SET_LIST_PRODUCT(datafetch.data.data));
    }
}
function* watchDeleteProduct() {
    yield takeEvery(type.DELETE_PRODUCT, DeleteProduct)
}
function* DeleteProduct({ payload }) {
    let { id } = payload;
    if (id != null) {
        try {
            let resp = yield call(fetchDeleteProduct, id)
            let { data, status } = resp
            if (status == 200 && data?.status == "success") {
                yield call(FetchListProduct)
                yield put(ACTION_DELETE_PRODUCT_SUCCESS({ id }))
            } else {
                yield put(ACTION_DELETE_PRODUCT_FAIL({ data }))
            }
        } catch (errors) {
            yield put(ACTION_DELETE_PRODUCT_FAIL(errors))
        }
    } else {
        yield put(ACTION_DELETE_PRODUCT_FAIL('Id không tồn tại'))
    }
}
export default function* product() {
    yield all([
        watchFetchListProduct(), watchDeleteProduct()
    ])
}
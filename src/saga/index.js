import {all} from 'redux-saga/effects';
import ProductsSaga from './products';
import NewsSaga from './news';
function* hello(){
    yield console.log("Xin Chào");
}

 export default function * index(){
    yield all([
        hello(),
        ProductsSaga(),
        NewsSaga()
    ])
}
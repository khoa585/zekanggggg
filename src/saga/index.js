import {all} from 'redux-saga/effects';
import ProductsSaga from './products';
function* hello(){
    yield console.log("Xin Chào");
}

 export default function * index(){
    yield all([
        hello(),
        ProductsSaga()
    ])
}
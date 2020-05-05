import {all} from 'redux-saga/effects';
function* hello(){
    yield console.log("Xin Chào");
}

 export default function * index(){
    yield all([
        hello()
    ])
}
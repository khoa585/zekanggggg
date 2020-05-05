import {combineReducers} from 'redux';
import newsReducers from './news';
const reducers = combineReducers({
    news:newsReducers
})
export default reducers ;
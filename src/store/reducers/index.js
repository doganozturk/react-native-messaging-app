import { combineReducers } from 'redux';
import helloReducer from '@/store/reducers/helloReducer';

export default combineReducers({
    hello: helloReducer,
});

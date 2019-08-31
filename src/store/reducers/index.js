import { combineReducers } from 'redux';
import authReducer from '@/store/reducers/authReducer';

export default combineReducers({
    auth: authReducer,
});

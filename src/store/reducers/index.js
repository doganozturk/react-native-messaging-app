import { combineReducers } from 'redux';
import authReducer from '@/store/reducers/authReducer';
import messageReducer from '@/store/reducers/messageReducer';

export default combineReducers({
    auth: authReducer,
    messages: messageReducer,
});

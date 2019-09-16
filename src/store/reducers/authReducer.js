import { LOGIN, LOGOUT } from '@/store/actions/types';

const INITIAL_STATE = {
    name: '',
    userId: '',
};

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                name: action.payload.name,
                userId: action.payload.userId,
            };
        case LOGOUT:
            return {
                name: '',
                userId: '',
            };
        default:
            return state;
    }
};

export default authReducer;

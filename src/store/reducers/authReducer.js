import { LOGIN, LOGOUT } from '@/store/actions/types';

const INITIAL_STATE = {
    name: '',
    userId: '',
};

const authReducer = (state = INITIAL_STATE, { type, payload: { name, userId } = {} }) => {
    switch (type) {
        case LOGIN:
            return {
                name,
                userId,
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

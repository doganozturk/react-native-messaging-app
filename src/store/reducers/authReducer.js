import { LOGIN } from '@/store/actions/types';

const INITIAL_STATE = {
    name: '',
    deviceId: '',
};

const authReducer = (state = INITIAL_STATE, { type, payload: { name, deviceId } = {} }) => {
    switch (type) {
        case LOGIN:
            return {
                ...state,
                name,
                deviceId,
            };
        default:
            return state;
    }
};

export default authReducer;

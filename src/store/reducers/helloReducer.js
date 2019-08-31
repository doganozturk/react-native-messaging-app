import { SET_NAME } from '@/store/actions/types';

const INITIAL_STATE = {
    name: null,
};

const helloReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_NAME:
            return {
                ...state,
                name: action.payload,
            };
        default:
            return state;
    }
};

export default helloReducer;

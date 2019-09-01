import { FETCH_MESSAGES } from '@/store/actions/types';

const INITIAL_STATE = {
    messages: [],
};

const messageReducer = (state = INITIAL_STATE, { type, payload: { messages } = {} }) => {
    switch (type) {
        case FETCH_MESSAGES:
            return {
                messages,
            };
        default:
            return state;
    }
};

export default messageReducer;

import { FETCH_MESSAGES, POST_MESSAGE } from '@/store/actions/types';

const INITIAL_STATE = {
    messages: [],
};

const messageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_MESSAGES:
            return {
                messages: action.payload.messages.map(message => ({
                    ...message,
                    user: { ...message.user, id: message.user.id.toString() },
                })),
            };
        case POST_MESSAGE:
            return {
                messages: [
                    ...state.messages,
                    {
                        ...action.payload.message,
                        id: state.messages[state.messages.length - 1].id + 1,
                    },
                ],
            };
        default:
            return state;
    }
};

export default messageReducer;

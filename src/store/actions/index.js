import { SET_NAME } from '@/store/actions/types';

// eslint-disable-next-line import/prefer-default-export
export const setName = name => {
    return {
        type: SET_NAME,
        payload: name,
    };
};

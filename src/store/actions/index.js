import { LOGIN } from '@/store/actions/types';

// eslint-disable-next-line import/prefer-default-export
export const login = (name, deviceId) => {
    return {
        type: LOGIN,
        payload: {
            name,
            deviceId,
        },
    };
};

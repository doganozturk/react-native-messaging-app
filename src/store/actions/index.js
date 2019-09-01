import AsyncStorage from '@react-native-community/async-storage';
import { db } from '@/firebase.config';
import { LOGIN, LOGOUT } from '@/store/actions/types';
import navigationService from '@/services/navigationService';

const setUser = (name, userId) => ({
    type: LOGIN,
    payload: {
        name,
        userId,
    },
});

const resetUser = () => ({
    type: LOGOUT,
});

export const login = (name, deviceId) => {
    return async dispatch => {
        try {
            const response = await db.collection('users').add({
                name,
                deviceId,
            });

            if (response && response.id) {
                await AsyncStorage.setItem('userId', response.id);
                return dispatch(setUser(name, response.id));
            }

            return dispatch(resetUser());
        } catch {
            return dispatch(resetUser());
        }
    };
};

export const checkLogin = (userId, deviceId) => {
    return async dispatch => {
        try {
            const snapshot = await db
                .collection('users')
                .doc(userId)
                .get();
            const data = snapshot.data();

            if (data.deviceId === deviceId) {
                navigationService.navigate('Chat', { name: data.name, userId });

                return dispatch(setUser(data.name, userId));
            }

            return dispatch(resetUser());
        } catch {
            return dispatch(resetUser());
        }
    };
};

export const logout = userId => {
    return async dispatch => {
        await db
            .collection('users')
            .doc(userId)
            .delete();

        await AsyncStorage.removeItem('userId');

        return dispatch(resetUser());
    };
};

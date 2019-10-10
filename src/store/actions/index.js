import AsyncStorage from '@react-native-community/async-storage';
import { db } from '@/firebase.config';
import { LOGIN, LOGOUT, FETCH_MESSAGES, POST_MESSAGE } from '@/store/actions/types';
import navigationService from '@/services/NavigationService';

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

const setMessages = messages => ({
    type: FETCH_MESSAGES,
    payload: {
        messages,
    },
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

            return null;
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

            return null;
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

export const fetchMessages = () => {
    return async dispatch => {
        const response = await fetch(
            'https://jsonblob.com/api/jsonBlob/5eaa632d-d887-11e9-9ec2-6ba2d03581bf',
        );
        const data = await response.json();

        return dispatch(setMessages(data));
    };
};

export const postMessage = (message, userId, userName) => {
    return {
        type: POST_MESSAGE,
        payload: {
            message: {
                user: {
                    id: userId,
                    name: userName,
                    avatarUrl:
                        'https://m5iukwhkpm2xn85r44dml0ld-wpengine.netdna-ssl.com/wp-content/uploads/2018/07/%C5%9Fener-%C5%9Fennnn-770x513.jpg',
                },
                text: message,
                timestamp: new Date().getTime(),
            },
        },
    };
};

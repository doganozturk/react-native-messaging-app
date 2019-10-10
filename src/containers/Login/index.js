import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from 'react-navigation-hooks';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-community/async-storage';
import { colors } from '@/theming';
import { MAButton, MATextInput } from '@/components';
import { login, checkLogin } from '@/store/actions';

const ERROR_MESSAGE = 'Provide a name longer than 2 characters!';

const Login = () => {
    const [name, setName] = useState('');
    const [touched, setTouched] = useState(false);
    const [error, setError] = useState('');
    const { navigate } = useNavigation();
    const dispatch = useDispatch();

    useEffect(() => {
        const checkUserLogin = async () => {
            const userId = await AsyncStorage.getItem('userId');

            dispatch(checkLogin(userId, DeviceInfo.getUniqueID()));
        };

        checkUserLogin();
    }, []);

    const onNameChange = text => {
        setName(text);

        if (touched) {
            setError(text.length > 2 ? '' : ERROR_MESSAGE);
        }
    };

    const onButtonPress = () => {
        if (!touched) {
            setTouched(true);
        }

        setError(name.length <= 2 ? ERROR_MESSAGE : '');

        if (name.length > 2) {
            dispatch(login(name, DeviceInfo.getUniqueID()));
            navigate('Chat', { name });
        }
    };

    return (
        <LinearGradient colors={colors.mainGradientColor} style={styles.container}>
            <Text style={styles.welcomeText}>Glad to see you!</Text>
            <View style={styles.formContainer}>
                <MATextInput
                    placeholder="Enter your name..."
                    value={name}
                    onChangeText={onNameChange}
                    error={error}
                />
                <View style={styles.buttonWrapper}>
                    <MAButton text="JOIN" onButtonPress={onButtonPress} error={error} />
                </View>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
    },
    welcomeText: {
        fontSize: 36,
        fontWeight: '500',
        color: colors.lightgray,
    },
    formContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        height: 'auto',
        marginTop: 30,
        padding: 20,
        borderRadius: 6,
        backgroundColor: colors.white,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,
    },
    buttonWrapper: {
        width: '100%',
        marginTop: 20,
    },
});

export default Login;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from 'react-navigation-hooks';
import { colors } from '@/theming';
import { MAButton, MATextInput } from '@/components';
import { login } from '@/store/actions';

const ERROR_MESSAGE = 'Provide a name longer than 2 characters!';

export default function Login() {
    const [name, setName] = useState('');
    const [touched, setTouched] = useState(false);
    const [error, setError] = useState('');
    const { navigate } = useNavigation();
    const dispatch = useDispatch();

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
            dispatch(login(name, '234234234'));
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
                <MAButton text="JOIN" onButtonPress={onButtonPress} error={error} />
            </View>
        </LinearGradient>
    );
}

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
});

import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors, sizings } from '@/theming';

const ERROR_MESSAGE = 'Provide a name longer than 2 characters!';

export default function Login() {
    const [name, setName] = useState('');
    const [touched, setTouched] = useState(false);
    const [error, setError] = useState('');

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

        /* eslint-disable-next-line */
        console.log(name);
    };

    const renderError = () => {
        if (!error) {
            return null;
        }

        return <Text style={styles.errorText}>{error}</Text>;
    };

    return (
        <LinearGradient colors={colors.mainGradientColor} style={styles.container}>
            <Text style={styles.welcomeText}>Glad to see you!</Text>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.nameInput}
                    placeholder="Enter your name..."
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={name}
                    onChangeText={onNameChange}
                />
                {renderError()}
                <TouchableOpacity
                    style={sizings.fullWidth}
                    onPress={onButtonPress}
                    disabled={!!error}
                >
                    <LinearGradient
                        colors={colors.mainGradientColor}
                        style={[styles.loginButton, error ? styles.loginButtonError : null]}
                    >
                        <Text style={styles.loginButtonText}>JOIN</Text>
                    </LinearGradient>
                </TouchableOpacity>
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
    nameInput: {
        width: '100%',
        height: 45,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth: 3,
        borderRadius: 5,
        borderColor: colors.lightgray,
        borderStyle: 'solid',
    },
    loginButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 45,
        marginTop: 20,
        borderRadius: 5,
    },
    loginButtonError: {
        opacity: 0.5,
    },
    loginButtonText: {
        fontSize: 20,
        fontWeight: '600',
        color: colors.lightgray,
    },
    errorText: {
        width: '100%',
        marginTop: 5,
        fontSize: 12,
        color: colors.pink,
    },
});

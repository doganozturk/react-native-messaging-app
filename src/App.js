import React from 'react';
import { Provider } from 'react-redux';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import store from '@/store';

export default function App() {
    return (
        <Provider store={store({})}>
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
                <View style={styles.formContainer}>
                    <TextInput style={styles.nameInput} />
                    <View style={styles.loginButton}>
                        <Text>JOIN</Text>
                    </View>
                </View>
            </LinearGradient>
        </Provider>
    );
}

const colors = {
    white: '#fff',
    black: '#000',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
    },
    formContainer: {
        width: '80%',
        height: 300,
        padding: 20,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: colors.black,
        borderStyle: 'solid',
    },
    nameInput: {
        width: '100%',
        height: 40,
        borderWidth: 3,
        borderRadius: 4,
        borderColor: colors.black,
        borderStyle: 'solid',
    },
    loginButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 40,
        marginTop: 20,
        borderWidth: 3,
        borderRadius: 4,
        borderColor: colors.black,
        borderStyle: 'solid',
        backgroundColor: colors.white,
    },
});

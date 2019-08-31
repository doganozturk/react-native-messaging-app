import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '@/theming';

export default function Login() {
    return (
        <LinearGradient colors={colors.mainGradientColor} style={styles.container}>
            <Text style={styles.welcomeText}>Glad to see you!</Text>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.nameInput}
                    placeholder="Enter your name..."
                    autoCorrect={false}
                    autoCapitalize="none"
                />
                <LinearGradient colors={colors.mainGradientColor} style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>JOIN</Text>
                </LinearGradient>
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
        justifyContent: 'center',
        width: '80%',
        height: 150,
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
    loginButtonText: {
        fontSize: 20,
        fontWeight: '600',
        color: colors.lightgray,
    },
});

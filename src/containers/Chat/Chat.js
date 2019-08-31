import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '@/theming';

export default function Chat() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Chat container!!!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    text: {
        fontSize: 20,
        color: colors.black,
    },
});

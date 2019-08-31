import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { colors } from '@/theming';

export default function Chat() {
    // eslint-disable-next-line
    const name = useSelector(state => {
        // eslint-disable-next-line
        console.log(state);
        return state.auth.name;
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Chat Container</Text>
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

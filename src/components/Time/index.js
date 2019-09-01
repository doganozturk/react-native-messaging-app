import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors } from '@/theming';

function pad(num) {
    // eslint-disable-next-line
    return ('0' + num).slice(-2);
}

function getTimeFromDate(timestamp) {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return pad(hours) + ':' + pad(minutes);
}

export function Time({ timestamp, style }) {
    return <Text style={[styles.time, style]}>{getTimeFromDate(timestamp)}</Text>;
}

const styles = StyleSheet.create({
    time: {
        fontSize: 10,
        color: colors.pink,
    },
});

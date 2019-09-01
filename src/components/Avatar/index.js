import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { colors } from '@/theming/colors';

export function Avatar({ src, style }) {
    return <Image style={[styles.image, style]} source={{ uri: src }} />;
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 3,
        borderColor: colors.lavender,
    },
});

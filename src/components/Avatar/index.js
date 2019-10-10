import React from 'react';
import { Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '@/theming';

const Avatar = ({ src, style }) => {
    return <Image style={[styles.image, style]} source={{ uri: src }} />;
};

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    style: Image.propTypes.style,
};

Avatar.defaultProps = {
    style: {},
};

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 3,
        borderColor: colors.lavender,
    },
});

export { Avatar };

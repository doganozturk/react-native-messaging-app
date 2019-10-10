import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { colors, sizings } from '@/theming';

const MAButton = ({ text, onButtonPress, error, disabled }) => {
    return (
        <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={onButtonPress}
            disabled={!!error || disabled}
        >
            <LinearGradient
                colors={colors.mainGradientColor}
                style={[styles.button, error || disabled ? styles.buttonError : null]}
            >
                <Text style={styles.buttonText}>{text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

MAButton.propTypes = {
    text: PropTypes.string.isRequired,
    onButtonPress: PropTypes.func.isRequired,
    error: PropTypes.string,
    disabled: PropTypes.bool,
};

MAButton.defaultProps = {
    error: '',
    disabled: false,
};

const styles = StyleSheet.create({
    buttonWrapper: {
        ...sizings.fullWidth,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        borderRadius: 5,
    },
    buttonError: {
        opacity: 0.5,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '600',
        color: colors.lightgray,
    },
});

export { MAButton };

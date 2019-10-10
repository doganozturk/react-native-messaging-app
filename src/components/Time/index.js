import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '@/theming';
import { getTimeFromDate } from '@/util';

const Time = ({ timestamp, style }) => {
    return <Text style={[styles.time, style]}>{getTimeFromDate(timestamp)}</Text>;
};

Time.propTypes = {
    timestamp: PropTypes.number.isRequired,
    style: Text.propTypes.style,
};

Time.defaultProps = {
    style: {},
};

const styles = StyleSheet.create({
    time: {
        fontSize: 10,
        color: colors.pink,
    },
});

export { Time };

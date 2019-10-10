import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import { colors } from '@/theming';
import { Avatar } from '@/components/Avatar';
import { Time } from '@/components/Time';

const MessageListItem = ({ message }) => {
    const userId = useSelector(state => state.auth.userId);
    const isUserMessage = message.user.id === userId;

    return (
        <View style={[styles.topContainer, isUserMessage ? styles.topContainerReverse : null]}>
            <Avatar src={message.user.avatarUrl} style={styles.avatar} />
            <LinearGradient
                colors={colors.mainGradientColor}
                style={[styles.messageWrapper, isUserMessage ? styles.messageWrapperReverse : null]}
            >
                <View style={styles.messageContainer}>
                    <Text style={styles.messageText}>{message.text}</Text>
                </View>
            </LinearGradient>
            <Time style={styles.time} timestamp={message.timestamp} />
        </View>
    );
};

MessageListItem.propTypes = {
    message: PropTypes.shape({
        id: PropTypes.number.isRequired,
        user: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            avatarUrl: PropTypes.string,
        }).isRequired,
        text: PropTypes.string.isRequired,
        timestamp: PropTypes.number.isRequired,
    }).isRequired,
};

const styles = StyleSheet.create({
    topContainer: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        marginBottom: 40,
    },
    topContainerReverse: {
        flexDirection: 'row-reverse',
    },
    avatar: {
        position: 'relative',
        top: 20,
    },
    messageWrapper: {
        flexWrap: 'wrap',
        minWidth: 100,
        maxWidth: 250,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        borderBottomLeftRadius: 0,
    },
    messageWrapperReverse: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 0,
    },
    messageContainer: {
        padding: 10,
    },
    messageText: {
        color: colors.lightgray,
    },
    time: {
        position: 'absolute',
        right: 0,
        bottom: 0,
    },
});

export { MessageListItem };

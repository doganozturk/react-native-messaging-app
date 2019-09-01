import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { MessageListItem } from '@/components/MessageListItem';

export function MessageList({ messages }) {
    return (
        <FlatList
            contentContainerStyle={styles.container}
            data={messages}
            renderItem={({ item }) => <MessageListItem message={item} />}
            keyExtractor={(item, index) => `${item.id}_${index}`}
        />
    );
}

MessageList.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            user: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                avatarUrl: PropTypes.string,
            }).isRequired,
            text: PropTypes.string.isRequired,
            timestamp: PropTypes.number.isRequired,
        }),
    ),
};

MessageList.defaultProps = {
    messages: [],
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
});

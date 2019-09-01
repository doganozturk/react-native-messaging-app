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
    messages: PropTypes.arrayOf(MessageListItem.propTypes.message),
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

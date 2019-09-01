import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { MessageListItem } from '@/components/MessageListItem';

/* eslint-disable import/prefer-default-export */
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
});

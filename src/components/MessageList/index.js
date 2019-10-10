import React, { useRef } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { MessageListItem } from '@/components/MessageListItem';

const MessageList = ({ messages }) => {
    const flatlistRef = useRef();

    return (
        <FlatList
            ref={flatlistRef}
            style={styles.flatlist}
            contentContainerStyle={styles.container}
            data={messages}
            renderItem={({ item }) => <MessageListItem message={item} />}
            keyExtractor={(item, index) => `${item.id}_${index}`}
            onContentSizeChange={() => {
                flatlistRef.current.scrollToEnd();
            }}
        />
    );
};

MessageList.propTypes = {
    messages: PropTypes.arrayOf(MessageListItem.propTypes.message),
};

MessageList.defaultProps = {
    messages: [],
};

const styles = StyleSheet.create({
    flatlist: {
        flex: 1,
    },
    container: {
        width: '100%',
    },
});

export { MessageList };

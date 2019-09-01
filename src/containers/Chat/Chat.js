import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { fetchMessages } from '@/store/actions';
import { MessageList } from '@/components';
import { colors } from '@/theming';

export default function Chat() {
    const messages = useSelector(state => state.messages.messages);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMessages());
    }, []);

    return (
        <View style={styles.container}>
            <MessageList messages={messages} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: 'auto',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: colors.lightgray,
    },
});

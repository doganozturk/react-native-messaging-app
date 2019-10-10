import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { fetchMessages, postMessage } from '@/store/actions';
import { MessageList, MAButton, MATextInput } from '@/components';
import { colors } from '@/theming';

const Chat = () => {
    const [userMessage, setUserMessage] = useState('');
    const messages = useSelector(state => state.messages.messages);
    const userId = useSelector(state => state.auth.userId);
    const userName = useSelector(state => state.auth.name);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMessages());
    }, []);

    const onButtonPress = () => {
        dispatch(postMessage(userMessage, userId, userName));
        setUserMessage('');
    };

    return (
        <View style={styles.container}>
            <MessageList messages={messages} />
            <View style={styles.inputArea}>
                <View style={styles.inputWrapper}>
                    <MATextInput
                        placeholder="Write something..."
                        value={userMessage}
                        onChangeText={text => setUserMessage(text)}
                    />
                </View>
                <View style={styles.buttonWrapper}>
                    <MAButton
                        text="SEND"
                        onButtonPress={onButtonPress}
                        disabled={!userMessage.length}
                    />
                </View>
            </View>
        </View>
    );
};

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
    inputArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputWrapper: {
        width: '75%',
    },
    buttonWrapper: {
        width: '20%',
    },
});

export default Chat;

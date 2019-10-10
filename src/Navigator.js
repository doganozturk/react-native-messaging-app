import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, HeaderBackButton } from 'react-navigation-stack';
import navigationService from '@/services/NavigationService';
import store from '@/store';
import { logout } from '@/store/actions';
import Login from '@/containers/Login';
import Chat from '@/containers/Chat';

const AppNavigator = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: () => ({
                header: null,
            }),
        },
        Chat: {
            screen: Chat,
            navigationOptions: ({ navigation }) => ({
                title: navigation.state.params.name,
                headerLeft: (
                    <HeaderBackButton
                        backTitleVisible
                        title="Leave"
                        onPress={() => {
                            store.dispatch(logout(navigation.state.params.userId));
                            navigation.navigate('Login');
                        }}
                    />
                ),
            }),
        },
    },
    {
        initialRouteName: 'Login',
        headerLayoutPreset: 'center',
    },
);

const AppContainer = createAppContainer(AppNavigator);

const Navigator = () => {
    return (
        <AppContainer ref={navigatorRef => navigationService.setTopLevelNavigator(navigatorRef)} />
    );
};

export default Navigator;

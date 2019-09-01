import React from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, HeaderBackButton } from 'react-navigation-stack';
import navigationService from '@/services/navigationService';
import store from '@/store';
import { logout } from '@/store/actions';
import Login from '@/containers/Login/Login';
import Chat from '@/containers/Chat/Chat';

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
    },
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
    return (
        <Provider store={store}>
            <AppContainer
                ref={navigatorRef => {
                    navigationService.setTopLevelNavigator(navigatorRef);
                }}
            />
        </Provider>
    );
}

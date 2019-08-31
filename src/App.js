import React from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import store from '@/store';
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
        Chat,
    },
    {
        initialRouteName: 'Login',
    },
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
    return (
        <Provider store={store({})}>
            <AppContainer />
        </Provider>
    );
}

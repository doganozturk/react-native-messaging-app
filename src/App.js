import React from 'react';
import { Provider } from 'react-redux';
import store from '@/store';
import Login from '@/containers/Login/Login';

export default function App() {
    return (
        <Provider store={store({})}>
            <Login />
        </Provider>
    );
}

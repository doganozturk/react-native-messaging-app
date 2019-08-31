import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from '@/store/reducers';

/* eslint-disable no-underscore-dangle */
export default function configureStore(initialState) {
    return createStore(
        reducers,
        initialState,
        compose(
            applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
        ),
    );
}

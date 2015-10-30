import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import App from './container/app';
import reducer from './reducers';

let container = document.querySelector('#container');

let logger = createLogger();
let createStoreWithMiddleware = applyMiddleware(
    thunk,
    logger
)(createStore);
let store = createStoreWithMiddleware(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    container);

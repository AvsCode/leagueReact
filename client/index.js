import 'babel-polyfill';
import React from 'react';
import ReactDOM from'react-dom';
import {Provider} from 'react-redux';
import App from './App.jsx';
import configureStore from './store/configureStore.js'
import { BrowserRouter, Route, Link } from 'react-router-dom';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
     document.getElementById("app"));

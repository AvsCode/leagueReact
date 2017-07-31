import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import App from './App.jsx';
import configureStore from './store/configureStore.js'
import asyncActions from './actions/asyncActions.js';

const store = configureStore();

store.dispatch(asyncActions.getAllChampions()).then(()=> console.log(store.getState()));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById("app"));

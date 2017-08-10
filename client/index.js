import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Nav from './components/nav.js';
import champPage from './components/champPage.js';
import itemPage from './components/itemPage.js';
import championPage from './components/championPage.js';
import configureStore from './store/configureStore.js';
import asyncActions from './actions/asyncActions.js';
import css from './styles/styles.css';

const store = configureStore({});

store.dispatch(asyncActions.getAllChampions());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Nav />
                <Route exact={true} path="/" component={champPage} />
                <Route path="/items" component={itemPage }/>
                <Route path='/champion' component={championPage} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById("app"));

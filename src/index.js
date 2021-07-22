import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import {ConnectedRouter} from "connected-react-router";
import {history} from './redux/reducers';
import Routes from './routes';
import store from './redux'

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Routes/>
        </ConnectedRouter>,
    </Provider>,
    document.getElementById('root')
);


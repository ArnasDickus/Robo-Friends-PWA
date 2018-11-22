import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
// middleware weight if any actions returns function instead of object.
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import {searchRobots, requestRobots} from './reducers';
import 'tachyons';

// logger is middleware
const logger = createLogger();
// Root reducer allows you two have multiple reducers. 
const rootReducer = combineReducers({searchRobots, requestRobots})
// removed logger add it to applyMiddleware if you want logs in console
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, ));

ReactDOM.render(
                <Provider store = {store}>
                <App/>
                </Provider>,document.getElementById('root'));
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'
import routes from './routes'
import rootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(composeEnhancers(applyMiddleware(ReduxPromise)))

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('root')
);

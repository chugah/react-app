import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import 'normalize.css/normalize.css';
import './styles/styles.css';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const appRoot = document.getElementById('app');

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>, 
  appRoot);
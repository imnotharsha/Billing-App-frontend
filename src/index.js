import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

import {startGetUser} from './actions/userActions';
import {getStartCustomers} from './actions/customersAction';
import {startGetProducts} from './actions/productsActions';
import 'antd/dist/antd.css';

const store = configureStore();

console.log('store initialization', store.getState());
store.subscribe(() => {
  console.log('store change', store.getState());
});

// handle Page reloads
if (localStorage.getItem('authToken')) {
  store.dispatch(startGetUser());
  store.dispatch(startGetProducts());
  store.dispatch(getStartCustomers());
}
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('root'));

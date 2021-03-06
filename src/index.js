import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import store from "./redux/store.jsx";
import { Provider } from 'react-redux';

//Router
ReactDOM.render(
  <Provider store={store}>
      <Router />
  </Provider>,
  document.getElementById('root')
);



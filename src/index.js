/**
 * Npm imports
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

/**
 * Local imports
 */
import store from './store';

/**
 * Entry point
 */
render(
  <Provider store={store}>
    <h1 style={{ textAlign: 'center' }}>react-webpack-model</h1>
  </Provider>,
  document.getElementById('app')
);

/**
 * React hot reloading
 */
module.hot.accept();

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {fromJS} from 'immutable';
// import {Provider} from 'react-redux';
// import {StyleSheet, Text, View} from 'react-native';
import configureStore from './src/configureStore';
import {Provider} from 'react-redux';
//import {ThemeContext, getTheme} from 'react-native-material-ui';
//import Theme from './src/Theme';
import Routes from './src/routes';

//This allows network requests to be debug in devtools
// const _XHR = GLOBAL.originalXMLHttpRequest
//   ? GLOBAL.originalXMLHttpRequest
//   : GLOBAL.XMLHttpRequest;

//XMLHttpRequest = _XHR

let initialState = {};

// rehydrate initialState for JS app
if (window.__INITIAL_STATE__) {
  initialState = window.__INITIAL_STATE__;

  // Transform into Immutable.js collections,
  // but leave top level keys untouched for Redux
  Object.keys(initialState).forEach(key => {
    initialState[key] = fromJS(initialState[key]);
  });
}

const store = configureStore(initialState);

// Render the React application to the DOM
// Root component is to bootstrap Provider, Router and DevTools
const render = () => {};

// For hot reloading
if (module.hot) {
  setTimeout(() => {
    render();
  }, 300);
}

export default function App() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>

    );
}

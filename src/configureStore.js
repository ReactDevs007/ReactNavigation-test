import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';

import thunk from 'redux-thunk';

import rootReducers from './rootReducers';
//import logger from 'redux-logger'


// Redux DevTools Extension for Chrome and Firefox
const reduxDevTool = () => {
  return typeof window === 'object' &&
  typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f;
};


export default function configureStore(initialState) {

  const store = createStore(
    rootReducers(),
    initialState,
    compose(
      applyMiddleware(
        thunk,
        //logger,
      ),
      reduxDevTool(),
    ),
  )

  if (module.hot) {
    module.hot.accept('./rootReducers', () => {
      store.replaceReducer(require('./rootReducers'));
    });
  }

  return store;
}

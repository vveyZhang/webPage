import { createStore, compose,applyMiddleware } from 'redux';
import AppReducers from '../reducers/reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';
import { routerMiddleware, push } from 'react-router-redux';
import {browserHistory} from 'react-router';
let middleware=[thunk,promise,logger,routerMiddleware(browserHistory)];
const enhancer = compose(
  applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function configureStore(initialState) {
  const store = createStore(AppReducers,initialState, enhancer);
  if (module.hot&&process.env.NODE_ENV=="development") {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/reducers', () =>
      store.replaceReducer(require('../reducers/reducers').default)
    );
  }

  return store;
}

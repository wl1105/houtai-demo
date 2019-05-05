import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/index.js';
import logger from 'redux-logger';
import thunk from 'redux-thunk'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk, logger)
  )
);   //仓库的实例对象

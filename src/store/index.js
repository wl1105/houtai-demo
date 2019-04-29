import { createStore,applyMiddleware } from 'redux';
import reducer from './reducers/index.js';
import logger from 'redux-logger';
import thunk from 'redux-thunk'

const store = createStore(
  reducer,
  applyMiddleware(thunk,logger)
  );   //仓库的实例对象

export default store;
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/index';
import PrivateRoute from '@/common/components/PrivateRoute.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '@/pages/login/login.js';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <PrivateRoute path='/' component={App}></PrivateRoute>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

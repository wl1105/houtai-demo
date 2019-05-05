// 高阶组件，用来拦截我们的路由跳转
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends React.Component {
  render() {
    const { component: Component, path, isLogin } = this.props;
    return (
      <Route
        path={ path }
        render={() => {
          // 判断是否登陆
          if (isLogin) {
            return <Component></Component>
          } else {
            return (
              <Redirect from={path} to={{
                pathname: '/login',
                search: `?redirect=${path}`
              }}>
              </Redirect>
            )
          }
        }}>
      </Route>
    )
  }
}

const mapStateToProp = (state) => {
  return {
    isLogin: state.commons.isLogin
  }
}

const mapDispatchToProps = () => {
  return {

  }
}

export default connect(mapStateToProp, mapDispatchToProps)(PrivateRoute);

import React from 'react';
import { Layout } from 'antd';
import Sider from './common/components/Sider.js';
import Header from './common/components/Header.js';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Book from './pages/book/container.js';
import User from './pages/user/user.js';

const {
  Content
} = Layout;

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Sider></Sider>
          <Layout style={{ marginLeft: 200 }}>
            <Header></Header>
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
              <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                <Switch>
                  {/* 图书管理 */}
                  <Route path='/' exact component={Book}></Route>
                  {/* 用户管理 */}
                  <Route path='/user' exact component={User}></Route>
                  <Redirect to="/"></Redirect>
                </Switch>
              </div>
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App;

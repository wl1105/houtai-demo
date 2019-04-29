import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import store from '../../store/index.js';
import { NavLink } from 'react-router-dom'

class Sider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: store.getState().books
    }
  }
  render() {
    return (
      <Layout.Sider style={{
        overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
      }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          {
            this.state.list.map((item, index) => {
              return (
                <Menu.Item key={item.id}>
                  <NavLink to={item.href}>
                    <Icon type={item.type} />
                    <span className="nav-text">{item.name}</span>
                  </NavLink>
                </Menu.Item>
              )
            })
          }
        </Menu>
      </Layout.Sider>
    )
  }
}

export default Sider
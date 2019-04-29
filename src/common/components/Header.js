import React from 'react';
import { Layout} from 'antd';

class Header extends React.Component {
  render() {
    return (
      <Layout.Header style={{height:40, background: '#fff', padding: 0 }}>
        <input type="text" placeholder="搜索" style={{height:40,border:0}}/>
      </Layout.Header>
    )
  }
}

export default Header
import React from 'react';
import { Container, Top, Main } from './styled'
import { Input, Button, Table } from 'antd';

class Book extends React.Component {
  render() {
    return (
      <Container>
        <Top>
          <Input placeholder="输入图书名进行搜索" value={this.props.inputVal} onChange={this.props.inputChange} />
          <Button type="primary" icon="search" onClick={this.buttonClick.bind(this)}>搜索</Button>
        </Top>
        <Main>
          <Table rowKey="bookId" dataSource={this.props.list} columns={this.props.columns} pagination={{ defaultPageSize: 1 }} />
        </Main>
      </Container>
    )
  }
  componentDidMount() {
    this.props.getBookList();
  }
  buttonClick() {
    this.props.getBookList(this.props.inputVal);
  }
}
export default Book
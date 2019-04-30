import React from 'react';
import { Container, Top, Main } from './styled'
import { Input, Button, Table } from 'antd';
import store from '@/store/index'
import { UPDATE_BOOK_DATA_ACTION, INPUT_CHANGE_ACTION } from './store/createActions'

const columns = [{
  title: 'ID',
  dataIndex: 'bookId',
  key: 'bookId',
}, {
  title: '书名',
  dataIndex: 'bookName',
  key: 'bookName',
}, {
  title: '作者',
  dataIndex: 'author',
  key: 'author',
}, {
  title: '海报',
  dataIndex: 'coverurl',
  key: 'coverurl',
  render: function (text, record, index) {
    return <img src={text} alt='' />
  }
}];

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: store.getState().books.inputVal,
      total: store.getState().books.total,
      list: store.getState().books.list
    }
    store.subscribe(() => {
      this.setState({
        inputVal: store.getState().books.inputVal,
        total: store.getState().books.total,
        list: store.getState().books.list
      })
    })
    this.inputChange = this.inputChange.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }
  render() {
    return (
      <Container>
        <Top>
          <Input placeholder="输入图书名进行搜索" value={this.state.inputVal} onChange={this.inputChange} />
          <Button type="primary" icon="search" onClick={this.buttonClick}>搜索</Button>
        </Top>
        <Main>
          <Table rowKey="bookId" dataSource={this.state.list} columns={columns} pagination={{ defaultPageSize: 1 }} />
        </Main>
      </Container>
    )
  }
  componentDidMount() {
    this.getBookList();
  }
  //获取图书列表的方法
  getBookList(value) {
    // http.get('/api/book',{
    //   params:{
    //     bookName:value
    //   }
    // }).then((res)=>{
    //   //console.log(res);
    //   if(res.code===0){
    //     this.setState({
    //       list:res.data.list,
    //       total:res.data.total
    //     })
    //   }else{
    //     alert(res.msg);
    //   }
    // }).catch((err)=>{
    //   alert(err);
    // })
    //改变仓库数据
    store.dispatch(UPDATE_BOOK_DATA_ACTION(value))
  }
  //input输入框改变
  inputChange(e) {
    var value = e.target.value;
    // this.setState({
    //   inputVal: value
    // })
    //改变仓库
    store.dispatch(INPUT_CHANGE_ACTION(value))
  }
  //点击搜索
  buttonClick() {
    this.getBookList(this.state.inputVal);
  }
}
export default Book
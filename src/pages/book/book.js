import React from 'react';
import { Container, Top, Main } from './styled'
import { Input, Button, Table } from 'antd';
import http from '@/utils/http';
import store from '../../store/index'

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
},{
  title: '海报',
  dataIndex: 'coverurl',
  key: 'coverurl',
  render:function(text, record, index){
    return <img src={text} alt='' />
  }
}];

class Book extends React.Component {
  constructor(props){
    super(props);
    this.state={
      inputVal:'',
      pageNum:1,
      pageSize:1,
      total:1,
      list:[]
    }
    this.inputChange=this.inputChange.bind(this);
    this.buttonClick=this.buttonClick.bind(this);
  }
  render() {
    return (
      <Container>
        <Top>
          <Input placeholder="输入图书名进行搜索" value={this.state.inputVal} onChange={this.inputChange} />
          <Button type="primary" icon="search" onClick={this.buttonClick}>搜索</Button>
        </Top>
        <Main>
          <Table rowKey="bookId" dataSource={this.state.list} columns={columns} />
        </Main>
      </Container>
    )
  }
  componentDidMount(){
    this.getBookList();
  }
  //获取图书列表的方法
  getBookList(value){
    http.get('/api/book',{
      params:{
        bookName:value
      }
    }).then((res)=>{
      //console.log(res);
      if(res.code===0){
        this.setState({
          list:res.data.list,
          total:res.data.total
        })
      }else{
        alert(res.msg);
      }
    }).catch((err)=>{
      alert(err);
    })
  }
  //input输入框改变
  inputChange(e){
    var value=e.target.value;
    this.setState({
      inputVal:value
    })
  }
  //点击搜索
  buttonClick(){
    this.getBookList(this.state.inputVal); 
  }
}
export default Book
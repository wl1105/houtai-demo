import React from 'react';
import { connect } from 'react-redux';
import Book from './ui';
import { INPUT_CHANGE_ACTION,UPDATE_BOOK_DATA_ACTION } from './store/createActions';

const mapStateToProps = (state) => {
  return {
    inputVal: state.books.inputVal,
    list: state.books.list,
    columns :[{
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
    }]
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    inputChange: (e) => {
      var value = e.target.value;
      dispatch(INPUT_CHANGE_ACTION(value));
    },
    getBookList:(value)=>{
      dispatch(UPDATE_BOOK_DATA_ACTION(value));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Book);

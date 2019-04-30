import http from '@/utils/http';
import { UPDATEBOOKDATA, INPUT_CHANGE } from './actionTypes';

//修改图书数据
export const UPDATE_BOOK_DATA_ACTION = (value) => {
  return (dispatch, getState) => {
    //console.log(getState().books);
    http.get('/api/book',
    {
      params:{
        bookName:value
      }
    }
    ).then(res => {
      if (res.code === 0) {
        dispatch({
          type: UPDATEBOOKDATA,
          text: res.data
        })
      } else {
        alert(res.msg);
      }
    }).catch((err) => {
      console.log(err);
    })
  }
}

//修改inputVal
export const INPUT_CHANGE_ACTION = (value) => {
  return (dispatch, getState) => {
    dispatch({
      type: INPUT_CHANGE,
      text: value
    })
  }
}
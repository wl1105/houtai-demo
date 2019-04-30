import http from '@/utils/http';

export const UPDATE_BOOK_DATA_ACTION = () => {
  return (dispatch, getState) => {
    //let { inputVal, pageNum, pageSize } = getState().books;
    http.get('/api/book').then(res => {
      if (res.code === 0) {
        dispatch({
          type: UPDATEBOOKDATA,
          text: res.data
        })
      }else{
        alert(res.msg);
      }
    }).catch((err)=>{
      console.log(err);
    })
  }
}
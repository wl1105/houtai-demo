import { combineReducers } from 'redux';
import book from '@/pages/book/store/reducer';  
import common from '@/common/store/common';

export default combineReducers({
  commons:common,
  books: book 
})
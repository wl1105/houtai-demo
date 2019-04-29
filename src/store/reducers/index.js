import { combineReducers } from 'redux';
import book from './book.js';  
import user from './user.js';

export default combineReducers({
  books: book, 
  users: user    
})
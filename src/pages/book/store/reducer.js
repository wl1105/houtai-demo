import { UPDATEBOOKDATA, INPUT_CHANGE } from './actionTypes';

const defaultStates = {
  inputVal: '',
  total: 1,
  list: []
}
export default (state = defaultStates, action) => {
  var newState = JSON.parse(JSON.stringify(state));
  if (action.type === UPDATEBOOKDATA) {
    newState.total = action.text.total;
    newState.list = action.text.list;
    return newState;
  }else if(action.type===INPUT_CHANGE){
    newState.inputVal=action.text;
    return newState;
  }
  return state;
}
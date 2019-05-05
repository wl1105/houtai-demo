const defaultStates={
  menus:[
    {
      id:1,
      name:"图书管理",
      type:'book',
      href:'/'
    },
    {
      id:2,
      name:"用户管理",
      type:'user',
      href:'/user'
    }
  ],
  isLogin:false
}
export default (state=defaultStates,action)=>{
  var newState=JSON.parse(JSON.stringify(state));
  if(action.type==='LOGIN'){
    newState.isLogin=true;
  }
  return newState
}
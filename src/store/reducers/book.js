const defaultStates=[
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
]
export default (state=defaultStates,action)=>{
  return state
}
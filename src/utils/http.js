import axios from 'axios'
const http = axios.create() // 实例化axios，定义为http,保留axios，其他想用axios请求数据也可以

// 基础url设置
http.defaults.baseURL = 'http://localhost:3000';
// 过期时间的设置，10s后没有请求回来数据就中断请求，避免用户长时间等待
http.defaults.timeout = 10000

// 拦截器的配置
// 请求拦截
// http.interceptors.request.use((config) => {
//   return config
// })

// 响应拦截
http.interceptors.response.use(res => {
  let result = res.data     //axios请求成功数据在res.data里，这样是为了让和jquery保持一致，直接res
  return result
})

// 暴露
export default http
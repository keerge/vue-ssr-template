import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: 'https://www.easy-mock.com/mock/5a31eade513048307be27e90', //  'process.env.BASE_API', // api的base_url
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 20000) {
      return Promise.reject('code!=20000 error')
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error)// for debug
    return Promise.reject(error)
  }
)

export default service

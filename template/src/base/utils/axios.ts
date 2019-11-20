import axios from 'axios'
import { AxiosInstance } from 'axios'
import Vue from 'vue'
import { baseApiUrl } from '@Base/utils/navpage'

// 创建axios实例
let service: AxiosInstance

const axiosConfig = {
  baseURL: baseApiUrl(), // api的base_url
  timeout: 50000, // 请求超时时间
  withCredentials: true,
  // crossDomain: true,
}

service = axios.create(axiosConfig)

// console.log('process.env.BASE_URL',process.env.BASE_URL)
// request拦截器 axios的一些配置
service.interceptors.request.use(
  (config: any) => {
    return config
  },
  (error: any) => {
    // Do something with request error
    // console.error('error:', error) // for debug
    Promise.reject(error)
  },
)

// respone拦截器 axios的一些配置
service.interceptors.response.use(
  (response: any) => {
    return response
  },
  (error: any) => {
    // console.error('error:' + error) // for debug
    return Promise.reject(error)
  },
)

export default service

// 引入axios
import axios from "axios";

//创建axios实例配置, 返回实例对象
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});
// 请求拦截器
service.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 解决不同请求方式时统一使用data来进行传参
const request = (options) => {
  options.method = options.method || 'get'
  if(options.method.toLowerCase() === "get"){
    options.params = options.data || options.params
    delete options.data
  }

  // 解决了请求多个代理的问题
  service.defaults.baseURL = options.proxy || process.env.VUE_APP_BASE_API

  return service(options)
}

// 导出实例对象
export default request;

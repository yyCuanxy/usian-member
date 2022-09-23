// 用户管理的接口
import request from "@/utils/request";
// 登录方法 
export const login = (data = {}) => {
  return request({
    url: '/admin/login',
    method: "POST",
    data
  })
}

// 接口在easymock里面模拟创建好了 下面是封装接口
// 获取用户信息接口
export const userInfo = () => {
  return request({
    url: '/admin/getUserInfo',
    method: "GET"
  })
}

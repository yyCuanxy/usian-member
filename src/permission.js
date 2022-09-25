// 引入路由对象
import router from "./router";

// 引入vuex
import store from "./store"

//引入删除token以及删除用户信息方法
import {removeTokenAndUserInfo} from "./utils/auth"

// 创建路由守卫，实现页面拦截
// 什么时候触发路由守卫方法：页面进行跳转的时候触发
router.beforeEach(async (to, from, next) => {
  // to and from are both route objects. must call `next`.
  const token = store.getters.token
  if (token) {
    // 已登录的逻辑
    if (to.path === "/login") {
      next(from.path)
    } else {
      // 获取用户信息
      let userInfo = store.getters.userInfo
      userInfo = typeof userInfo === "object" ? JSON.stringify(userInfo) : userInfo
      if (userInfo === "{}" || userInfo === "") {
        const response = await store.dispatch("handleUserInfo")
        if(response){
          next()
        }else{
          // store.commit("SET_TOKEN","")
          // store.commit("SET_USER_INFO","")
          // removeTokenAndUserInfo()
          next ("/login")
        }
      }else{
        next()
      }
    }
  } else {
    // 未登录的逻辑
    if (to.path === "/login") {
      next()
    } else {
      next("/login")
    }
  }
})
import Vue from "vue";

// 引入element
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./style/reset.css"
import "./style/common.css"

// 页面权限
import "./permission"

// 注册elementui
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

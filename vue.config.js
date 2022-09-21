const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 项目打包之后白屏问题
  publicPath: "./",
  devServer: {
    // 端口号
    port: 8888,
    // 主机名
    host: "localhost",
    // 是否自动打开浏览器
    open: true,
    // 是否开启https
    https: false,
    // 配置跨域
    proxy: {
      // /dev-api代理名称
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_SERVICE_URL,
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: "",
        },
      },
      // [process.env.VUE_APP_BASE_API1]: {
      //   target: process.env.VUE_APP_SERVICE_URL1,
      //   changeOrigin: true,
      //   pathRewrite: {
      //     ["^/" + process.env.VUE_APP_BASE_API1]: "",
      //   },
      // },
      // "/dev-api1": {
      //   // 跨域的地址
      //   target: "http://localhost:3000",
      //   // 开启跨域
      //   changeOrigin: true,
      //   // 路径重写
      //   pathRewrite: {
      //     "^/dev-api1": "",
      //   },
      // },
    },
  },
  // 关闭eslint
  lintOnSave: false,
});

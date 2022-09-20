// 演示跨域错误（不成功）
const http = require("http");
const server = http.createServer((req, res) => {
  res.end("hello world vue");
});
server.listen(3000);

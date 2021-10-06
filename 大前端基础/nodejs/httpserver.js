//导入模块是require  类似于import java.io
const http = require('http');
//1. 创建一个httpserver服务
http.createServer(function(request, response){
    //浏览器如何解析文本
    //配置以text/plain或text/html的方式解析
    response.writeHead(200,{'Content-type':'text/html'});
    //浏览器输出内容
    response.end('<strong>hello node-server!</strong>');
}).listen(8888);

console.log('当前服务是: http://localhost:8888');
//2.监听端口8888
//3.启动运行服务 node httpServer.js
//4.在浏览器访问 localhost:8888
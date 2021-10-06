//1.导入mysql依赖包
var mysql = require('mysql');
//2.创建一个mysql的Connection对象
//3.配置数据库连接信息
var conncection = mysql.createConnection({
    host:"127.0.0.1",
    port:3306,
    user:"root",
    password:"123456",
    database:"mango"
});
//4.开辟连接
conncection.connect();
//5.执行curd
conncection.query('select * from sys_config',function(error,results,fields){
    //抛出查询错误
    if(error)throw error;
    //查询成功
    console.log('result = ', results);
});
//6.关闭连接
conncection.end();
//7.运行node 查看效果
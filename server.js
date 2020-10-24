const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql')


app.all("/*", function(req, res, next) {
    // 跨域处理
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next()
})


// 连接数据库
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'pig'
})
connection.connect()
 

// 设置路由接口
// index
app.get('/index', (req, res) => {

    connection.query("select * from indexs limit 10,10", function(err,result){
        const obj={
            status:200,
            data:result
        }
        res.json(obj)
    })
})

// detail
app.get('/detail_1', (req, res) => {
    var id=req.query.id
    connection.query(`select * from detail_1 where id=${id}`, function(err,result){
        const obj={
            status:200,
            data:result
        }
        res.json(obj)
    })
})

// result
app.get('/result', (req, res) => {
    connection.query("select * from result", function(err,result){
        const obj={
            status:200,
            data:result
        }
        res.json(obj)
    })
})

// swiper
app.get('/swiper', (req, res) => {
    var id=req.query.id
    connection.query(`select * from  result limit 5,8`, function(err,result){
        const obj={
            status:200,
            data:result
        }
        res.json(obj)
    })
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 
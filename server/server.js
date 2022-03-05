//백엔드

const express = require("express")

const app = express()

const PORT = process.env.PORT || 4000; //port 번호를 4000번으로 사용하겠다

app.get("/hello",(req,res) =>{
    console.log("get hello")
    res.send({hello : "response hello"}) //response.send - 서버의 응답을 위한 함수
})

app.get("/bye",(req,res) =>{
    console.log("get bye")
    res.send({bye : "response bye"})
})

app.get("/movies1:id",(req,res) =>{
    console.log("/movies:id")
    console.log(req.params)
    console.log(req.params.id)
})

app.get("/movies2:id&:title",(req,res) =>{
    console.log("/movies:id&:title")
    console.log(req.params)
    console.log(req.params.id)
    res.send({text:"params.id : " + req.params.id})
})

app.get("/movies3:id&:title&:strong",(req,res) =>{
    //서버가 요청을 받아들임...
    console.log("/movies:id&:title&:strong")
    console.log(req.params)
    console.log(req.params.id)
    var id = req.params.title
    res.send({send_message:"response : " + id})
    //response.send
    //서버의 응답
})

app.listen(PORT, ()=>{
    console.log(`Server On:http://localhost: ${PORT}`)
})
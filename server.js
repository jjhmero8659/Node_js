const express = require("express")	//express 요청

const app = express()		//express 요청 값 저장

const PORT = process.env.PORT || 4000; //PORT 번호 저장 , PORT번호는 4000번 또는 자동
const bodyParser = require("body-parser")
app.use(bodyParser.json());

personList=[
  {name:"이민호",age:20,height:176.3},
  {name:"송중기",age:21,height:175.2},
  {name:"정채연",age:22,height:162.4},
]

app.get("/get",(req,res)=>{
  console.log("get_hello")
})

app.post("/post",(req,res)=>{
  console.log("I'm Post!")
  response_json = {
    name : req.body.name,
    age : req.body.age,
    height : req.body.height
  }
  personList.push(response_json)

})

app.delete("/delete:name",(req,res)=>{
  personList = []
  console.log(personList)
})

app.patch("/patch",(req,res)=>{
  for(var i=0; i<personList.length; i++){
    if(personList[i].name == "이민호"){
      personList[i].name = req.body.name;
      personList[i].age = req.body.age;
      personList[i].height = req.body.height;
    }
  }
  res.send({Update : personList});
})

app.put("/put",(req,res)=>{
  response_json = {
    name : req.body.name,
    age : req.body.age,
    height : req.body.height
  }
  personList.push(response_json)
  res.send({list : personList})
})



app.listen(PORT, ()=>{ //포트 listen
    	console.log(`Server On:http://localhost: ${PORT}`)
})
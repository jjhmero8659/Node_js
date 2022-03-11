const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000;
const bodyParser=require('body-parser')
app.use(bodyParser.json())

personList=[
    {name:"이민호",age:20,height:176.3},
    {name:"송중기",age:21,height:175.2},
    {name:"정채연",age:22,height:162.4},
]

app.get('/hello',(req,res)=>{
    //req=request = 넘어온 요청 관련
    //res=response = 서버 응답관련
    console.log('get hello')
    res.send({hello:"response hello"})
    //response.send-서버의 응답을 클라이언트에 되돌려줌
})
app.get('/bye',(req,res)=>{
    //req=request = 넘어온 요청 관련
    //res=response = 서버 응답관련
    console.log('get bye')
    res.send({hello:"response bye"})
})
app.get('/person1:name',(req,res)=>{
    console.log('/person1:name')
    console.log(req.params)
    //요청 파라미터 모두 출력
    console.log(req.params.name)
    const name=req.params.name
    let findPersonObj=null
    //요청에 붙여서 넘어온 파라미터중 name값을 꺼냄
    //요청받은 name값에 해당하는 객체를 찾아서 출력
    for(var i=0; i<personList.length; i++){
        if(personList[i].name==name){
            console.log("이름:"+personList[i].name)
            console.log("나이:"+personList[i].age)
            console.log("키:"+personList[i].height)
            findPersonObj={
                name:personList[i].name,
                age:personList[i].age,
                height:personList[i].height
            }
        }
    }
    res.send({find:findPersonObj})
})
app.get('/person2:name&:age',(req,res)=>{
    console.log('/person2:name&:age')
    console.log(req.params)
    //요청 파라미터 모두 출력
    console.log(req.params.name)
    console.log(req.params.age)
    //요청에 붙여서 넘어온 파라미터중 name값을 꺼냄
    res.send({hello:"response bye"})
})
app.get('/person3:name&:age&:height',(req,res)=>{
    console.log('/person2:name&:age&:height')
    console.log(req.params)
    //요청 파라미터 모두 출력
    console.log(req.params.name)
    console.log(req.params.age)
    console.log(req.params.height)
    //요청에 붙여서 넘어온 파라미터중 name값을 꺼냄
    res.send({hello:"response bye"})
})
app.post('/person4',(req,res)=>{
    console.log('/person4')
    console.log(req.body)
    console.log(req.body.name)
    console.log(req.body.age)
    console.log(req.body.height)
    //insert into ~~
    const name=req.body.name
    const age=req.body.age
    const height=req.body.height
    const personObj={name:name,age:age,height:height}
    //personList=personList.concat(personObj)
    personList.push(personObj)
    for(var i=0; i<personList.length; i++){
        console.log("이름:"+personList[i].name)
        console.log("나이:"+personList[i].age)
        console.log("키:"+personList[i].height)
    }
})

app.delete('/person5:name',(req,res)=>{
  console.log('/person5:name')
  console.log(req.params)
  console.log(req.params.name)
  const name=req.params.name
  //filter메서드 삭제
  //배열 관련 메서드
  //삭제관련함수:unshift,pop,slice,splice,filter

    personList=personList.filter(
        (data) => (data.name != name)
    )
    //넘겨받은 name이 아닌것만 통과 not을써야 삭제
    //조건을 만족시키는 원소만 배열의 원소로 추가

    //name값이 넘겨받은값이랑 다른것만 통과
    //filter리턴 하는 배열값은 name이 아닌것만 return
    //삭제할 name만 빼고 배열 원소를 재생성
    for(var i=0; i<personList.length; i++){
        console.log("이름:"+personList[i].name)
        console.log("나이:"+personList[i].age)
        console.log("키:"+personList[i].height)
    }
})

//app.put('/person6:name',(req,res)=>{
    //console.log('/person6:name')
    //console.log(req.params)//정채연
    //console.log(req.body)//수정할정보
    ////배열에 정보를 찾아서 변경
    ////전체출력 (변경된것 확인)
//})

//app.patch('/person7:name',(req,res)=>{
    //console.log('/person7:name')
    //console.log(req.params)//정채연
    //console.log(req.body)//수정할정보
    ////배열에 정보를 찾아서 변경
    ////전체출력 (변경된것 확인)
//})

app.listen(PORT,()=>{
    console.log(`Server On:http://localhost:${PORT}`)
    //template string
})
const express = require("express")

const app = express()

const PORT = process.env.PORT || 4000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());

var personList = [
    {name:"이민호",age:20,height:176.3},
    {name:"송중기",age:21,height:175.2},
    {name:"정채연",age:22,height:162.5}
]

app.get("/hello",(req,res) =>{
    //req = request = 넘어온 요청 관련
    //res = response = 서버 응답 관련
    console.log("get hello");
    res.send({hello : "My name is hello"});
})

app.get("/buy",(req,res) =>{
    console.log("get buy");
})

app.get("/person1:name",(req,res) =>{
    console.log(req.params.name);
    const name = req.params.name
    let findPersonObj = null
    //요청에 붙여서 넘어온 파라미터중 name 값을 꺼냄
    //요청받은 name 값에 해당하는 객체를 찾아서 출력

    for(var i=0; i<personList.length; i++){
        if(personList[i].name = name){
            console.log("이름:"+personList[i].name)
            console.log("나이:"+personList[i].age)
            console.log("키:"+personList[i].height)
            findPersonObj = {
                name : personList[i].name,
                age : personList[i].age,
                height : personList[i].height
            }
        }
    }
    res.send({find:findPersonObj});
})

app.get("/person2:name&:age",(req,res) =>{
    console.log(req.params.name);
    console.log(req.params.age);
})


app.get("/person3:name&:age&:height",(req,res) =>{
    console.log(req.params.name);
    console.log(req.params.age);
    console.log(req.params.height);
    // res.send({name:req.params.id}); // res 는 한번에 한개씩만 전달 해야함
    // res.send({age:req.params.age});
    // res.send({height:req.params.height});
    res.send({name:req.params.name ,age:req.params.age , height: req.params.height})
})

app.post("/person4",(req,res) =>{
    console.log("person")
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.age);

    const name = req.body.name;
    const age = req.body.age;
    const height = req.body.height;

    const personObj = {name:name , age:age , height:height}
    personList = personList.concat(personObj)
    for(var i=0; i<personList.length; i++){
        console.log("이름:"+personList[i].name)
        console.log("나이:"+personList[i].age)
        console.log("키:"+personList[i].height)
    }
})

app.delete("/person5:name",(req,res) =>{
    console.log("person5");
    console.log(req.params)
    console.log(req.params.name)
    const name = req.params.name;

    personList = personList.filter(  
        (data)=>(data.name == name)
    )
    //name 값이 넘겨받은 값이랑 다른 것만 통과
    //filter 리턴 하는 배열값은 name 이 아닌것만 return
    //조건을 만족시키는 원소 배열 만으로 재생성

    //filter 메서드 삭제
    //배열 관련 메서드
    //삭제 관련 함수 : unshift,pop,slice,splice,filter

    for(var i=0; i<personList.length; i++){
        console.log("이름:"+personList[i].name)
        console.log("나이:"+personList[i].age)
        console.log("키:"+personList[i].height)
    }
})

app.put("/person6:name",(req,res) =>{
    console.log("person6");
    console.log(req.params) //정채연
    console.log(req.body)   //수정할 정보
    
    //배열에 정보를 찾아서 변경
    //전체 출력 (변경된것 확인) 
    var name = req.params.name;

    for(var i=0; i<personList.length; i++){
        if(personList[i].name == "정채연"){
            personList[i].age = req.body.age;
            personList[i].height = req.body.height;
        }
        console.log("이름:"+personList[i].name)
        console.log("나이:"+personList[i].age)
        console.log("키:"+personList[i].height)
    }
})

app.patch("/person7",(req,res) =>{
    console.log("person7");

    console.log(req.params) //정채연
    console.log(req.body)   //수정할 정보
    //배열에 정보를 찾아서 변경

    var name = req.params.name;

    for(var i=0; i<personList.length; i++){
        if(personList[i].name == "정채연"){
            personList[i].age = req.body.age;
        }
        console.log("이름:"+personList[i].name)
        console.log("나이:"+personList[i].age)
        console.log("키:"+personList[i].height)
    }
})


app.listen(PORT,()=>{
    console.log(`Server On : http://localhost:${PORT}`)
})

import React,{Component} from 'react';
import axios from 'axios';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      app_data:''
    }
  }
  request1=async()=>{
    alert("요청1")
    const res=await axios.get('/hello')
    //서버의 res.send결과가 axios의 리턴값에 들어가있다.
    //res.data.hello 이 값은 "response hello"
     this.setState({
       app_data:res.data.hello
     })
  }
  request2=async()=>{
    alert("요청2")
    const res=await axios.get('/bye')
    this.setState({
      app_data:res.data.hello
    })
  }
  request3=async()=>{
    alert("요청3")
    const res=await axios.get('/person1'+"이민호")
    console.log(res)
    console.log(res.data.find)
    this.setState({
      app_data:res.data.find.name
    })
  }
  request4=async()=>{
    alert("요청4")
    const res=await axios.get('/person2'+"이민호"+"&"+20)
    this.setState({
      app_data:res.data.hello
    })
  }
  request5=async()=>{
    alert("요청5")
    const res=await axios.get('/person3'+"이민호"+"&"+20+"&"+176.5)
    this.setState({
      app_data:res.data.hello
    })
  }
  request6=async()=>{
    alert("요청6")
    const personObj={name:"김철수",age:24,height:177.5}
    const res=await axios.post('/person4',personObj)
    this.setState({
      app_data:res.data.hello
    })
  }

  request7=async()=>{
    alert("요청7")
    const res=await axios.delete('/person5'+"정채연")

  }
  request8=async()=>{
    alert("요청8")
    const updateData={age:30,height:165.2}
    const res=await axios.put('/person6'+"정채연",updateData)
    
  }
  request9=async()=>{
    alert("요청9")
    const updateData={age:30}
    const res=await axios.patch('/person7'+"정채연",updateData)
    
  }

  render(){
    return(
      <div>
        {this.state.app_data}
        <button onClick={this.request1}>요청1</button>
        <button onClick={this.request2}>요청2</button>
        <button onClick={this.request3}>요청3</button>
        <button onClick={this.request4}>요청4</button>
        <button onClick={this.request5}>요청5</button>
        <button onClick={this.request6}>요청6</button>
        <button onClick={this.request7}>요청7</button>
        <button onClick={this.request8}>요청8</button>
        <button onClick={this.request9}>요청9</button>
      </div>
    )
  }
}

export default App;
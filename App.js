import logo from './logo.svg';
import './App.css';
import React , {Component} from "react";
import axios from "axios";

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      text:"",
    }
  }

  request1 = async() =>{
    alert("요청.before");
    const result = await axios.get("/hello");
    console.log(result.data.hello);
    this.setState({
      text : result.data.hello,
    })
  }

  buy_request = async() =>{
    alert("buy");
    const result = await axios.get("/buy");
  }

  req_person1 = async() =>{
    const result = await axios.get("/person1" + "이순신");
    console.log(result.data.find)
    this.setState({
      // text: result.data.find
    })
  }

  req_person2 = async() =>{
    const result = await axios.get("/person2"+"홍길동"+"&"+27);
  }

  req_person3 = async() =>{
    const result = await axios.get("/person3"+"척준경"+"&"+25+"&"+185);
    this.setState({
      text: result.data.name + " " +  result.data.age + " " + result.data.height, 
    })
  }

  req_person4 = async() =>{
    const personObj = {name:"송중기", age:21, height:176.5};
    const result = await axios.post("/person4",personObj);
    this.setState({
      
    })
  }

  req_person5 = async() =>{
    const person_name = {name : "정채연"}
    const result = await axios.delete("/person5"+"정채연");
    this.setState({
      
    })
  }

  req_person6 = async() =>{
    const updateData = {age:30, height:165.2}
    const result = await axios.put("/person6"+"정채연",updateData);
    this.setState({
      
    })
  }

  req_person7 = async() =>{
    const updateData = {age:30}
    const result = await axios.patch("/person7"+"정채연",updateData);
    this.setState({
      
    })
  }



  render(){
    return(
      <div>
        <h1>{this.state.text}</h1>
        <button onClick={this.request1}>request</button>
        <button onClick={this.buy_request}>buy</button>
        <button onClick={this.req_person1}>req_person1</button>
        <button onClick={this.req_person2}>req_person2</button>
        <button onClick={this.req_person3}>req_person3</button>
        <button onClick={this.req_person4}>post</button>
        <button onClick={this.req_person5}>delete</button>
        <button onClick={this.req_person6}>put</button>
        <button onClick={this.req_person7}>patch</button>
      </div>
    )
  }
}

export default App;

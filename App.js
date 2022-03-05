import React , {Component} from "react";
import './App.css';
import axios from "axios";

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      app_data:"",
      app_data2:"",
    }
  }

  request1 = async() =>{
    const res = await axios.get("/hello");
    this.setState({
      app_data:res.data.hello
    })
  }

  request2 = async() =>{
    const res = await axios.get("/bye");
    this.setState({
      app_data:res.data.bye
    })
  }

  request3 = async() =>{
    const res = await axios.get("/movies1"+130);
  }

  request4 = async() =>{
    const res = await axios.get("/movies2"+130+"&"+"tank");
    this.setState({
      app_data : res.data.text //응답한 data 중 text의 값을 app_data에 저장
    })
  }

  request5 = async() =>{
    const res = await axios.get("/movies3"+130+"&"+"tank"+"&"+"strong");
    this.setState({
      app_data:res.data.send_message
    })
  }

  render(){
    return(
      <div>
        <h1>{this.state.app_data}</h1>
        <button onClick={this.request1}>요청 1</button>
        <button onClick={this.request2}>요청 2</button>
        <button onClick={this.request3}>요청 3</button>
        <button onClick={this.request4}>요청 4</button>
        <button onClick={this.request5}>요청 5</button>
      </div>
    )
  }
}

export default App;

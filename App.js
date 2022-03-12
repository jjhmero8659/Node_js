import React , {Component} from "react";

import axios from "axios";

class App extends Component{
  constructor(props){
    super(props)

    this.state = {

    }
  }

  get_test = async() =>{
    const get_axios = await axios.get("/get")
  }

  post_test = async()=>{
    var list = {
      name : "아이유",
      age : 29,
      height : 165
    }
    const post_axios = await axios.post("/post",list)
  }

  delete_test = async()=>{
    const delete_axios = await axios.delete("/delete"+"아이유")
  }

  patch_test = async()=>{
    var update_json = {name:"아이린",age:25,height:166.3};
    const delete_axios = await axios.patch("/patch",update_json)
    console.log(delete_axios.data.Update);
  }

  put_test = async()=>{
    var put_list = {
      name : "장원영",
      age : 20,
      height : 173
    }
    const delete_axios = await axios.put("/put",put_list);
    console.log(delete_axios.data.list)
  }


  render(){
    return(
      <div>
        <button onClick={this.get_test}>get_test</button>
        <button onClick={this.post_test}>get_test</button>
        <button onClick={this.delete_test}>get_delete</button>
        <button onClick={this.patch_test}>get_patch</button>
        <button onClick={this.put_test}>get_put</button>
      </div>
    )
  }
}

export default App;
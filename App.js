import logo from './logo.svg';
import './App.css';
import "./css/Movie.css";
import React, {Component} from "react";
import axios from "axios";
import Movie from "./Components/Movie.js";

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      movieList:[]
    }
  }

  componentDidMount(){ //Dom이 완성되고 작업 가능해지면...
    this.getMovie();  //getMovie 함수 호출
  }

  getMovie = async() => {  //async 비동기 
    console.log("getmovie") 
    //axios-ajax관련 함수 (서버에 데이터 요청 하는 함수)
    //$.ajax - spring
    const axios_movies = await axios.get("https://yts.mx/api/v2/list_movies.json"); // 비동기?
    console.log(axios_movies);
    this.setState({
      movieList:axios_movies.data.data.movies
    })
    //상태값에 요청해서 받아온 영화관련 JSON 배열 정보만 싹 집어넣음
  }

  render(){

    const result = this.state.movieList.map(data => 
      <Movie 
          medium_cover_image={data.medium_cover_image}
          title = {data.title}
          summary = {data.summary}
      ></Movie>
    )

    return(
      <div id='App_wrap'>
         <div>
            {result}
          </div>
      </div>
    )
  }
}



export default App;

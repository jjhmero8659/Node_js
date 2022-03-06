import React , {Component} from "react";
import axios from "axios";
import Movie from "./Movie/movie.js";

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      Movie_list : [],
    }
  }

  componentDidMount(){
    this.getMovie();
  }

  getMovie = async() =>{
    const axios_movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
    console.log(axios_movies);
    this.setState({
      Movie_list :  axios_movies.data.data.movies,
    })
  }
  
  render(){
    const result = this.state.Movie_list.map(
      data => <Movie
          medium_cover_image = {data.medium_cover_image}
          title = {data.title}
          summary = {data.summary}
      ></Movie>
    )

    return(
      <div>
        {result}
      </div>
    )
  }
}

export default App;

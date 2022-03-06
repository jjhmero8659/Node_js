import React , {Component} from "react";
import "../css/movie.css";

class Movie extends Component{
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    return(
      <div>
          <div className="left_side">
            <img src={this.props.medium_cover_image}></img>
          </div>
          <div className="right_side">
            <div className="title">
              Title : {this.props.title}
            </div>
            <div className="summary">
              Summary : {this.props.summary}
            </div>
          </div>
      </div>
    )
  }
}

// function Movie(props){
//   return(
//       <div id="movie">
//           <div id="left-side">
//               <img src={props.medium_cover_image}/>
//           </div>
//           <div id="right-side">
//               <div>
//                   제목:{props.title}
//               </div>
//               <div>
//                   설명:{props.summary}
//               </div>
//           </div>
//       </div>
//   );
// }


export default Movie;
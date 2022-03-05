import React, {Component} from "react";

class Movie extends Component{
  constructor(props){
    super(props)
    // this.state = {
    // }
  }


  render(){
    return(
      <div id='Movie_wrap'>
          <div id="left-side">
              <img src={this.props.medium_cover_image}></img>
          </div>

          <div id="right-side">
              <div>
                제목 : {this.props.title}
              </div>

              <div>
                설명 : {this.props.summary}
              </div>
          </div>
      </div>
    )
  }
}



export default Movie;
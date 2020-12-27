
import '../../style/Movie.css';
import { Component } from 'react';
import {Link } from 'react-router-dom'
class Movie extends Component {
    changeRent = () =>
    {
        this.props.changeRent(this.props.movie.id,this.props.name)
    }
   render()
  {
     let movie = this.props.movie
     let type = this.props.type
     let id = movie.id
    return (
  
        <div className="card">
        <div className="movie">
            <div onClick={this.changeRent} className="addDelMovie">{type === 'plus'?'+':'-'}
            </div>
            <span className="movieTitle">{movie.title}</span>
            <Link to={`/movies/${id}`}>
            <img src={movie.img}/>
            </Link>
        </div>
        </div>
        
            );
  }

}

export default Movie;

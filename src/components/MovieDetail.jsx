import '../style/MovieDetail.css'
import { Component } from 'react';
import {Link } from 'react-router-dom'
class MovieDetail extends Component {
   render()
  {
    let id = parseInt(this.props.match.params.id)
    let movies = this.props.movies
    let movie = movies.find(m => m.id === id)
    return (
        <div className="movieDetails">
            <div  className="movieTitle">{movie.title} - {movie.year}</div>
            <img src={movie.img}/>
            <p>{movie.descrShort}</p>
        </div>

            );
  }

}

export default MovieDetail;

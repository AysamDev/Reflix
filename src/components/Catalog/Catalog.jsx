
import '../../style/Catalog.css';
import { Component } from 'react';
import {Link } from 'react-router-dom'
import Movie from './Movie'
class Catalog extends Component {
    constructor()
    {
        super()
        this.state = {
        search: ""
        }
    }

    handleSearchBar = (event) =>
    {
        const {value, name} = event.target
        this.setState(
            {
                [name]: value 
            }
        )
        
    }
  render()
  {

      let name = this.props.match.params.name
      let allMovies = this.props.movies
      let money = this.props.users.find(u => u.name === name).money
      let movies = allMovies.filter(m => m.isRented === false && m.title.toLowerCase().includes(this.state.search.toLowerCase()))
      let rentedMovies = allMovies.filter(m => m.isRented === true && m.title.toLowerCase().includes(this.state.search.toLowerCase()))
      
      let checkRented = rentedMovies.length
    return (
        <div id="catalog">

        <div className="header">
            <input type="text" placeholder="Search" name="search" onChange={this.handleSearchBar}/>
            <span id="budget">Budget: {money}$</span>
        </div>
        
        {checkRented > 0?
        <div className="rented">
            <span className="categories">Rented Movies:</span>
            <hr></hr>
            <div id="rentedMovies">
            {
                rentedMovies.map(movie => 
                    {
                        return <Movie  key={movie.id} movie={movie} type="minus" changeRent={this.props.changeRent} name={name}/>
                    })    
            }
            </div>
        </div> :
        null
        }
        {movies.length > 0?
        <div className="nonRented">
            <span className="categories">Catalog :</span>
            <hr></hr>
            <div id="nonRentedMovies">
            {
                movies.map(movie => 
                    {
                        return <Movie  key={movie.id} movie={movie} type="plus" changeRent={this.props.changeRent} name={name}/>
                    })    
            }
            </div>
        </div>:
        null}
    </div>
    );
  }

}

export default Catalog;

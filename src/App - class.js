import React, {Component} from 'react'
import axios from 'axios'
import Card from './components/Card'
class App extends Component {

  // state = {
  //   pokemon: []
  // }
  //will run after the markup has been rendered
  // componentDidMount () {
  //   axios.get('https://pokeapi.co/api/v2/pokemon')
  //   .then( ({data : {results}}) => {
  //     console.log(results)
  //     this.setState({pokemon: results})
  //   })
  //   .catch(error => console.error(error))
  // }

  // handleGetPokemon = url => {
  //   console.log(url)
  // }

  state = {
    search: '',
    movie: {},
    watchlist: []
  }

  handleInputChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSearch = event => {
    event.preventDefault()
    console.log(this.state.search)
    axios.get(`http://www.omdbapi.com/?t=${this.state.search}&apikey=trilogy`)
    .then( ({data: movie}) => {
      this.setState({search: '', movie: movie})
      console.log(this.state.movie)
    })
    .catch(error => console.error(error))
  }

  handleAddToWatchlist = () => {
    let watchlist = JSON.parse(JSON.stringify(this.state.watchlist))
    watchlist.push(this.state.movie)
    this.setState({watchlist, movie: {}})
  }
  render(){

    return(
      // <>
      // <h1>Hello World</h1>
      // <div>
      //   {this.state.pokemon.map(pokemon => {
      //     return (
      //       <>
      //       <p>{pokemon.name}</p>
      //       <button onClick = {() => this.handleGetPokemon(pokemon.url)}>More Info</button>
      //       </>
      //     )
      //     })
      //   }
      // </div>
      // </>
      <>
      <div className="container">
        <div className="row">
      <form className = "col-6">
        <div className="form-group">
          <label htmlFor="movie">Search Moive</label>
          <input name = "search" onChange = {this.handleInputChange} type="text" className="form-control" id="movie" aria-describedby="movieHelp" value = {this.state.search}/>
          <small id="searchHelp" className="form-text text-muted">Find a Movie!</small>
        </div>
        <button onClick = {this.handleSearch}type="submit" className="btn btn-primary">Search</button>
      </form>

      <div className = "col-6">
        { this.state.movie.Title ? <Card 
          title = {this.state.movie.Title}
          actors = {this.state.movie.Actors}
          poster = {this.state.movie.Poster}
          plot = {this.state.movie.Plot}
          director = {this.state.movie.Director}
          handleAddToWatchlist = {this.handleAddToWatchlist}
        /> : ''}
      </div>

      </div>
      <div className="row">
        <div className="col-12">
          <h1>Watch List:</h1>
          <ul>
            {this.state.watchlist.map(movie => <li>{movie.Title}</li>)}
          </ul>
        </div>
      </div>
      </div>
      </>
      
    )
    
  }
}

export default App
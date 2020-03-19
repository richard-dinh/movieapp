import React, { Component } from 'react'
import axios from 'axios'
import Jumbotron from './components/Jumbotron'
import Inputbar from './components/Inputbar'
import Card from './components/Card'
class App extends Component {

  state = {
    watchlist: [],
    movie: {},
    title: ''
  }

  handleInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleSearchMovie = event => {
    event.preventDefault()
    axios.get(`http://www.omdbapi.com/?t=${this.state.title}&apikey=trilogy`)
      .then(({ data: movie }) => {
        console.log(movie)
        this.setState({ movie, title: '' })
      })
  }

  handleAddToWatchlist = () => {
    let watchlist = JSON.parse(JSON.stringify(this.state.watchlist))
    watchlist.push(this.state.movie)
    this.setState({ watchlist, movie: {} })
  }

  handleDeleteMovie = i => {
    let watchlist = JSON.parse(JSON.stringify(this.state.watchlist))
    watchlist.splice(i, 1)
    this.setState({ watchlist })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Jumbotron/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
           <Inputbar
           title = {this.state.title} 
           handleInputChange = {this.handleInputChange}
           handleSearchMovie = {this.handleSearchMovie}
           />
           
            {this.state.movie.Title ?
              <Card 
                poster = {this.state.movie.Poster}
                title = {this.state.movie.Title}
                director = {this.state.movie.Director}
                handleAddToWatchList = {this.handleAddToWatchlist}
              /> : null}
          </div>
          <div className="col-md-6">
            <h4>Your Watchlist</h4>
            <ul className="list-group">
              {
                this.state.watchlist.map((movie, i) => (
                  <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                    {movie.Title}
                    <button onClick={() => this.handleDeleteMovie(i)} className="btn btn-danger">x</button>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App

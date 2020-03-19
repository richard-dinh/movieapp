import React from 'react'

const Card = props => {
  return (
    <div className="card">
      <img src={props.poster} className="card-img-top" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">Directed by {props.director}</p>
        <button className="btn btn-success" onClick={props.handleAddToWatchlist}>Add To Watchlist</button>
      </div>
    </div>
  )
}

export default Card
import React from 'react'

const Inputbar = props => {
  return (
    <>
    <h4>Search For A Movie</h4>
    <form>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          name="title"
          value={props.title}
          onChange={props.handleInputChange} />
      </div>
      <button className="btn btn-primary" onClick={props.handleSearchMovie}>Search Movie</button>
    </form>
    </>
  )
}

export default Inputbar
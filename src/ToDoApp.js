import React, {Component} from 'react'
import Jumbotron from './components/Jumbotron'
import Inputbar from './components/Inputbar'
import './App.css'
class App extends Component {
  
  // state = {
  //   numbers: [1, 2, 3, 4, 5],
  //   strings: ['one', 'two', 'three', 'four', 'five'],
  //   number: ''
  // }

  // handleInputChange = event => {
  //   this.setState({[event.target.name]: event.target.value})
  // }

  // handleAddNumber = event => {
  //   event.preventDefault()
  //   //Must create a new instance of the array without mutating the state. That's why we stringify then parse the array in state
  //   let tempArr = JSON.parse(JSON.stringify(this.state.numbers))
  //   tempArr.push(parseInt(this.state.number))
  //   this.setState({numbers: tempArr, number: ''})
  // }

  // handleDelete = i => {
  //   let tempArr = JSON.parse(JSON.stringify(this.state.numbers))
  //   tempArr.splice(i, 1)
  //   this.setState({numbers: tempArr})
  // }
  // render(){
  //   return(
  //     <>
  //       <h1>Hello World</h1>
  //       <form>
  //         <p>
  //           <label htmlFor = "number">Number</label>
  //           <input 
  //             type="text"
  //             name="number"
  //             value= {this.state.number}
  //             onChange = {this.handleInputChange}
  //           />
  //         </p>
  //         <button onClick = {this.handleAddNumber}>Add Number</button>
  //       </form>
  //       <ul>{
  //         // the map has has 2 variables, the item itself and i (which increments up)
  //         this.state.numbers.map( (number, i) => <li key={i}>{number} <button onClick = { () => this.handleDelete(i)}>x</button></li>)
  //       }</ul>
  //       <p>{this.state.strings}</p>
  //     </>
  //   )
  // }

  state = {
    list: [],
    listItem: '',
    empty: <li>No List Items to Display</li>
  }
  
  handleInputChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    let tempArr = JSON.parse(JSON.stringify(this.state.list))
    tempArr.push(this.state.listItem)
    if(this.state.list.length<=0){
      this.setState({empty: ''})
    }
    this.setState({list: tempArr, listItem: ''})
  }

  handleRemove = i => {
    let tempArr = JSON.parse(JSON.stringify(this.state.list))
    tempArr.splice(i, 1)
    if(tempArr.length<=0){
      this.setState({ empty:<li>No List Items to Display</li> })
    }
    this.setState({list: tempArr})
  }

  handleIsDone = event => {
    console.log(event.target)
    if(event.target.classList.contains('isDone')){
      event.target.classList.remove('isDone')
    }
    else{
      event.target.classList.add('isDone')
    }
  }

  render() {
    return (
      <>
        <Jumbotron />
        <div className="container">
          <div className="row">
            <div className="col-8">
              {/* Search here */}
              <Inputbar 
              handleInputChange = {this.handleInputChange}
              handleSubmit = {this.handleSubmit}
              list = {this.state.list}
              listItem = {this.state.listItem}
              />
            </div>
            <div className="col-4">
              <ul className = "list">
                {this.state.empty}
                {
                  this.state.list.map( (item, i) => <li onClick = {this.handleIsDone} key = {i}>{item}<button onClick = {() => this.handleRemove(i)}>x</button></li>)
                }
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }
}


export default App

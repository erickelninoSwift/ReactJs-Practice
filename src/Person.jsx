import React, { Component } from 'react'
import "./App.css"

export class Person extends Component {

    constructor(props)
    {
      super()
      
    }

  render() {

    return (
      <div className='App'><h1>Class based Component Name: 

        {this.props.name} <br></br>Surname: {this.props.Surname} </h1>

      <p>Message : {this.props.message}</p>

      </div>)
  }

}

export default Person
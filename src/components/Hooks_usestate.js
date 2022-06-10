import React, { Component } from 'react'

export default class Hooks_usestate extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count :0
    }
  }
  
  Incresing=()=>{
this.setState({count :this.state.count+1})
  }
  
  render() {
    return (
      <div>
      <h1>{this.state.count}</h1>
        <button onClick={this.Incresing}>Increasing</button>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class Event_handler_binding extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
      this.Increasing=this.Increasing.bind(this)
    }
    
    Increasing=()=>{
       this.setState({ count : this.state.count+1})
    }
  
    render() {
    return (
      <div>
      <h1>{this.state.count}</h1>
      <button onClick={this.Increasing}>Increase</button>
      </div>
    )
  }
}

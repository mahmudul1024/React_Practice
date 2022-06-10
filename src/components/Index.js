import React, { Component } from 'react'

export default class Event_handleClass extends Component {
 
    constructor(props) {
      super(props)
    
      this.state = {
         changedValue : ''
      }
    }
    
    
    
    handledOnchanged=(e)=>{
       this.setState({changedValue: e.target.value},()=>{
        console.log(this.state.changedValue)

       }) 
    }
 
 
    render() {
    return (
      <div>
      <input type={"text"} onChange={this.handledOnchanged}></input>
      <p >{this.state.changedValue}</p>
      </div>
    )
  }
}

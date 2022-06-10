import React, { Component } from 'react'

export class State extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       count : 1
    }
  }

  handleIncriment=()=>{
    this.setState({count : this.state.count+1})
  }
  

  handleDecriment=()=>{
    this.setState({count : this.state.count-1})
  }
  

  
  
    render() {
        const {count}=this.state;
    return (
      <div >
        <h1 className='headingStyle'>Count : {count} </h1>
        <button className='head' onClick={this.handleIncriment}>+</button>
        <button className='head' onClick={this.handleDecriment} disabled={count==0 ? true: false}>-</button>

      </div>
    )
  }
}

export default State

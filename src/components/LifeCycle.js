import React, { Component } from 'react'


//Mounting-> contructor->render->componentDidmount(usually used for ApI call recommended)
//Updating->state/props->render->
//unmounting



export default class LifeCycle extends Component {
  
  constructor(props) {
    super(props)
    console.log("Constructor")
  
    this.state = {
        //state variable should be declared here
       count:0
    }
  }
  

componentDidMount(){
    console.log("DidMount recommended for Api call ,Because it is being called only once")
}

componentDidUpdate(){
    console.log("component Did Update returns void")
}

shouldComponentUpdate(){
    console.log("should component Update returns boolean always")
    return true
}

handleIncrement=()=>{
    this.setState({count:this.state.count+1})
}

  
    render() {
        {console.log("Rendering")}
    return (
      <div>
      <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    )
  }
}

import React, { Component } from 'react'
import HomePage from './HomePage'
import Login from './Login'


export default class Condi_Rendering extends Component {
 
    constructor(props) {
      super(props)
    
      this.state = {
         islogedin: false
      }
    }
    
 
 
    render() {
    let element;
    // if(this.state.islogedin){
    //     element= <HomePage />
    // }
    // else{
    
    //         element= <Login />
    //     }

    // element= this.state.islogedin ? <HomePage /> : < Login />;
        return  <div>
        { this.state.islogedin ? <HomePage /> : < Login />}
        </div>

    }
  
}

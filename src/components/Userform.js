import React, { Component, createRef } from 'react'
//Ref helps us to directly manipulate DOM
//Ref er maddhome amra input field er value pete pari
//chaile style change korte pari
export default class Userform extends Component {

//Constructor

constructor(props) {
  super(props)
  //1.create Ref
  this.UsernameRef=createRef()

  this.state = {
     
  }
}

//access form attribute by handlesubmit 

handleSubmit=(event)=>{
event.preventDefault()
console.log(this.UsernameRef.current)
//3..here we accesed finally the dom element
console.log(this.UsernameRef.current.value)
//3..here we accesed finally the dom element
console.log(this.UsernameRef.current.style.backgroundColor="red")
console.log(this.UsernameRef.current.style.color="white")


}




  render() {
    return (
      <form onSubmit={this.handleSubmit}>
       
        <div className='form-field'>
        <label htmlFor='userName'>Username</label>
        {/* 2.. ekhane link kore dite hobe ref k */}
        <input type="text" id='userName' ref={this.UsernameRef}></input>
        </div>

        <div className='form-field'>
        <label htmlFor='password'>Password</label>
        <input type="password" id='password'></input>
        </div>

        <button type='submit'>Register</button>


      </form>
    )
  }
}

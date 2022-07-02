import React, { useState } from 'react'
import Component_2 from './Component_2'
const Component_1 = () => {

  const [name ,setName]=useState("Hasan")
  return (
    <div>
      <h1>I am Component 1 <small className='sm'>{name} </small></h1>
    <Component_2> </Component_2>
    
      
    </div>
  )
}

export default Component_1

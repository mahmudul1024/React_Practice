import React, { useState } from 'react'
import Component_2 from './Component_2'
const Component_1 = () => {

  const [user ,setName]=useState({id:1400 ,name:"Hasan"})
 
  return (
    <div>
    <Component_2 user_Name={user} > </Component_2>
    
      
    </div>
  )
}

export default Component_1

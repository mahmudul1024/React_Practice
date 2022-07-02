import React, { useContext } from 'react'
import Component_3 from './Component_3'
import { UserContext } from './UseerContext'

const Component_2 = () => {
    
const con2=useContext(UserContext)

  return (
    <div>
    <h1>I am Component_2 : {con2.quantity} </h1>

      <Component_3 ></Component_3>
    </div>
  )
}

export default Component_2

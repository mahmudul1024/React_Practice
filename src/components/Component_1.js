import React, { useState ,useContext } from 'react'
import Component_2 from './Component_2'
import { UserContext } from './UseerContext'

const Component_1 = () => {
const [user,setName]=useState({id:101, name :"hasan"})
const [quantity,setQuantity]=useState(1500000)
  return (
    <div>
    <h1>I am Component_1  :  <small className='sm'>{user.name} {quantity}</small></h1>
    <UserContext.Provider value={{user,quantity }}>
   
    <Component_2 ></Component_2>
    </UserContext.Provider>
    </div>
  )
}

export default Component_1

import React, { useContext, useState } from 'react'
import Component_4 from './Component_4'
import { UserContext } from './UseerContext'


const Component_3 = () => {

  const con=useContext(UserContext)
  console.log(con)
  return (
    <div>
    <h1>I am Component_3  <small className='sm'>{con.user.name}  {con.user.id}</small></h1>

      <Component_4 ></Component_4>
    </div>
  )
}

export default Component_3

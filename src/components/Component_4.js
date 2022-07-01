import React,{useContext} from 'react'
import { UserContext } from './UseerContext'
const Component_4 = () => {
    const {user,text} =useContext(UserContext)
    console.log(user)
    console.log(text)

  return (
    <div>
    <h3>{user.name}</h3>
    <h3>{user.id}</h3>
    <h3>{text}</h3>


    </div>
  )
}

export default Component_4

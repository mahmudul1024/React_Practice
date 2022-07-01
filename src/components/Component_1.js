import React ,{useState} from 'react'
import Component_2 from './Component_2'
import { UserContext } from './UseerContext'



//we know how to send through props
//here we just destructured user=props.user


// Component_1->Component_2->Component_3->Component_4
// componet 1 theke 4 a data pass korte hole sobgula hoye jete
//hoy ,but useContext hook use korle 2 and 3 use korte hobe na
//directly access kora jabe from parent to any child

const Component_1 = () => {

const [user, setUser]=useState({id:101 ,name:"hasan"})
const [text, setText]=useState("hello I am text")
 
return (
    //pass value as object thats why double {}
    //after passing or wrapping it here we can access this value on 
    //each of dependent child directly
    <UserContext.Provider value={{user, text}}>
      <Component_2 ></Component_2>
    </UserContext.Provider>
  )
}

export default Component_1

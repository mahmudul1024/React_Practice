import React ,{useState} from 'react'
import Component_2 from './Component_2'
import Component_4 from './Component_4'

//we know how to send through props
//here we just destructured user=props.user


// Component_1->Component_2->Component_3->Component_4
// componet 1 theke 4 a data pass korte hole sobgula hoye jete
//hoy ,but useContext hook use korle 2 and 3 use korte hobe na
//directly access kora jabe from parent to any child

const Component_1 = () => {

const [user, setUser]=useState({id:101 ,name:"hasan"})
  return (
    <div>
      <Component_2 user={user}></Component_2>
    </div>
  )
}

export default Component_1

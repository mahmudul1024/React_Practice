import React ,{useState} from 'react'
import Todos from './Todos'
import Style from './Home.module.css'
import Newtodo from './NewTodo'
import { v4 as uuidv4 } from 'uuid';

// remains all the todo list 


const Home = () => {

  const [transferedTodos, setTransferedTodo]=useState([])

// console.log("here will be transferedTodos")
// console.log(transferedTodos)

const handleTransfer=(e)=>{
  console.log("Hi");
  
    setTransferedTodo((prevTodos )=>{
      return [...prevTodos,{id:uuidv4(), e}]
    })

 console.log(transferedTodos)

}

// const handleRemoveTodo=(id)=>{
//   const filteredTodos=transferedTodos.filter((tran)=>
//      tran.id !== id)
//     setTransferedTodo(filteredTodos)
  
// }
const handleRemoveTodo=(id)=>{
  
    setTransferedTodo((previousTodos)=>{
      const filteredTodos=previousTodos.filter((tran)=>
     tran.id !== id)
     return filteredTodos;
    })
  
}



  return (
    <div className={Style.container}>
    {/* <h1 >{dummies[0].title}</h1> */}
    <h1 style={{color : "wheat"}}>TODO APP</h1>
    {/* parent er moddhe child print */}
    <Newtodo onTransfer={handleTransfer} ></Newtodo>

    {/* child NewTodo theke data props er maddhome parents er State Variable
    transferedTodos a niye ashte hobe */}

    <Todos todos_prop={transferedTodos} 
    onRemoveTodo={handleRemoveTodo}></Todos>
    </div>
  )
}

export default Home

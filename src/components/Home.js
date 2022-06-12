import React,{useState} from 'react'
import Todos from './Todos'
import style from './Home.module.css'
import NewTodo from './NewTodo' 
import { v4 as uuidv4 } from 'uuid';


//untill 30:22


const Home = () => {

const [currTodos ,setTodos]=useState([])

const handleAddTodo=(todo)=>{

setTodos((prevTodos)=>{
  return [...prevTodos,{id:uuidv4(), todo}]
})
console.log(currTodos)
}

const handleRemovetodo=(id)=>{
  
    setTodos((previousTodos)=>{
const filteredTodos=previousTodos.filter((todo)=> todo.id != id)
      return filteredTodos
    })
}



  return (
    <div className={style.container}>
    <h1 style={{color:"white"}}>Scheduling App</h1>
    {/* receive todo from child to parent when clicked */}
    <NewTodo onAddTodo={handleAddTodo}></NewTodo>
    <Todos todos={currTodos} onRemoveTodo={handleRemovetodo}></Todos>  
    </div>
  )
}

export default Home

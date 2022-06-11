import React,{useState} from 'react'
import Todos from './Todos'
import style from './Home.module.css'
import NewTodo from './NewTodo' 


//untill 30:22


const Home = () => {

const [todos ,setTodos]=useState([])

  return (
    <div className={style.container}>
    <h1 style={{color:"white"}}>Todo App</h1>
    <NewTodo></NewTodo>
    <Todos todos={todos}></Todos>  
    </div>
  )
}

export default Home

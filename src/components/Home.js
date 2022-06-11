import React,{useState} from 'react'
import NewTodo from './NewTodo';
import Todos from './Todos';

const dummytodos=["todo_1", "todo_2" ]

const Home = () => {
const [todos,setTodos]=useState(dummytodos)

const handleNewtodo=(newtodo)=>{
  setTodos([...todos,newtodo])
}


  return (
    <div>
    <NewTodo   OnTodo={handleNewtodo}></NewTodo>
     <Todos todos={todos}/>
    </div>
  )
}

export default Home

import React,{useState} from 'react'

const NewTodo = (props) => {
const [todo,setTodo]=useState('')

const handledInputChange=(e)=>{
    setTodo(e.target.value)
}
const handledSubmit=(e)=>{
    e.preventDefault()
    props.OnTodo(todo)
}

  return (
    <form onSubmit={handledSubmit}>
<label htmlFor='todo'>New todo  :</label>
<input type={'text'} id="todo" name='todo' 
            value={todo} onChange={handledInputChange} ></input>


   <button>Add Todo</button>
   
    </form>
  )
}

export default NewTodo

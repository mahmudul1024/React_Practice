import React from 'react'
import Style_Todo from './Todo_final.module.css'

const Todo = (props) => {
    const {title ,desc}=props.single_todo_props
    const {id}=props
  
    
const handleDelete=(id)=>{
 props.onRemovetodo_2(id)
}
  
  return (
    <article className={Style_Todo.todo}>
      <div>
      <h3>{title}</h3>
      <p>{desc}</p>

      </div>

      <button className={Style_Todo.btn} onClick={()=>{
        handleDelete(id)
      }}>
        <i className="fa fa-trash 2x"></i>
      </button>
    </article>
  )
}

export default Todo

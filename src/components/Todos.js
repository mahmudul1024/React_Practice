import React from 'react'
import Todo from './Todo'
import style from './Todo.module.css'

//props used to pass from parent component to child component
const Todos = (props) => {

    console.log(props.todos)
  return (
    
    <section className={style.todos}>
      {
        props.todos.map((todo)=>
            <Todo todo={todo.todo} key={todo.id} 
            id={todo.id} onRemoveItem={props.onRemoveTodo}></Todo>
        )
      }

    </section>
  )
}

export default Todos

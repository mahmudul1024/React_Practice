import React from 'react'
import Todo from './Todo'

import Style_todos from './Todo.module.css'

// rule :props calling should be on curly brackets

const Todos = (props) => {

  
  return (
    <section className={Style_todos.todos}>
  {props.todos_prop.map((todo) =>
  
 
<Todo single_todo_props={todo.e} key={todo.id} id={todo.id} 
onRemovetodo_2={props.onRemoveTodo}></Todo>

)
}   
    </section>
  )
}

export default Todos

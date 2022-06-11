import React from 'react'

const Todo = (props,index) => {
  return (
    <p key={index}>
      {props.todo}
    </p>
  )
}

export default Todo

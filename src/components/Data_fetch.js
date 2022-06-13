import React, { useEffect, useState } from 'react'

const Data_fetch = () => {
const [todos,setTodos]=useState(null)

useEffect(()=>{
    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
.then((res)=>{return res.json()

}).then((data)=>{
    setTodos(data)
    
})
    }, 500);

},[])

  return (
    <div>
      <h1>Todos</h1>
      {todos &&
        todos.map((todo)=>{
            return <p key={todo.id}> {todo.title}</p>
        })
      }
    </div>
  )
}

export default Data_fetch

import React, { useEffect, useState } from 'react'

const loadingMessage=<p>todo is loading currently</p>

const Data_fetch = () => {
const [todos,setTodos]=useState(null)
const [isLoading,setisLoading]=useState(true)
const [error,setError]=useState(null)

useEffect(()=>{
    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
.then((res)=>{
    if(!res.ok){
        throw Error("fetching is not successful")
    }
    else{
        return res.json()
    }

}).then((data)=>{
    setTodos(data)
    setisLoading(false)
    setError(null)
    
}).catch((error)=>{
    setError(error.message)
    setisLoading(false)
})
    }, 2000);

},[])


const todoElement=todos &&
todos.map((todo)=>{
    return <p key={todo.id}> {todo.title}</p>
})

  return (
    <div>
      <h1>Todos</h1>
      {error && <p>{error}</p>}
        {isLoading && loadingMessage}


      {
todoElement
      }
    </div>
  )
}

export default Data_fetch

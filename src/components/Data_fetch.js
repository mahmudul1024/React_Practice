import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'

const Data_fetch = () => {
const {datas ,error,isLoading}=useFetch("https://jsonplaceholder.typicode.com/todos")

const loadingMessage=<p>todo is loading currently</p>
const errorMessage=<p>{error}</p>


const todoElement=datas &&
datas.map((todo)=>{
    return <p key={todo.id}> {todo.title}</p>
})

  return (
    <div>
      <h1>Todos</h1>
      {error && <p>{errorMessage}</p>}
        {isLoading && loadingMessage}


      {
todoElement
      }
    </div>
  )
}

export default Data_fetch

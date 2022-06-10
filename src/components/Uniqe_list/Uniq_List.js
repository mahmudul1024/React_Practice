import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const Todos=[
    {
        "id":uuidv4(),
   "title" : "title_1",
   "desc"  : "desc_1"
    },
   
    {
        "id":uuidv4(),
       "title" : "title_2",
       "desc"  : "desc_2"
    }   
   
   ];


const Uniq_List = () => {
  return  <div> 

  {Todos.map((todo)=>{
    return <div key={todo.id}>
        <h1>{todo.title}</h1>
        <p>{todo.desc}</p>
    </div>
  })}



    </div>
  
};

export default Uniq_List

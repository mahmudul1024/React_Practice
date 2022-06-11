import React,{useState} from 'react'
import style from './Newtodo.module.css'

const NewTodo = () => {
//we will change this variable todo such as todo.title
    const [todo,setTodo]=useState({title:'',desc:'' })
    const {title,desc}=todo 

const handleChange=(e)=>{
const name=e.target.name
setTodo((oldTodo)=>{
    return {...oldTodo,[name]:e.target.value}
})
}


const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(todo)
    setTodo({title:"" ,desc:""})

}

  return (
    <form className={style.form} onSubmit={handleSubmit}>
<div className={style["form-field"]}>
    <label htmlFor='title'>Title :</label>
    <input type="text" id="title"
     name='title' value={title} onChange={handleChange}></input>
</div>

<div className={style["form-field"]}>
    <label htmlFor='desc'>Description :</label>
    <textarea type="text" id="desc" 
    name='desc' value={desc} onChange={handleChange}></textarea>
</div>

<button type='submit' >Add todo</button>


    </form>
  )
}

export default NewTodo

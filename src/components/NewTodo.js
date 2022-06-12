import React,{useState} from 'react'
import style from './Newtodo.module.css'

const NewTodo = (props) => {
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
    props.onAddTodo(todo)

    setTodo({title:"" ,desc:""})

}

  return (
    <form className={style.form} onSubmit={handleSubmit}>
<div className={style["form-field"]}>
    <label htmlFor='title'>Schedule :</label>
    <input type="text" id="title"
     name='title' value={title} onChange={handleChange}></input>
</div>

<div className={style["form-field"]}>
    <label htmlFor='desc'>Description :</label>
    <textarea type="text" id="desc" 
    name='desc' value={desc} onChange={handleChange}></textarea>
</div>

<button type='submit'>Add Schedule</button>


    </form>
  )
}

export default NewTodo

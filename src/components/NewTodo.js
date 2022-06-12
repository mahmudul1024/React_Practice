import React,{useState} from 'react'

import Style_Newtodo from './Newtodo.module.css'

const NewTodo = (props) => {
   

const [new_title_or_desc,setNewtitle_or_desc]=useState({title:"", desc:""})
const {title, desc}=new_title_or_desc;




const handleSubmit=(e)=>{

    e.preventDefault()
    // Current state variable has been sent to the Parent Home
    // by method calling-> child to Parent
    props.onTransfer(new_title_or_desc)
    
    
    setNewtitle_or_desc({title:"" ,desc:""})
    
}

const handleChange=(e)=>{
const fileName=e.target.name
const value = e.target.value;
setNewtitle_or_desc(values => ({...values, [fileName]: value}))

}



  return (
    <form className={Style_Newtodo.form} onSubmit={handleSubmit}>
    <div className={Style_Newtodo["form-field"]} >
        <label htmlFor='title'>Title</label> 
        <input type={"text"} id="title" name='title' 
        value={title} onChange={handleChange}></input>
        
    </div>

    <div className={Style_Newtodo["form-field"]}>
        <label htmlFor='desc'>Description</label> 
        <textarea type={"text"} id="desc" name='desc' 
         value={desc} onChange={handleChange}></textarea>
        
    </div>

    <button type='submit' >Add Todo</button>
      
    </form>
  )
}

export default NewTodo

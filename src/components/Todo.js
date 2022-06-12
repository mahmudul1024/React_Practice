import React from 'react'
import style from './Todo_final.module.css'

const Todo = (props) => {
const {title,desc}=props.todo  ;
const {id}=props;


const handlebtn=(id)=>{
    props.onRemoveItem(id)
}



    return (
    <article className={style.todo}>
    <div>
    <h3>{title}</h3>
    <h3>{desc}</h3>
    </div>
 
    <div>
        <button className={style.btn} onClick={()=>{
            handlebtn(id)
        }}>
            <i className='fa fa-trash fa-2x'></i>
        </button>
    </div>
    </article>
  )
}

export default Todo

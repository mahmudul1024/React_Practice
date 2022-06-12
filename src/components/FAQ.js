import React,{useState} from 'react'
import Style from './faq.module.css'

const FAQ = (props) => {
    const [toggle,setToggle]=useState(false)
 const {title,desc}=props
  
  return (
    <article className={Style.faq}>
    <div>
        <h4>{title}</h4>
        <button onClick={()=>{
            setToggle(!toggle)
        }}>
            {toggle ? "-":"+"}
        </button>
    </div>
   {toggle &&  <div>{desc}</div>}
      
    </article>
  );
  
}

export default FAQ

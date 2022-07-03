import React,{useState} from 'react'
import { Blogs_Data } from './Blogs_Data.js'
import { Link } from 'react-router-dom'

const Blogs = () => {
    const [blogs, setData]=useState(Blogs_Data)
    const truncateString=(str,num)=>{
        if(str.length>num){
            return str.slice(0,num) + "..."

        }
        else {
            return str
        }

    }
  return (
    <div>
      <h1>Blogs Page</h1>
      <section>
        {   blogs.map((blog)=>{
            const {id,title,body}=blog
            return <article key={id}>
            <h3>{title}</h3>
            <p>{truncateString(body,100)}</p>
            
            <Link to={title}  > More </Link>
        
            </article >
        })}
      </section>

    </div>
  )
}

export default Blogs

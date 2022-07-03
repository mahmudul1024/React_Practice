import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Blogs_Data } from './Blogs_Data'

const Blog = () => {

    const [bodydata,setBodydata]=useState("")
    const {title}=useParams()
    useEffect(() => {
        Blogs_Data.filter((blog)=>
            blog.title===title
        )
        setBodydata(Blogs_Data[0].body)
    
    }, []);



  return (
    <div>
     <h1> {title}</h1>
     <p>{bodydata.slice(0,500)}</p>
     <p>{bodydata.slice(501,2000)}</p>
    </div>
  )
}

export default Blog

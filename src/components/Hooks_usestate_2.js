import React,{useState} from 'react'

export default function Hooks_usestate_2() {
  
const [count,setCount]=useState(0)


 const Increasing=()=>{
     setCount(count+1);
  }
  
    return (
    <div>
    <h1>count : {count}</h1>
      <button onClick={Increasing}>Incrementing</button>
    </div>
  )
}

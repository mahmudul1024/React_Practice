import React, { useState, useEffect } from 'react'

const UseEffect_Example = () => {
 const [count ,setCount]=useState(0)
 const [isLoading,set_isLoading]=useState(false)
// useEffect er vitore anonymous function must
// useEffect(()=>{
// console.log("useeffect")
// },[])
// render only once now
// if we need to fetch something from ApI ,we want it to fetch 
// only for once ,not everytime when we render .so useeffect came handy


// for dependency :jodi count er state /value change hoy
//tokhon chacchi je useeffect call hok ...then
useEffect(()=>{
    console.log("useeffect")
    },[count])

  return (
    <div>
    {console.log("rendering")}

  <h1>Count : {count}</h1>
  <button onClick={()=>setCount((count)=>count+1)}>+</button>
  <button onClick={()=>set_isLoading(!isLoading)}>loading</button>

    </div>
  )
}

export default UseEffect_Example

import React from 'react'
import Child_to_Parent from './Child_to_Parent'

//Passing method as props
//State lifting
//child to parent data passing (bottom to top)

function App() {

    const data="I am from Parent App" 

const HandledData=(childdata)=>{
       
    console.log(childdata)
    
}

  return (
    <div >
   < Child_to_Parent data={data} OnchildData={HandledData}/>
    </div>
  )
}

export default App

import React from 'react'


const Child_to_Parent = (props) => {
    const data ="I am from child Component"
    props.OnchildData(data)
  return (
    <div>
      I am child component
      <p>{props.data}</p>  
                                 {/* data came from parent to child */}
    </div>
  )
}

export default Child_to_Parent

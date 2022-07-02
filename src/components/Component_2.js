import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
const Component_2 = (props) => {
  //detructure
  const {id,name}=props.user_Name
  console.log(props.user_Name)
  return (
    <div>
    <h1>I am Component 2</h1>
    
      <h1 className='inl'> {id} {name}</h1>
      <h1 className='inl'></h1>
      
    </div>
  )
}

Component_2.propTypes={
  name:propTypes.string,
  id:propTypes.number
}

// Component_2.defaultProps={
//   user_Name:"default name",
//   user_id: 0
// }


export default Component_2

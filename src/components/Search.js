import React, { useEffect, useState } from 'react'

const Search = (props) => {

    const [searchText ,setSearch]=useState("")
  const handleChangeSearch=(e)=>{
        setSearch(e.target.value)
       
  }

  useEffect(()=>{
    props.onSearch(searchText)
},[searchText])
  
  
  
  
    return (
    <div style={{textAlign:"center"}}>
      <input type="text" placeholder='Search Country' 
      value={searchText} onChange={handleChangeSearch}></input>
    </div>
  )
}

export default Search

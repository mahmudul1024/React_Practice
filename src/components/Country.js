import React from 'react'
import Style from './Country.module.css'


const Country = (props) => {
    
    const {name,flags,capital,population ,area}=props.country


    // jeta click korbo setar nam or id parent component a send korbo jekhane 
    // sob data array te ase, jeno ai nam ta bade sob nam update hisebe pai
const handleRemove=(name)=>{
      props.handleCountry(name)
}
// props is an object 


  return (
    <article className={Style.country}>
      <div>
        <img src={flags.png} alt={name.common} className={Style.flag}></img>
        <h3>{name.common}</h3>
        <h3>{population}</h3>
        <h3>{capital}</h3>
        <h3>{area}</h3>
        <button className={Style.btn}
         onClick={()=>{
          handleRemove(name.common)
         }}>Remove Country</button>
      </div>
    </article>
  )
}

export default Country

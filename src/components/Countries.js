import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Country from './Country';
import Style from './Countries.module.css'

const Countries = (props) => {
  return (
    <section className={Style.countries}>
{props.countries.map((country)=>{
    {/* we created an id on the existing countryNew object */}
    {/* countryNew and country both are same just CountryNew got an extra feature of id */}
  const countryNew = {country,id:uuidv4() }
{/* we passed id also to the next child */}
  return <Country {...countryNew} key={countryNew.id}
  handleCountry={props.onRemoveCountries}></Country>
})}
    </section>
  )
}

export default Countries

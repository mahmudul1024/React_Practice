import React,{useState,useEffect} from 'react'
import Countries from './Countries'
import './App.css'
import Search from './Search'




const url="https://restcountries.com/v3.1/all"

const Main = () => {
const [isLoading,setIsLoading]=useState(true)
const [error,setError]=useState(null)
const [countries,setCountries]=useState([])
// countries received as Arrays of objects
const [filteredCountries ,setfiltered]=useState(countries)

const fetchData=async(url)=>{
    setIsLoading(true)
    try{
    const response=await fetch(url)
    const data=await response.json()
    setCountries(data)
    setfiltered(data)


    setIsLoading(false)
    setError(null)
   
}catch(error){
    setIsLoading(false)
    setError(error)

}}

const handleRemCountries=(nam)=>{
  const filter=filteredCountries.filter((countr)=>
     countr.name.common !==nam
   )
  setfiltered(filter)
}

//we want datas to be fetched just once
useEffect(()=>{
fetchData(url)

},[])

const handleSearch=(searchValue)=>{
 let valu=searchValue.toLowerCase();
 const newcountries=countries.filter((country)=>{
   const countryName=country.name.common.toLowerCase();
   return countryName.startsWith(valu)
   
 } )
 setfiltered(newcountries)
 
}

countries && console.log(countries)

  return (
    <div >
    <h1> Country App</h1>
    <Search onSearch={handleSearch}/>
    {isLoading && <h2>Loading...</h2>}
    {error && <h2>{error.message}</h2>}
{/* countrie data er vitor data theke thakle Countries class 
call hobe jekhane flag dekhabo 
countries ekhane array hisebe ache so array hisebe catch korte hobe 
props diye */}
{countries && <Countries 
countries={filteredCountries}  onRemoveCountries={handleRemCountries}/>}

    </div>
  )
}

export default Main

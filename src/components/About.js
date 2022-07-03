import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate=useNavigate()
  return (
    <div>
      <h1 className='head'>  About my last Trip to Dhaka</h1>
        <p>
        On the lookout for pants to suit a special occasion or to complete your wardrobe? Then have a look around ABOUT YOU. Our large selection of pants includes trendy boyfriend jeans and classic cloth pants. Find the right size in any brand with the help of our size advisor. Just enter the size of your own pair of pants and find the manufacturer's specific size for a particular model with a simple click of the button. It doesn't get any easier than this. 
        </p>
        <br/>
        <button onClick={()=>{
          navigate("/Home")
        }}>Go To Home</button>

     
    </div>
  )
}

export default About

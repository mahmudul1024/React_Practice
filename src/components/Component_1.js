import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Eroor from './Eroor'
import Navbar from './Navbar'

//add those link on browser
// http://localhost:3000/Home
//http://localhost:3000/About


const Component_1 = () => {
  return (
    <div>
     <BrowserRouter>
      <Navbar/>
     
      <Routes>
      <Route path= "/Home"  element={<Home/>}></Route>
      <Route path= "/About"  element={<About/>}></Route>
      <Route path= "*"  element={<Eroor/>}></Route>


      </Routes>
     </BrowserRouter>


    </div>
  )
}

export default Component_1

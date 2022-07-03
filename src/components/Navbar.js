import React from 'react'
import {  NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
    <h1 className='head1'>Portfolio</h1>
      <NavLink to="/Home" className='nav-link'>Home</NavLink><br/>
      <NavLink to="/About"className='nav-link'>About</NavLink>
      <NavLink to="/Blogs"className='nav-link'>Blogs</NavLink>




    </nav>
  )
}

export default Navbar

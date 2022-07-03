import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
      <NavLink to="/Home" className='nav-link'>Home</NavLink><br/>
      <NavLink to="/About"className='nav-link'>About</NavLink>


    </nav>
  )
}

export default Navbar

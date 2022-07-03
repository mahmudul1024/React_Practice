import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
    <h1 className='head1'>Lebenslauf</h1>
      <NavLink to="/Home" className='nav-link'>Home</NavLink><br/>
      <NavLink to="/About"className='nav-link'>About</NavLink>


    </nav>
  )
}

export default Navbar

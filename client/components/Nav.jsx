import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav className='nav'>
        <Link to='/' className='app-title'><h1>SP</h1></Link>
        <Link to='/#about' className='concerts-nav-link'><h2>About</h2></Link>
        <Link to='/portfolio' className='travels-nav-link'><h2>Portfolio</h2></Link>
        <Link to='/#contact'><h2>Contact</h2></Link>
      </nav>
    </>
  )
}

export default Nav
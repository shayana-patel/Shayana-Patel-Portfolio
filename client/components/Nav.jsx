import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav className='navbar navbar-light navbar-nav nav-link'>
        <Link to='/' classname='nav-link-active'>
          <h1>SP</h1>
        </Link>
        <ul>
          <li>
            <Link to='/#about'>
              <h2>About</h2>
            </Link>
          </li>
          <li>
            <Link to='/portfolio'>
              <h2>Portfolio</h2>
            </Link>
          </li>
          <li>
            <Link to='/#contact'>
              <h2>Contact</h2>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
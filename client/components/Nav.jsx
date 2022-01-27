import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav id='navbar'className='navbar'>
        <div className='logo'>
          <h1>
            <Link to='/'>SP</Link>
          </h1>
        </div>
        <div>
          <ul>
            <li>
              <Link to='/about' title='About Shayana'>
                <h2>About</h2>
              </Link>
            </li>
            <li>
              <Link to='/portfolio' title="Shayana's Portfolio">
                <h2>Portfolio</h2>
              </Link>
            </li>
            <li>
              <Link to='/contact' title='Contact Shayana'>
                <h2>Contact</h2>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav
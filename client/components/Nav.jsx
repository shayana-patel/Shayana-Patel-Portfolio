import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to='/' className="navbar-brand">SHAYANA PATEL</Link>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav">
            {/* <li>
              <Link to="/">HOME</Link>
            </li> */}
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/portfolio">PORTFOLIO</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

      {/* <nav id='navbar'className='navbar'>
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
      </nav> */}
    </>
  )
}

export default Nav
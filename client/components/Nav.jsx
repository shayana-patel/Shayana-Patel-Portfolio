import React from 'react'
import { HashLink } from 'react-router-hash-link'

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
            <HashLink smooth to="/#home" className="navbar-brand nav-link">SHAYANA PATEL</HashLink>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className='nav-item'>
                <HashLink smooth to="/#about" className="nav-link">ABOUT</HashLink>
              </li>
              <li className='nav-item'>
                <HashLink smooth to="/#portfolio" className="nav-link">PORTFOLIO</HashLink>
              </li>
              <li className='nav-item'>
                <a href="https://shayana-patel.github.io/" target="_blank">BLOG</a>
              </li>
              <li className='nav-item'>
                <HashLink smooth to="/#contact" className="nav-link">CONTACT</HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
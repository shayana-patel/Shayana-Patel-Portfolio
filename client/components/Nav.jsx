import React from 'react'
// import { Link } from 'react-router-dom'

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
            {/* <Link to='/' className="navbar-brand">SHAYANA PATEL</Link> */}
            <HashLink smooth to="/#home" className="navbar-brand">SHAYANA PATEL</HashLink>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li>
                <HashLink smooth to="/#about">ABOUT</HashLink>
              </li>
              <li>
                <HashLink smooth to="/#portfolio">PORTFOLIO</HashLink>
              </li>
              <li>
                <a href="https://shayana-patel.github.io/" target="_blank">BLOG</a>
              </li>
              <li>
                <HashLink smooth to="/#contact">CONTACT</HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
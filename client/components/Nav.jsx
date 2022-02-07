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
              <li>
                {/* <Link to="/about">ABOUT</Link> */}
                <Link to="/#about">ABOUT</Link>
              </li>
              <li>
                {/* <Link to="/portfolio">PORTFOLIO</Link> */}
                <Link to="/#portfolio">PORTFOLIO</Link>
              </li>
              <li>
                <a href="https://shayana-patel.github.io/" target="_blank">BLOG</a>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
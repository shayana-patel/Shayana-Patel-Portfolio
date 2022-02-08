import React from 'react'

import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'

const Home = () => {

  return (
    <>
      <section id='home'>
        <div className="container-fluid bg-1 text-center">
          <h1>Shayana Patel</h1>
          <h2>Full Stack Software Developer</h2>
        </div>
      </section>
      <hr/>
      <section id='about'>
        <About />
      </section>
      <hr/>
      <section id='portfolio'>  
        <Portfolio />
      </section>
      <hr/>
      <section id='contact'>
        <Contact />
      </section>
      
    </>
  )
}

export default Home

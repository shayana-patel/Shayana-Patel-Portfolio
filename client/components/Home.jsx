import React from 'react'

import About from './About'
import Contact from './Contact'

const Home = () => {
  return (
    <>
      <section id='main'>
        <div>
          <About />
        </div>
        <div>
          <Contact />
        </div>
      </section>
    </>
  )
}

export default Home
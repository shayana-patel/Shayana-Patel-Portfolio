import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
// import About from './About'
import Contact from './Contact'
// import Portfolio from './Portfolio'
import Footer from './Footer'

const App = () => {
  return (
    <>
      <div className='App full-height'>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        {/* <Route path="/#about" element={<About/>}></Route> */}
        <Route  exact path="/contact" element={<Contact/>}></Route>
        {/* <Route path="/#portfolio" element={<Portfolio/>}></Route> */}
      </Routes>
      <Footer />
      </div>
    </>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Portfolio from './Portfolio'
import Footer from './Footer'

const App = () => {
  return (
    <>  
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
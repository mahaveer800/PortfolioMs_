import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Home'
import About from './About'

const App = () => {
  return (
    <>
    <div className="min-h-screen w-[100%] transition-colors duration-300 justify-center items-center px-12">
      <Navbar />
     <Home />
     <About />
    </div>
    </>
  )
}

export default App


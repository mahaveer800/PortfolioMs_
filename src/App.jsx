import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Home'
import About from './About'
import Skills from './Components/Skills'
import Collification from './Components/Colipfication'
import Project from './Components/Project'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
    <div className="min-h-screen w-[100%] transition-colors duration-300 justify-center items-center px-12 gap-20">
      <Navbar />
     <Home />
     <About />
     <Skills />
     <Collification />
     <Project />
     <Contact />
     <Footer />
    </div>
    </>
  )
}

export default App


import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

const App = () => {
  return (
    <>
     <Navbar/> 
     <Home/>
     <Experience />
     <Skills />
     <Projects/>
     <Contact/>
    </>
  )
}

export default App

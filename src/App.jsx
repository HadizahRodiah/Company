import React from 'react'
import './App.css'
import Home from './Home.jsx'
import Nav from './Nav.jsx'
import Service from './service.jsx'
import Collab from './Collab.jsx'
import About from './About.jsx'
import Project from './Project.jsx'

function App() {


  return (
    <>
      <Nav/>
      <Home/>
      <About/>
      <Service/>
      <Project/>
      <Collab/>
    </>
  )
}

export default App

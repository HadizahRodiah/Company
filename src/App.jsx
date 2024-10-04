import React from 'react'
import './App.css'
import Home from './Home.jsx'
import Nav from './Nav.jsx'
import Service from './Service.jsx'
import Collab from './Collab.jsx'
import About from './About.jsx'
import Project from './Project.jsx'
import Reviews from './Reviews.jsx'
import Footer from './Footer.jsx'

function App() {


  return (
    <>
      <Nav/>
      <Home/>
      <About/>
      <Service/>
      <Project/>
      <Reviews/>
      <Collab/>
      <Footer/>
    </>
  )
}

export default App

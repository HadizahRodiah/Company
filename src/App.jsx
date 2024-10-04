import React from 'react'
import About from './About.jsx'
import './App.css'
import Intro from './Intro.jsx'
import Nav from './Nav.jsx'
import Project from './Project.jsx'
import Contact from './Contact.jsx'


function App() {
  AOS.init();
 return(
  <>
<Nav/>
<Intro/>
<About/>
<Project/>
<Contact/>
  </>
  )
}

export default App

import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Project from "./pages/Project"
import Skills from "./pages/skills"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/project' element={<Project />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
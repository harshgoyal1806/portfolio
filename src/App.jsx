import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Skills from "./components/Skills/Skills"
import Project from "./components/Projects/Project"


import Contact from './components/Contact/Contact'
import { HashRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home/Home'
function App() {
  
  return (
  
       
        <HashRouter>
           <Navbar />
          <Routes>
              <Route path='/' element={<Home />}></Route>
             
              <Route path='/skills' element ={<Skills />}></Route>
              <Route path='/projects' element={<Project />}></Route>
              <Route path='/contact' element ={<Contact />}></Route>
          </Routes>
        </HashRouter>

  )
}

export default App

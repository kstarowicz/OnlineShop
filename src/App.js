import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {Navbar, Sidebar, Footer } from './components'

import {Home} from './pages'
//import About from './pages/AboutPage'
//import styled from 'styled-components'


function App() {
  return (
  <div>
    <h4>comfy sloth starter</h4>
    <Home/>
  </div>
  )
}

export default App

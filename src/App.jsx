import React, { Component } from 'react'
import Home from './_pages/Home'
import Work from './_pages/Work'
import About from './_pages/About'
import Resume from './_pages/Resume'
import Contact from './_pages/Contact'
import Projects from './_pages/Projects'
import MainLayout from './_layouts/Main'
import AppContainer from './_containers/App'

import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom'
import './style.css'

export default class App extends Component {  
  render() {
    return (
      <BrowserRouter>
        <AppContainer>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path='/' element={<MainLayout />}>
              <Route path='/work' element={<Work />} />
              <Route path='/about' element={<About />} />
              <Route path='/projects' element={<Projects />} />
            </Route>
            <Route path='/home' element={<Home />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </AppContainer>
      </BrowserRouter>
    )
  }
}

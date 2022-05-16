import Home from './_pages/Home'
import Work from './_pages/Work'
import About from './_pages/About'
import Resume from './_pages/Resume'
import Contact from './_pages/Contact'
import Projects from './_pages/Projects'
import MainLayout from './_layouts/Main'
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom'

import './style.css'

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default App

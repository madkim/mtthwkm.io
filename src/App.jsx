import Home from './_pages/Home'
import Work from './_pages/Work'
import About from './_pages/About'
import Contact from './_pages/Contact'
import Projects from './_pages/Projects'
import MainLayout from './_layouts/Main'

import { Route, Routes, BrowserRouter } from 'react-router-dom'

import './style.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/work' element={<Work />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
        </Route>
        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
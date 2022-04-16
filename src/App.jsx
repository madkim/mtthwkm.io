import Home from './_pages/Home/'
import MainLayout from './_layouts/Main'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import './style.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/home' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
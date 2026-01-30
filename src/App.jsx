<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
=======
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
>>>>>>> 0e90eb8 (Subida inicial del proyecto completo)
import Home from './pages/Home'
import Blog from './pages/Blog'
import Calculator from './pages/Calculator'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/calculadora-prestamos" element={<Calculator />} />
        <Route path="/formulario" element={<Contact />} />
      </Routes>
=======
      <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/calculadora-prestamos" element={<Calculator />} />
          <Route path="/formulario" element={<Contact />} />
        </Routes>
      </div>
>>>>>>> 0e90eb8 (Subida inicial del proyecto completo)
    </Router>
  )
}

export default App

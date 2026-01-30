import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Calculator from './pages/Calculator'
import Contact from './pages/Contact'

/**
 * VERSIÓN ALTERNATIVA CON HASHROUTER
 * 
 * Si tienes problemas con las rutas en GitHub Pages,
 * reemplaza "BrowserRouter" por "HashRouter" en la línea 1
 * 
 * HashRouter usa URLs con # (ej: https://sitio.com/#/blog)
 * Es más compatible con GitHub Pages pero las URLs son menos limpias
 * 
 * Para usarlo:
 * 1. Copia este archivo
 * 2. Renombra App.jsx a App-BrowserRouter.jsx
 * 3. Renombra este a App.jsx
 */

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/calculadora-prestamos" element={<Calculator />} />
          <Route path="/formulario" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

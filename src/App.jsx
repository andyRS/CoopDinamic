import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Calculator from './pages/Calculator'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/calculadora-prestamos" element={<Calculator />} />
        <Route path="/formulario" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App

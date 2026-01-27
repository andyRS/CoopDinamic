import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';
import Calculadora from './pages/Calculadora.jsx';
import CalculadoraPrestamos from './pages/CalculadoraPrestamos.jsx';
import Formulario from './pages/Formulario.jsx';
import Enviado from './pages/Enviado.jsx';

const App = () => {
  return (
    <div className="app">
      <Nav />
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/calculadora-prestamos" element={<CalculadoraPrestamos />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/enviado" element={<Enviado />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;

import SolicitudOnline from './pages/SolicitudOnline'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Calculator from './pages/Calculator'
import Contact from './pages/Contact'
import CuentasAhorro from './pages/CuentasAhorro'
import AhorrosProgramados from './pages/AhorrosProgramados'
import CertificadosFinancieros from './pages/CertificadosFinancieros'
import PrestamosExpresos from './pages/PrestamosExpresos'
import Hipotecarios from './pages/Hipotecarios'
import Vehiculos from './pages/Vehiculos'
import Educativos from './pages/Educativos'
import CreditoEmpresarial from './pages/CreditoEmpresarial'
import CapitalTrabajo from './pages/CapitalTrabajo'
import LineaCredito from './pages/LineaCredito'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/calculadora-prestamos" element={<Calculator />} />
          <Route path="/formulario" element={<Contact />} />
          <Route path="/solicitud-online" element={<SolicitudOnline />} />
          <Route path="/cuentas-ahorro" element={<CuentasAhorro />} />
          <Route path="/ahorros-programados" element={<AhorrosProgramados />} />
          <Route path="/certificados-financieros" element={<CertificadosFinancieros />} />
          <Route path="/prestamos-expresos" element={<PrestamosExpresos />} />
          <Route path="/hipotecarios" element={<Hipotecarios />} />
          <Route path="/vehiculos" element={<Vehiculos />} />
          <Route path="/educativos" element={<Educativos />} />
          <Route path="/credito-empresarial" element={<CreditoEmpresarial />} />
          <Route path="/capital-trabajo" element={<CapitalTrabajo />} />
          <Route path="/linea-credito" element={<LineaCredito />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

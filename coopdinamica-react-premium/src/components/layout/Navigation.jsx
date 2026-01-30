import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(null)

  return (
    <nav className="bg-gradient-to-r from-coop-green to-coop-dark-green shadow-lg mb-8">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap">
          {/* INICIO */}
          <li className="relative group">
            <Link 
              to="/"
              className="flex items-center px-6 py-4 text-white font-semibold hover:bg-[rgba(0,0,0,0.1)] transition-all"
            >
              <i className="fa fa-home mr-2"></i>
              INICIO
            </Link>
          </li>

          {/* PARA TI */}
          <li 
            className="relative group"
            onMouseEnter={() => setActiveDropdown('para-ti')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <a 
              href="#"
              className="flex items-center px-6 py-4 text-white font-semibold hover:bg-[rgba(0,0,0,0.1)] transition-all"
            >
              <i className="fa fa-user mr-2"></i>
              PARA TI
            </a>

            {/* Dropdown Level 1 */}
            <ul className={`absolute left-0 top-full bg-white shadow-xl min-w-[250px] z-40
                           ${activeDropdown === 'para-ti' ? 'block' : 'hidden'}`}>
              <li className="relative group/sub">
                <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors border-b border-gray-200">
                  <i className="fas fa-coins mr-2 text-coop-green"></i>
                  Ahorros o inversión
                </a>
                
                {/* Dropdown Level 2 */}
                <ul className="absolute left-full top-0 bg-white shadow-xl min-w-[220px] hidden group-hover/sub:block">
                  <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 border-b border-gray-100">Cuentas de Ahorros</a></li>
                  <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 border-b border-gray-100">Ahorros Programados</a></li>
                  <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 border-b border-gray-100">Certificados Financieros</a></li>
                  <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Alquiler Hipotecario</a></li>
                </ul>
              </li>

              <li className="relative group/sub">
                <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors border-b border-gray-200">
                  <i className="fa fa-credit-card mr-2 text-coop-green"></i>
                  Créditos
                </a>
                
                {/* Dropdown Level 2 */}
                <ul className="absolute left-full top-0 bg-white shadow-xl min-w-[220px] hidden group-hover/sub:block">
                  <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 border-b border-gray-100">Expresos</a></li>
                  <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 border-b border-gray-100">De Consumo</a></li>
                  <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 border-b border-gray-100">Hipotecarios</a></li>
                  <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 border-b border-gray-100">Adquisición de Vehículos</a></li>
                  <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 border-b border-gray-100">Educativos y Escolares</a></li>
                  <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Vacacionales</a></li>
                </ul>
              </li>

              <li>
                <Link 
                  to="/calculadora-prestamos"
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <i className="fa fa-calculator mr-2 text-coop-green"></i>
                  Calculadora de Préstamos
                </Link>
              </li>
            </ul>
          </li>

          {/* PARA TU NEGOCIO */}
          <li 
            className="relative group"
            onMouseEnter={() => setActiveDropdown('negocio')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <a 
              href="#"
              className="flex items-center px-6 py-4 text-white font-semibold hover:bg-[rgba(0,0,0,0.1)] transition-all"
            >
              <i className="fa fa-briefcase mr-2"></i>
              PARA TU NEGOCIO
            </a>

            {/* Dropdown Level 1 */}
            <ul className={`absolute left-0 top-full bg-white shadow-xl min-w-[250px] z-40
                           ${activeDropdown === 'negocio' ? 'block' : 'hidden'}`}>
              <li className="relative group/sub">
                <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors border-b border-gray-200">
                  <i className="fa fa-coins mr-2 text-coop-green"></i>
                  Ahorros o inversión
                </a>
                <ul className="absolute left-full top-0 bg-white shadow-xl min-w-[220px] hidden group-hover/sub:block">
                  <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 border-b border-gray-100">Cuentas de Ahorros</a></li>
                  <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 border-b border-gray-100">Ahorros Programados</a></li>
                  <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 border-b border-gray-100">Certificados Financieros</a></li>
                  <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Alquiler Hipotecario</a></li>
                </ul>
              </li>
              <li className="relative group/sub">
                <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors border-b border-gray-200">
                  <i className="far fa-credit-card mr-2 text-coop-green"></i>
                  Créditos
                </a>
                <ul className="absolute left-full top-0 bg-white shadow-xl min-w-[220px] hidden group-hover/sub:block">
                  <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 border-b border-gray-100">Expresos</a></li>
                  <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 border-b border-gray-100">De Consumo</a></li>
                  <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 border-b border-gray-100">Hipotecarios</a></li>
                  <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 border-b border-gray-100">Adquisición de Vehículos</a></li>
                  <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 border-b border-gray-100">Educativos y Escolares</a></li>
                  <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Vacacionales</a></li>
                </ul>
              </li>
            </ul>
          </li>

          {/* BLOG */}
          <li className="relative group">
            <Link 
              to="/blog"
              className="flex items-center px-6 py-4 text-white font-semibold hover:bg-[rgba(0,0,0,0.1)] transition-all"
            >
              <i className="fa fa-rss mr-2"></i>
              BLOG
            </Link>
          </li>

          {/* ¿POR QUÉ ASOCIARSE? */}
          <li className="relative group">
            <a 
              href="#porque-asociarse"
              className="flex items-center px-6 py-4 text-white font-semibold hover:bg-[rgba(0,0,0,0.1)] transition-all"
            >
              <i className="fa fa-question-circle mr-2"></i>
              ¿POR QUÉ ASOCIARSE?
            </a>
          </li>

          {/* PRENSA */}
          <li className="relative group">
            <a 
              href="#prensa"
              className="flex items-center px-6 py-4 text-white font-semibold hover:bg-[rgba(0,0,0,0.1)] transition-all"
            >
              <i className="fa fa-newspaper mr-2"></i>
              PRENSA
            </a>
          </li>

          {/* CONTACTO */}
          <li className="relative group">
            <Link 
              to="/formulario"
              className="flex items-center px-6 py-4 text-white font-semibold hover:bg-[rgba(0,0,0,0.1)] transition-all"
            >
              <i className="fa fa-envelope mr-2"></i>
              CONTACTO
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation

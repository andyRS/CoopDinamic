import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'
import Button from '../ui/Button'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Inicio', path: '/', icon: '🏠' },
    {
      label: 'Para Ti',
      icon: '👤',
      submenus: [
        {
          title: 'Ahorros',
          items: [
            { label: 'Cuentas de Ahorro', path: '/cuentas-ahorro' },
            { label: 'Ahorros Programados', path: '/ahorros-programados' },
            { label: 'Certificados Financieros', path: '/certificados-financieros' }
          ]
        },
        {
          title: 'Créditos',
          items: [
            { label: 'Préstamos Expresos', path: '/prestamos-expresos' },
            { label: 'Hipotecarios', path: '/hipotecarios' },
            { label: 'Vehículos', path: '/vehiculos' },
            { label: 'Educativos', path: '/educativos' }
          ]
        }
      ]
    },
    {
      label: 'Para Tu Negocio',
      icon: '💼',
      submenus: [
        {
          title: 'Soluciones Empresariales',
          items: [
            { label: 'Crédito Empresarial', path: '/credito-empresarial' },
            { label: 'Capital de Trabajo', path: '/capital-trabajo' },
            { label: 'Línea de Crédito', path: '/linea-credito' }
          ]
        }
      ]
    },
    { label: 'Blog', path: '/blog', icon: '📰' },
    { label: 'Calculadora', path: '/calculadora-prestamos', icon: '🧮' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled
          ? 'bg-white/90 backdrop-blur shadow-md'
          : 'bg-gradient-to-r from-coop-green to-coop-blue'}
        `}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/img/Logo.png"
                alt="CoopDinámica"
                className="w-10 h-10 rounded-lg"
              />
              <div className="leading-tight">
                <span className={`font-bold text-lg ${isScrolled ? 'text-coop-green' : 'text-white'}`}>
                  CoopDinámica
                </span>
                <span className={`block text-xs ${isScrolled ? 'text-gray-500' : 'text-white/80'}`}>
                  Tu cooperativa de confianza
                </span>
              </div>
            </Link>

            {/* MENU DESKTOP */}
            <div className="hidden lg:flex items-center gap-1">
              {menuItems.map((item, i) => (
                <div key={i} className="relative">
                  {item.path ? (
                    <Link
                      to={item.path}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition
                        ${isActive(item.path)
                          ? 'bg-coop-green text-white'
                          : isScrolled
                          ? 'text-gray-700 hover:bg-gray-100'
                          : 'text-white hover:bg-white/10'}
                      `}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        className={`px-4 py-2 rounded-md flex items-center gap-1 text-sm font-medium transition
                          ${isScrolled
                            ? 'text-gray-700 hover:bg-gray-100'
                            : 'text-white hover:bg-white/10'}
                        `}
                      >
                        {item.label}
                        <FiChevronDown className={`transition ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            className="absolute left-0 top-full mt-2 bg-white rounded-xl shadow-lg p-6 min-w-[380px]"
                          >
                            <div className="grid grid-cols-2 gap-6">
                              {item.submenus.map((submenu, idx) => (
                                <div key={idx}>
                                  <h4 className="font-semibold text-coop-green mb-2">
                                    {submenu.title}
                                  </h4>
                                  <ul className="space-y-1">
                                    {submenu.items.map((sub, sidx) => (
                                      <li key={sidx}>
                                        <Link
                                          to={sub.path}
                                          className="block px-3 py-2 rounded text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                          {sub.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA DESKTOP */}
            <div className="hidden lg:flex items-center gap-3">
              <Link to="/formulario">
                <Button variant="ghost" size="sm">
                  Contacto
                </Button>
              </Link>
              <Button variant="primary" size="sm">
                Hazte Socio
              </Button>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-md"
            >
              <FiMenu className={`text-2xl ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed inset-0 z-50 bg-white lg:hidden"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-bold text-coop-green">Menú</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <FiX className="text-2xl" />
              </button>
            </div>

            <div className="p-4 space-y-2">
              {menuItems.map((item, i) => (
                <div key={i}>
                  {item.path ? (
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                        className="w-full flex justify-between px-4 py-3 rounded-lg hover:bg-gray-100"
                      >
                        {item.label}
                        <FiChevronDown />
                      </button>

                      {activeDropdown === item.label &&
                        item.submenus.map((submenu, idx) => (
                          <div key={idx} className="ml-4 mt-2">
                            <p className="text-xs font-semibold text-gray-500 mb-1">
                              {submenu.title}
                            </p>
                            {submenu.items.map((sub, sidx) => (
                              <Link
                                key={sidx}
                                to={sub.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-3 py-2 text-sm rounded hover:bg-gray-100"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="p-4 border-t space-y-2">
              <Link to="/formulario" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="ghost" fullWidth>
                  Contacto
                </Button>
              </Link>
              <Button variant="primary" fullWidth>
                Hazte Socio
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation

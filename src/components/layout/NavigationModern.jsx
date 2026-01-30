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
          icon: '💰',
          items: [
            { label: 'Cuentas de Ahorro', path: '/cuentas-ahorro' },
            { label: 'Ahorros Programados', path: '/ahorros-programados' },
            { label: 'Certificados Financieros', path: '/certificados-financieros' }
          ]
        },
        {
          title: 'Créditos',
          icon: '💳',
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
          title: 'Soluciones',
          icon: '🏢',
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
          ? 'bg-white shadow-md border-b border-gray-200'
          : 'bg-gradient-to-r from-coop-green to-coop-blue shadow-lg'}
        `}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3">
              <img src="/img/Logo.png" alt="CoopDinámica" className="w-11 h-11 rounded-xl" />
              <div>
                <h1 className={`text-xl font-bold ${isScrolled ? 'text-coop-green' : 'text-white'}`}>
                  CoopDinámica
                </h1>
                <p className={`text-xs ${isScrolled ? 'text-gray-500' : 'text-white/80'}`}>
                  Tu cooperativa de confianza
                </p>
              </div>
            </Link>

            {/* MENU DESKTOP */}
            <div className="hidden lg:flex items-center gap-1">
              {menuItems.map((item, index) => (
                <div key={index} className="relative">
                  {item.path ? (
                    <Link
                      to={item.path}
                      className={`px-4 py-2 rounded-lg font-medium transition
                      ${isActive(item.path)
                        ? 'bg-yellow-300 text-coop-green'
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
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition
                        ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}
                        `}
                      >
                        {item.label}
                        <FiChevronDown />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 bg-white rounded-xl shadow-xl p-6 min-w-[420px]"
                          >
                            <div className="grid grid-cols-2 gap-8">
                              {item.submenus.map((submenu, i) => (
                                <div key={i}>
                                  <h3 className="font-bold text-coop-green mb-2">{submenu.title}</h3>
                                  {submenu.items.map((sub, j) => (
                                    <Link
                                      key={j}
                                      to={sub.path}
                                      className="block px-3 py-2 rounded text-gray-700 hover:bg-gray-100"
                                    >
                                      {sub.label}
                                    </Link>
                                  ))}
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

            {/* ACCIONES DESKTOP */}
            <div className="hidden lg:flex items-center gap-3">
              <Link to="/formulario">
                <Button
                  size="sm"
                  className={
                    isScrolled
                      ? 'border border-gray-300 text-gray-700 hover:bg-gray-100'
                      : 'bg-white text-coop-green font-semibold hover:bg-gray-100'
                  }
                >
                  Contacto
                </Button>
              </Link>

              <Button
                size="sm"
                className="bg-yellow-300 text-coop-green font-bold hover:bg-yellow-400"
              >
                Hazte Socio
              </Button>
            </div>

            {/* MOBILE BUTTON */}
            <button
              className="lg:hidden p-2 rounded-lg"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <FiMenu className={`text-2xl ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
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
            className="fixed inset-0 z-50 bg-white"
          >
            <div className="flex justify-between items-center p-4 border-b">
              <span className="font-bold text-coop-green">CoopDinámica</span>
              <FiX className="text-2xl" onClick={() => setIsMobileMenuOpen(false)} />
            </div>

            <div className="p-4 space-y-2">
              {menuItems.map((item, i) => (
                item.path && (
                  <Link
                    key={i}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg hover:bg-gray-100"
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>

            <div className="p-4 border-t space-y-2">
              <Link to="/formulario">
                <Button fullWidth variant="outline">Contacto</Button>
              </Link>
              <Button fullWidth className="bg-yellow-300 text-coop-green font-bold">
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

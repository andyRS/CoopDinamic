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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    {
      label: 'Inicio',
      path: '/',
      icon: '🏠'
    },
    {
      label: 'Para Ti',
      icon: '👤',
      submenus: [
        {
          title: 'Ahorros',
          icon: '💰',
          items: [
            { label: 'Cuentas de Ahorro', path: '#' },
            { label: 'Ahorros Programados', path: '#' },
            { label: 'Certificados Financieros', path: '#' }
          ]
        },
        {
          title: 'Créditos',
          icon: '💳',
          items: [
            { label: 'Préstamos Expresos', path: '#' },
            { label: 'Hipotecarios', path: '#' },
            { label: 'Vehículos', path: '#' },
            { label: 'Educativos', path: '#' }
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
            { label: 'Crédito Empresarial', path: '#' },
            { label: 'Capital de Trabajo', path: '#' },
            { label: 'Línea de Crédito', path: '#' }
          ]
        }
      ]
    },
    {
      label: 'Blog',
      path: '/blog',
      icon: '📰'
    },
    {
      label: 'Calculadora',
      path: '/calculadora-prestamos',
      icon: '🧮'
    }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 1)',
          boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none',
          padding: isScrolled ? '12px 0' : '20px 0'
        }}
        className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md transition-all duration-300 
                 dark:bg-dark-bg/95 border-b border-gray-100 dark:border-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.img
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                src="/img/Logo.png"
                alt="CoopDinámica"
                className="w-10 h-10 rounded-lg"
              />
              <div>
                <h1 className="text-2xl font-bold text-coop-green dark:text-coop-light-green 
                             group-hover:text-coop-dark-green transition-colors">
                  CoopDinámica
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">Tu cooperativa de confianza</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => item.submenus && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.path ? (
                    <Link
                      to={item.path}
                      className={`
                        flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all
                        ${isActive(item.path) 
                          ? 'bg-coop-green text-white' 
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}
                      `}
                    >
                      <span className="text-lg">{item.icon}</span>
                      {item.label}
                      {isActive(item.path) && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-coop-green"
                        />
                      )}
                    </Link>
                  ) : (
                    <button
                      className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-gray-700 
                               dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                    >
                      <span className="text-lg">{item.icon}</span>
                      {item.label}
                      <FiChevronDown className={`transition-transform ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    </button>
                  )}

                  {/* Mega Menu Dropdown */}
                  <AnimatePresence>
                    {item.submenus && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 bg-white dark:bg-dark-card rounded-2xl 
                                 shadow-2xl border border-gray-200 dark:border-gray-700 p-6 min-w-[400px]"
                      >
                        <div className="grid grid-cols-2 gap-6">
                          {item.submenus.map((submenu, idx) => (
                            <div key={idx}>
                              <div className="flex items-center gap-2 mb-3 text-coop-green dark:text-coop-light-green">
                                <span className="text-2xl">{submenu.icon}</span>
                                <h3 className="font-bold text-lg">{submenu.title}</h3>
                              </div>
                              <ul className="space-y-2">
                                {submenu.items.map((subitem, subIdx) => (
                                  <li key={subIdx}>
                                    <a
                                      href={subitem.path}
                                      className="block px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 
                                               hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                    >
                                      {subitem.label}
                                    </a>
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
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Link to="/formulario">
                <Button variant="ghost" size="sm">
                  Contacto
                </Button>
              </Link>
              <Button variant="primary" size="sm" icon={<span>🚀</span>}>
                Hazte Socio
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMobileMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <div className="absolute right-0 top-0 bottom-0 w-80 bg-white dark:bg-dark-card shadow-2xl overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <img src="/img/Logo.png" alt="Logo" className="w-8 h-8 rounded-lg" />
                  <span className="font-bold text-coop-green">CoopDinámica</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <FiX className="text-xl" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="p-4 space-y-2">
                {menuItems.map((item, index) => (
                  <div key={index}>
                    {item.path ? (
                      <Link
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`
                          flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all
                          ${isActive(item.path)
                            ? 'bg-coop-green text-white'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}
                        `}
                      >
                        <span className="text-xl">{item.icon}</span>
                        {item.label}
                      </Link>
                    ) : (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                          className="w-full flex items-center justify-between px-4 py-3 rounded-lg 
                                   text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{item.icon}</span>
                            <span className="font-medium">{item.label}</span>
                          </div>
                          <FiChevronDown className={`transition-transform ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`} />
                        </button>

                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="ml-4 mt-2 space-y-1"
                            >
                              {item.submenus?.map((submenu, idx) => (
                                <div key={idx} className="pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                                  <p className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-2">
                                    {submenu.icon} {submenu.title}
                                  </p>
                                  {submenu.items.map((subitem, subIdx) => (
                                    <a
                                      key={subIdx}
                                      href={subitem.path}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="block px-3 py-2 text-sm rounded text-gray-600 dark:text-gray-400 
                                               hover:bg-gray-100 dark:hover:bg-gray-800"
                                    >
                                      {subitem.label}
                                    </a>
                                  ))}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Actions */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
                <Link to="/formulario" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="ghost" fullWidth>
                    📧 Contacto
                  </Button>
                </Link>
                <Button variant="primary" fullWidth icon={<span>🚀</span>}>
                  Hazte Socio
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation

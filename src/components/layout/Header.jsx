<<<<<<< HEAD
import SearchBox from '../ui/SearchBox'

const Header = () => {
  return (
    <header className="flex flex-row flex-wrap items-center bg-white h-[148px] border-b border-[rgba(255,255,226,0.8)] mb-[30px]">
      {/* Logo */}
      <div className="flex-[0_0_65%] p-2.5 text-coop-green ml-[30px] drop-shadow-[1px_1px_0px_#ccc]">
        <h1 className="relative font-bold italic text-[55px] transition-all duration-300 
                       drop-shadow-[1px_1px_1px_#000,1px_2px_3px_#000] top-[-21px] font-roboto-bold">
          CoopDinámica
        </h1>
        <img 
          className="block relative w-[39px] mt-[-85px] left-[368px] overflow-hidden 
                     shadow-custom border border-[#ccc] rounded-xl top-[-36px]" 
          src="/img/Logo.png" 
          alt="Logo" 
          title="Cooperativa Dinamica"
          width="500"
          height="500"
        />
      </div>

      {/* Search Box */}
      <SearchBox />
    </header>
=======
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiBell, FiUser, FiMenu, FiX } from 'react-icons/fi'
import { useTheme } from '../../contexts/ThemeContext'
import SearchBox from '../ui/SearchBox'

const Header = ({ onMenuToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [notificationCount, setNotificationCount] = useState(3)
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const notifications = [
    { id: 1, text: 'Nueva tasa de interés disponible', time: '5 min', type: 'info' },
    { id: 2, text: 'Tu préstamo ha sido aprobado', time: '1 hora', type: 'success' },
    { id: 3, text: 'Recordatorio: Pago próximo', time: '2 horas', type: 'warning' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass dark:glass-dark shadow-lg py-3'
          : 'bg-white dark:bg-dark-bg py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <img
              src="/img/Logo.png"
              alt="CoopDinámica"
              className={`transition-all duration-300 rounded-xl shadow-lg ${
                isScrolled ? 'w-10 h-10' : 'w-12 h-12'
              }`}
            />
            <div>
              <h1 className={`font-bold text-coop-green dark:text-coop-light-green transition-all duration-300 ${
                isScrolled ? 'text-2xl' : 'text-3xl'
              }`}>
                CoopDinámica
              </h1>
              {!isScrolled && (
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Tu cooperativa de confianza
                </p>
              )}
            </div>
          </motion.div>

          {/* Desktop: Search + Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <SearchBox />

            {/* Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <i className="fas fa-sun text-2xl text-yellow-400"></i>
              ) : (
                <i className="fas fa-moon text-2xl text-gray-600"></i>
              )}
            </motion.button>

            {/* Notifications */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Notificaciones"
              >
                <FiBell className="text-2xl text-gray-700 dark:text-gray-300" />
                {notificationCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-error text-white text-xs 
                             rounded-full flex items-center justify-center font-bold"
                  >
                    {notificationCount}
                  </motion.span>
                )}
              </motion.button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-80 bg-white dark:bg-dark-card rounded-xl 
                           shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="font-bold text-gray-800 dark:text-dark-text">
                      Notificaciones
                    </h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto custom-scrollbar">
                    {notifications.map((notif) => (
                      <motion.div
                        key={notif.id}
                        whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
                        className="p-4 border-b border-gray-100 dark:border-gray-700 cursor-pointer"
                      >
                        <div className="flex items-start space-x-3">
                          <div className={`w-2 h-2 rounded-full mt-2 ${
                            notif.type === 'success' ? 'bg-success' :
                            notif.type === 'warning' ? 'bg-warning' : 'bg-info'
                          }`} />
                          <div className="flex-1">
                            <p className="text-sm text-gray-800 dark:text-dark-text">
                              {notif.text}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="p-3 text-center">
                    <button className="text-sm text-coop-green hover:text-coop-dark-green font-semibold">
                      Ver todas
                    </button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* User Menu */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 
                         dark:hover:bg-gray-700 transition-colors"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-coop-green to-coop-blue 
                              rounded-full flex items-center justify-center text-white font-bold">
                  AR
                </div>
              </motion.button>

              {/* User Dropdown */}
              {showUserMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-64 bg-white dark:bg-dark-card rounded-xl 
                           shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <p className="font-bold text-gray-800 dark:text-dark-text">Andy Rosado</p>
                    <p className="text-sm text-gray-500">andy@coopdinamica.com</p>
                  </div>
                  <div className="py-2">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 
                                         text-gray-700 dark:text-dark-text transition-colors">
                      <i className="fas fa-user mr-3"></i>Mi Cuenta
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 
                                         text-gray-700 dark:text-dark-text transition-colors">
                      <i className="fas fa-cog mr-3"></i>Configuración
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 
                                         text-error transition-colors">
                      <i className="fas fa-sign-out-alt mr-3"></i>Cerrar Sesión
                    </a>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile: Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2"
            >
              {isDark ? (
                <i className="fas fa-sun text-xl text-yellow-400"></i>
              ) : (
                <i className="fas fa-moon text-xl text-gray-600"></i>
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onMenuToggle}
              className="p-2 text-gray-700 dark:text-gray-300"
            >
              <FiMenu className="text-2xl" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
>>>>>>> 0e90eb8 (Subida inicial del proyecto completo)
  )
}

export default Header

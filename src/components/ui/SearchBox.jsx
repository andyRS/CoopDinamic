import { useState, useEffect, useRef } from 'react'
<<<<<<< HEAD
=======
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch, FiX } from 'react-icons/fi'
>>>>>>> 0e90eb8 (Subida inicial del proyecto completo)

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
<<<<<<< HEAD
=======
  const [isExpanded, setIsExpanded] = useState(false)
>>>>>>> 0e90eb8 (Subida inicial del proyecto completo)
  const inputRef = useRef(null)
  const suggestionsRef = useRef(null)

  const autocompleteItems = [
<<<<<<< HEAD
    "Prestamos",
    "Certificados Financieros",
    "Preguntas Frecuentes",
    "Ahorros",
    "Finanzas",
    "Articulos",
    "Seguros",
    "Prestamos Hipotecarios",
    "Prestamos personales",
    "Prestamos Empresariales",
    "Negocios",
    "Juventud",
    "Salud",
    "Salud Bucal",
    "Empresas",
    "Acerca de nosotros"
=======
    { text: "Prestamos", icon: "💰", category: "Servicios" },
    { text: "Certificados Financieros", icon: "📜", category: "Inversiones" },
    { text: "Preguntas Frecuentes", icon: "❓", category: "Ayuda" },
    { text: "Ahorros", icon: "🏦", category: "Servicios" },
    { text: "Finanzas", icon: "💼", category: "General" },
    { text: "Articulos", icon: "📰", category: "Blog" },
    { text: "Seguros", icon: "🛡️", category: "Servicios" },
    { text: "Prestamos Hipotecarios", icon: "🏠", category: "Servicios" },
    { text: "Prestamos personales", icon: "👤", category: "Servicios" },
    { text: "Prestamos Empresariales", icon: "🏢", category: "Servicios" },
>>>>>>> 0e90eb8 (Subida inicial del proyecto completo)
  ]

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = autocompleteItems.filter(item =>
<<<<<<< HEAD
        item.toLowerCase().includes(searchTerm.toLowerCase())
=======
        item.text.toLowerCase().includes(searchTerm.toLowerCase())
>>>>>>> 0e90eb8 (Subida inicial del proyecto completo)
      )
      setSuggestions(filtered)
      setShowSuggestions(true)
    } else {
      setShowSuggestions(false)
    }
  }, [searchTerm])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionsRef.current && 
        !suggestionsRef.current.contains(event.target) &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setShowSuggestions(false)
<<<<<<< HEAD
=======
        setIsExpanded(false)
>>>>>>> 0e90eb8 (Subida inicial del proyecto completo)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (item) => {
<<<<<<< HEAD
    setSearchTerm(item)
    setShowSuggestions(false)
  }

  return (
    <div className="flex flex-[0_0_30%] items-center justify-center relative">
      <div className="relative w-full max-w-[300px]">
        <input
          ref={inputRef}
          type="search"
          id="search"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full h-10 px-4 pr-10 border-2 border-[#ddd] rounded-full 
                     text-sm outline-none transition-all duration-300
                     focus:border-coop-blue focus:shadow-[0_0_8px_rgba(70,133,250,0.3)]"
        />
        <i className="fa fa-search absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>

        {showSuggestions && suggestions.length > 0 && (
          <ul 
            ref={suggestionsRef}
            className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 
                       rounded-lg shadow-lg max-h-60 overflow-y-auto z-50"
          >
            {suggestions.map((item, index) => (
              <li
                key={index}
                onClick={() => handleSelect(item)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors text-gray-700"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
=======
    setSearchTerm(item.text)
    setShowSuggestions(false)
  }

  const clearSearch = () => {
    setSearchTerm('')
    setShowSuggestions(false)
    inputRef.current?.focus()
  }

  return (
    <div className="relative">
      <motion.div
        initial={false}
        animate={{ width: isExpanded ? 400 : 300 }}
        className="relative"
      >
        <div className="relative">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl pointer-events-none" />
          <input
            ref={inputRef}
            type="search"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsExpanded(true)}
            className="w-full h-12 pl-12 pr-12 bg-gray-50 dark:bg-gray-800 border-2 border-transparent
                     rounded-full text-gray-900 dark:text-dark-text text-sm outline-none 
                     transition-all duration-300 focus:border-coop-green focus:bg-white 
                     dark:focus:bg-dark-card focus:shadow-glow-blue"
          />
          {searchTerm && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={clearSearch}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 
                       hover:text-gray-600 dark:hover:text-gray-300"
            >
              <FiX className="text-xl" />
            </motion.button>
          )}
        </div>

        {/* Autocomplete Suggestions */}
        <AnimatePresence>
          {showSuggestions && suggestions.length > 0 && (
            <motion.div
              ref={suggestionsRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-dark-card 
                       border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl 
                       max-h-96 overflow-y-auto z-50 custom-scrollbar"
            >
              {suggestions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleSelect(item)}
                  className="px-4 py-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 
                           transition-colors border-b border-gray-100 dark:border-gray-700 
                           last:border-b-0 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <p className="text-gray-900 dark:text-dark-text font-medium group-hover:text-coop-green">
                          {item.text}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {item.category}
                        </p>
                      </div>
                    </div>
                    <FiSearch className="text-gray-400 group-hover:text-coop-green" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
>>>>>>> 0e90eb8 (Subida inicial del proyecto completo)
    </div>
  )
}

export default SearchBox

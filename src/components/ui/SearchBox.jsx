import { useState, useEffect, useRef } from 'react'

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const inputRef = useRef(null)
  const suggestionsRef = useRef(null)

  const autocompleteItems = [
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
  ]

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = autocompleteItems.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
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
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (item) => {
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
    </div>
  )
}

export default SearchBox

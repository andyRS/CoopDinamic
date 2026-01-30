import { useState } from 'react'

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-300 mb-2 rounded-lg overflow-hidden">
          {/* Header */}
          <button
            onClick={() => handleToggle(index)}
            className={`w-full text-left px-6 py-4 font-semibold text-lg flex justify-between items-center
                       transition-colors duration-300 ${
                         activeIndex === index
                           ? 'bg-coop-green text-white'
                           : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                       }`}
          >
            <span>{item.title}</span>
            <i className={`fas fa-chevron-down transition-transform duration-300 ${
              activeIndex === index ? 'rotate-180' : ''
            }`}></i>
          </button>

          {/* Content */}
          <div
            className={`overflow-hidden transition-all duration-400 ${
              activeIndex === index ? 'max-h-[2000px]' : 'max-h-0'
            }`}
          >
            <div className="px-6 py-4 bg-white text-gray-700 leading-relaxed">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion

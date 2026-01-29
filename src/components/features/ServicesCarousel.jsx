import { useState, useEffect, useRef } from 'react'

const ServicesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselRef = useRef(null)

  const services = [
    {
      icon: 'fas fa-piggy-bank',
      title: 'Ahorros',
      description: 'Cuentas de ahorro seguras con tasas competitivas',
    },
    {
      icon: 'fas fa-hand-holding-usd',
      title: 'Préstamos',
      description: 'Soluciones de crédito flexibles para ti',
    },
    {
      icon: 'fas fa-certificate',
      title: 'Certificados',
      description: 'Inversiones a plazo fijo con rendimientos garantizados',
    },
    {
      icon: 'fas fa-home',
      title: 'Hipotecarios',
      description: 'Financiamiento para la casa de tus sueños',
    },
    {
      icon: 'fas fa-car',
      title: 'Vehículos',
      description: 'Préstamos para compra de vehículos nuevos o usados',
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Nuestros Servicios
        </h2>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl 
                                transition-shadow duration-300 h-[300px] flex flex-col justify-center">
                    <div className="mb-6">
                      <i className={`${service.icon} text-6xl text-coop-green`}></i>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-coop-green 
                     hover:bg-coop-dark-green text-white p-3 rounded-full shadow-lg transition-all z-10"
            aria-label="Anterior"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-coop-green 
                     hover:bg-coop-dark-green text-white p-3 rounded-full shadow-lg transition-all z-10"
            aria-label="Siguiente"
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-coop-green w-8' : 'bg-gray-300'
                }`}
                aria-label={`Ir al servicio ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesCarousel

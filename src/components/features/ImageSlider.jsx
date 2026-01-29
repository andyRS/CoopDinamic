import { useState, useEffect, useRef } from 'react'

const ImageSlider = () => {
  const images = [
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg'
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState((100 / images.length))
  const intervalRef = useRef(null)
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const startSlideshow = (force = false) => {
    if (intervalRef.current || (!force && prefersReducedMotion)) {
      return
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
  }

  const stopSlideshow = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsPaused(true)
      stopSlideshow()
    } else {
      startSlideshow()
    }

    return () => stopSlideshow()
  }, [])

  useEffect(() => {
    const basePercentage = 100 / images.length
    setProgress(basePercentage * (currentIndex + 1))
  }, [currentIndex, images.length])

  const handleIndicatorClick = (index) => {
    setIsPaused(true)
    stopSlideshow()
    setCurrentIndex(index)
  }

  const handleToggle = () => {
    if (isPaused) {
      setIsPaused(false)
      startSlideshow(true)
    } else {
      setIsPaused(true)
      stopSlideshow()
    }
  }

  return (
    <section className="relative w-full h-[500px] overflow-hidden mb-12 shadow-lg rounded-lg">
      {/* Imagen principal */}
      <div className="relative w-full h-full">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}
      </div>

      {/* Barra de progreso */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300 z-20">
        <div
          className="h-full bg-coop-green transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            aria-label={`Ir a la diapositiva ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-coop-green w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          ></button>
        ))}
      </div>

      {/* Botón de Pausar/Reproducir */}
      <button
        onClick={handleToggle}
        aria-pressed={isPaused}
        className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white px-4 py-2 
                   rounded-full transition-all duration-300 text-sm font-semibold"
      >
        {isPaused ? 'Reproducir' : 'Pausar'}
      </button>
    </section>
  )
}

export default ImageSlider

import { useEffect, useMemo, useRef, useState } from 'react';

const Slider = ({
  images = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
  ],
  autoPlayDelay = 5000,
}) => {
  const prefersReducedMotion = useMemo(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(prefersReducedMotion);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);

  const progressBase = 100 / images.length;
  const progressWidth = progressBase * (currentIndex + 1);

  const startAutoPlay = () => {
    if (intervalRef.current || prefersReducedMotion) {
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsTransitioning(true);
    }, autoPlayDelay);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (isPaused) {
      stopAutoPlay();
    } else {
      startAutoPlay();
    }

    return stopAutoPlay;
  }, [isPaused]);

  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }

    return undefined;
  }, [isTransitioning]);

  const handleIndicatorClick = (index) => {
    setIsPaused(true);
    stopAutoPlay();
    setCurrentIndex(index);
    setIsTransitioning(true);
  };

  const handleToggle = () => {
    if (isPaused) {
      setIsPaused(false);
    } else {
      setIsPaused(true);
      stopAutoPlay();
    }
  };

  return (
    <div className="slider">
      <div className="slider__images">
        <img id="img1" src={images[currentIndex]} alt="Diapositiva actual" />
        <img
          id="img2"
          src={images[currentIndex]}
          className={isTransitioning ? 'active' : ''}
          alt="Transición"
        />
      </div>
      <div className="slider__controls">
        <div id="progress-bar" style={{ width: `${progressWidth}%` }} />
        <div id="indicadores">
          {images.map((_, index) => (
            <button
              key={`indicator-${index}`}
              type="button"
              className={`circles ${index === currentIndex ? 'resaltado' : ''}`}
              aria-label={`Ir a la diapositiva ${index + 1}`}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>
        <button
          id="slider-toggle"
          type="button"
          aria-pressed={isPaused}
          onClick={handleToggle}
        >
          {isPaused ? 'Reproducir' : 'Pausar'}
        </button>
      </div>
    </div>
  );
};

export default Slider;

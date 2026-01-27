import { useEffect, useRef, useState } from 'react';

const Carousel = ({ items = [], interval = 6000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!items.length) {
      return undefined;
    }

    timerRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => {
      clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [items, interval]);

  const goToIndex = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel__track">
        {items.map((item, index) => (
          <div
            key={`carousel-item-${index}`}
            className={`carousel__item ${index === activeIndex ? 'is-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="carousel__indicators">
        {items.map((_, index) => (
          <button
            key={`carousel-indicator-${index}`}
            type="button"
            className={`carousel__indicator ${index === activeIndex ? 'is-active' : ''}`}
            aria-label={`Ir al item ${index + 1}`}
            onClick={() => goToIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

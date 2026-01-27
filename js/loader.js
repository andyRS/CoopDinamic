import { useEffect, useState } from 'react';

const Loader = ({ children, className = '' }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div
      className={`contenedor_loader ${className}`.trim()}
      style={{
        opacity: isLoading ? 1 : 0,
        visibility: isLoading ? 'visible' : 'hidden',
      }}
    >
      {children}
    </div>
  );
};

export default Loader;

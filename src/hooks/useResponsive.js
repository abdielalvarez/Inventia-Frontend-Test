import { useState, useEffect } from 'react';

const useResponsive = (width) => {
  // Estado inicial definido para evitar errores de hidratación.
  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
    // Verificamos si estamos en el cliente
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia(`(max-width: ${width}px)`);
      const handleResize = () => setIsResponsive(mediaQuery.matches);

      // Agrega el listener
      mediaQuery.addEventListener('change', handleResize);

      // Ajusta el estado inicial después de la primera renderización del cliente
      handleResize();

      // Limpieza del listener
      return () => mediaQuery.removeEventListener('change', handleResize);
    }
  }, [width]);

  return isResponsive;
};

export default useResponsive;

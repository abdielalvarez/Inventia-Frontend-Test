import { useState, useEffect } from 'react';

const useResponsive = (width) => {
  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia(`(max-width: ${width}px)`);
      const handleResize = () => setIsResponsive(mediaQuery.matches);
      mediaQuery.addEventListener('change', handleResize);
      handleResize();
      return () => mediaQuery.removeEventListener('change', handleResize);
    }
  }, [width]);

  return isResponsive;
};

export default useResponsive;

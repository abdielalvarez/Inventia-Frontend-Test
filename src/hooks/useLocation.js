import { useState, useEffect, useRef } from 'react';

const useLocation = () => {
  const [location, setLocation] = useState({
    pathname: '',
    search: '',
    hash: '',
  });
  const locationRef = useRef(location);

  useEffect(() => {
    // Asegúrate de que esto solo se ejecute en el lado del cliente
    if (typeof window !== 'undefined') {
      const handleLocationChange = () => {
        const newLocation = {
          pathname: window.location.pathname,
          search: window.location.search,
          hash: window.location.hash,
        };

        // Solo actualiza el estado si ha habido un cambio en la ubicación
        if (
          newLocation.pathname !== locationRef.current.pathname ||
          newLocation.search !== locationRef.current.search ||
          newLocation.hash !== locationRef.current.hash
        ) {
          // Usar un setTimeout para programar el cambio de estado
          setTimeout(() => {
            setLocation(newLocation);
          }, 0);
          locationRef.current = newLocation; // Actualiza el ref con la nueva ubicación
        }
      };

      handleLocationChange(); // Llama la función inicialmente

      window.addEventListener('popstate', handleLocationChange);

      // Sobreescribir pushState y replaceState para detectar cambios
      const originalPushState = window.history.pushState;
      window.history.pushState = function (...args) {
        originalPushState.apply(this, args);
        handleLocationChange();
      };

      const originalReplaceState = window.history.replaceState;
      window.history.replaceState = function (...args) {
        originalReplaceState.apply(this, args);
        handleLocationChange();
      };

      // Limpieza
      return () => {
        window.removeEventListener('popstate', handleLocationChange);
        window.history.pushState = originalPushState;
        window.history.replaceState = originalReplaceState;
      };
    }
  }, []); // Solo se ejecuta una vez al montar el componente

  return location;
};

export default useLocation;




// import { useState, useEffect } from 'react';

// const useLocation = () => {
//   const [location, setLocation] = useState({
//     pathname: '',
//     search: '',
//     hash: '',
//   });

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const handleLocationChange = () => {
//         setLocation({
//           pathname: window.location.pathname,
//           search: window.location.search,
//           hash: window.location.hash,
//         });
//       };
//       handleLocationChange();
//       window.addEventListener('popstate', handleLocationChange);
//       const originalPushState = window.history.pushState;
//       window.history.pushState = function(...args) {
//         originalPushState.apply(this, args);
//         handleLocationChange();
//       };

//       const originalReplaceState = window.history.replaceState;
//       window.history.replaceState = function(...args) {
//         originalReplaceState.apply(this, args);
//         handleLocationChange();
//       };

//       return () => {
//         window.removeEventListener('popstate', handleLocationChange);
//         window.history.pushState = originalPushState;
//         window.history.replaceState = originalReplaceState;
//       };
//     }
//   }, []);

//   return location;
// };

// export default useLocation;

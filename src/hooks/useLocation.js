import { useState, useEffect } from 'react';

const useLocation = () => {
  const [location, setLocation] = useState({
    pathname: '',
    search: '',
    hash: '',
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleLocationChange = () => {
        setLocation({
          pathname: window.location.pathname,
          search: window.location.search,
          hash: window.location.hash,
        });
      };
      handleLocationChange();
      window.addEventListener('popstate', handleLocationChange);
      const originalPushState = window.history.pushState;
      window.history.pushState = function(...args) {
        originalPushState.apply(this, args);
        handleLocationChange();
      };

      const originalReplaceState = window.history.replaceState;
      window.history.replaceState = function(...args) {
        originalReplaceState.apply(this, args);
        handleLocationChange();
      };

      return () => {
        window.removeEventListener('popstate', handleLocationChange);
        window.history.pushState = originalPushState;
        window.history.replaceState = originalReplaceState;
      };
    }
  }, []);

  return location;
};

export default useLocation;

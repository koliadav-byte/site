import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Enables reliable anchor navigation (/#section) in React Router SPA.
 * - If location.hash exists: scrolls to the element with that id.
 * - Otherwise: scrolls to top on pathname change.
 */
export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    const { hash, pathname } = location;

    // Defer to allow the route component tree to mount
    const t = window.setTimeout(() => {
      if (hash) {
        const id = hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }

      // No hash or element not found -> top
      if (pathname) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 0);

    return () => window.clearTimeout(t);
  }, [location]);

  return null;
}

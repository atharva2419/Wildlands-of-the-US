import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * On navigation: jump to the top of a new page, or scroll to the #hash target
 * (e.g. returning to "/#map") once it has rendered.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a tick for the target section to mount.
      requestAnimationFrame(() => {
        document
          .getElementById(hash.slice(1))
          ?.scrollIntoView({ behavior: "smooth" });
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

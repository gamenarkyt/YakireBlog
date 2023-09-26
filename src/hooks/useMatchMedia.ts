import { useLayoutEffect, useState } from "react";

export const useMatchMedia = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const setMedia = () => {
    if (window.matchMedia("(min-width: 1001px)").matches) {
      setIsDesktop(true);
    }
    if (
      window.matchMedia("(min-width: 501px) and (max-width: 1000px)").matches
    ) {
      setIsTablet(true);
    }
    if (
      window.matchMedia("(min-width: 300px) and (max-width: 500px)").matches
    ) {
      setIsMobile(true);
    }
  };

  useLayoutEffect(() => {
    setMedia();
  }, []);

  return { isDesktop, isTablet, isMobile };
};

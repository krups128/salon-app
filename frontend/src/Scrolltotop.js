import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Adding a small delay for the scroll behavior
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // You can adjust the delay if needed

    return () => clearTimeout(timer); // Clean up timeout on component unmount
  }, [pathname]);

  return null;
};

export default ScrollToTop;

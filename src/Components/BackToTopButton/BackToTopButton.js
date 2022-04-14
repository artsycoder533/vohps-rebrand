import React, {useEffect, useState} from 'react';
import { ScrollToTopBtn } from '../Button/style';
import { FiArrowUp } from "react-icons/fi";

const BackToTopButton = () => {
  const [toTop, setToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleScrollButton);
    return () => {
      window.removeEventListener("scroll", toggleScrollButton);
    }
  }, []);

  const toggleScrollButton = () => {
    if (window.scrollY > 100) {
      setToTop(true);
    } else {
      setToTop(false);
    }
  }

  const scrollPageUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {toTop ?
      <ScrollToTopBtn onClick={scrollPageUp}>
         <FiArrowUp />
      </ScrollToTopBtn> : null}
    </>
  );
  
}

export default BackToTopButton
import React, {useEffect, useState} from 'react';
import { ScrollToTopBtn } from '../Button/style';
import { FiArrowUp } from "react-icons/fi";

const BackToTopButton = () => {
  const [toTop, setToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setToTop(true) : setToTop(false);
    })
  }, []);

  const scrollPageUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (

      <ScrollToTopBtn onClick={scrollPageUp}>
          <FiArrowUp />
    </ScrollToTopBtn>
  )
}

export default BackToTopButton
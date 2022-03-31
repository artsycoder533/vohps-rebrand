import React from 'react'
import { Container, StyledLink } from './style';
import { navLinks } from '../../Utility/data';

const Navbar = ({ openMenu }) => {
  
  return (
    <Container openMenu={openMenu}>
      <ul>
        {navLinks.map((link, index) => {
          const { url, text } = link;
          if (text === "Contact") {
            return (
              <li key={index}>
                <a href={url}>{text}</a>
              </li>
            );
          } else {
            return (
              <li key={index}>
                <StyledLink to={url}>{text}</StyledLink>
              </li>
            );
          }
        })}
      </ul>
    </Container>
  );
}

export default Navbar
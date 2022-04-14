import React from "react";
import { Container, StyledLink} from "./style";
import { navLinks } from "../../Utility/data";

const Navbar = ({ openMenu, setOpenMenu }) => {

  return (
    <Container openMenu={openMenu}>
      <ul>
        {navLinks.map((link, index) => {
          const { url, text } = link;
            return (
              <li key={index}>
                <StyledLink to={url} onClick={() => setOpenMenu(!openMenu)}>
                  {text}
                </StyledLink>
              </li>
            );
        })}
      </ul>
    </Container>
  );
};

export default Navbar;

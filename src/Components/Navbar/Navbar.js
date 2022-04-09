import React, {useState} from "react";
import { Container, StyledLink, SubLinks} from "./style";
import { navLinks } from "../../Utility/data";
import { subLinks } from "../../Utility/data";
import { NavLink } from "react-router-dom";

const Navbar = ({ openMenu, setOpenMenu }) => {
  const [openSub, setOpenSub] = useState(false);

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

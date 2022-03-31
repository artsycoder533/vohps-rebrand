import React, { useState } from "react";
import { Container } from "./style";
import Navbar from "../Navbar/Navbar";
import Hamburger from "../Hamburger/Hamburger";
import logo from "../../Images/logo.png";
import { Center } from "../App/style";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Container>
      <p>**All sessions are currently being held by online teletherapy. **</p>
      <img src={logo} alt="Visions of Hope logo" />
      <Hamburger openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Navbar />
    </Container>
  );
};

export default Header;

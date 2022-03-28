import React from 'react'
import { Container } from './style';
import Navbar from '../Navbar/Navbar';
import Hamburger from '../Hamburger/Hamburger';
import logo from '../../Images/logo.png';

const Header = () => {
  return (
      <Container>
          <p>**All sessions are currently being held by online teletherapy. **</p>
          <img src={logo} alt="Visions of Hope logo" />
          {/* <Hamburger /> */}
          <Navbar />
    </Container>
  )
}

export default Header
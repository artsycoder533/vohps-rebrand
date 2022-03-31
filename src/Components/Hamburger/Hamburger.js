import React from 'react'
import { StyledHamburger, TopLine, MiddleLine, BottomLine } from './style';

const Hamburger = ({openMenu}) => {
  return (
    <StyledHamburger>
      <TopLine openMenu={openMenu}></TopLine>
      <MiddleLine openMenu={openMenu}></MiddleLine>
      <BottomLine openMenu={openMenu}></BottomLine>
    </StyledHamburger>
  );
}

export default Hamburger
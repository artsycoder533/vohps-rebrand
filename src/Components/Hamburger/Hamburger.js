import React from 'react'
import { StyledHamburger, TopLine, MiddleLine, BottomLine } from './style';

const Hamburger = ({openMenu, setOpenMenu}) => {
  return (
    <StyledHamburger onClick={()=>setOpenMenu(!openMenu)}>
      <TopLine openMenu={openMenu}></TopLine>
      <MiddleLine openMenu={openMenu}></MiddleLine>
      <BottomLine openMenu={openMenu}></BottomLine>
    </StyledHamburger>
  );
}

export default Hamburger
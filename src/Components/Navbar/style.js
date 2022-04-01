import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.nav`
  width: 100%;
  transform: ${({ openMenu }) => openMenu ? "translateX(0)" : "translateX(100%)"};
  transition: all 0.3s ease;
  position: absolute;
  top: 370.22px;
  z-index: 1;

  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    background: purple;
    flex-direction: column;
    align-items: center;
    font-weight: 600;
    z-index: 1;
  }

  a {
    text-decoration: none;
    color: white;
    display: block;
    padding: 1rem;
    letter-spacing: 1px;

    &:hover {
      background: white;
      color: purple;
    }
  }

  @media all and (min-width: 768px) {
    position: initial;
    transform: translate(0);

    ul {
      flex-direction: row;
      font-weight: 100;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
`;

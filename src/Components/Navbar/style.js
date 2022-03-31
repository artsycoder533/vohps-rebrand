import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.nav`
  width: 100%;
  transform: ${({ openMenu }) => (openMenu ? "translateX(0)" : "translateX(100%)")};
  transition: all 0.3s ease;
  position: absolute;
  top: 352.22px;
  z-index: 1;

  ul {
    display: flex;
    justify-content: center;
    //gap: 2rem;
    list-style-type: none;
    //padding: 1rem;
    background: purple;
    flex-direction: column;
    //display: ${({ openMenu }) => (openMenu ? "flex" : "none")};
  }

  a {
    text-decoration: none;
    color: white;
    display: block;
    padding: 1rem;
    letter-spacing: 1px;

    &:hover {
      //border: 1px solid white;
      background: white;
      color: purple;
    }
  }

  @media all and (min-width: 768px) {
    ul {
      flex-direction: row;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
`;

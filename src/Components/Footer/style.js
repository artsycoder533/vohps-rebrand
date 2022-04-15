import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledFooter = styled.footer`
    background: black;
    color: #eee;
    font-size: 1.1rem;
`;

export const LinkWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;

    div {
        display: flex;
        flex-direction: column;
        width: 100%; 
    }

    @media all and (min-width: 1100px){
        flex-direction: row;
    }
`;

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    justify-content: space-between;

    img {
        max-width: 200px;
    }
    
`;

export const Container = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: auto;
  column-gap: 2rem;
  width: 100%;

  a {
    display: block;
    padding: 0.5rem 0;
    display: flex;
    gap: 0.25rem;
    align-items: center;
    text-decoration: none;
    color: #eee;

    .active {
      color: #ffd303;
    }
  }

  a:visited {
    color: white;
  }

  a:hover {
    color: #fed203;
    text-decoration: underline;
  }

  @media all and (min-width: 768px) {
    grid-template-columns: auto auto;
    justify-content: space-around;
  }
`;

export const StyledLink = styled(NavLink)`
  display: block;
  padding: 0.5rem 0;
  display: flex;
  gap: 0.25rem;
  align-items: center;
  text-decoration: none;
  color: #eee;

  .active {
    color: #ffd303;
  }

  &:hover {
    color: #fed203;
    text-decoration: underline;
  }
`;

export const StyledRegLink = styled.a`
  display: block;
  padding: 0.5rem;
  display: flex;
  gap: 0.25rem;
  align-items: center;
  text-decoration: none;
  color: #ffd303;

  .active {
    color: #ffd303;
  }

  &:hover {
    text-decoration: underline;
    color: #cef5fe;
  }
`;

export const SocialLinks = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
`;

export const ContactDiv = styled.div`
  display: flex;
  gap: 1rem;
  line-height: 1.5;

  address {
    margin-top: 2rem;
    text-align: center;
  }

  @media all and (min-width: 768px) {
    margin-top: 0;
  }
`;

export const StyledAttrition = styled.p`
  text-align: center;

  a {
    color: #eee;
  }

  a:hover {
    color: #fed203;
    text-decoration: underline;
  }
`;
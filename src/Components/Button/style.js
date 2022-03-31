import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const PrimaryButton = styled.button`
  text-decoration: none;
  color: white;
  padding: 1rem;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  background: #ffd303;
  color: #340431;
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  cursor: pointer;
`;

export const PrimaryLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  padding: 1rem;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  background: #ffd303;
  color: #340431;
  display: flex;
  align-items: center;
`;

export const SecondaryButton = styled.button``;

export const SecondaryLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  //border: 2px solid white;
  padding: 1rem;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  background: transparent;
  color: white;
  border: 2px solid white;
  display: flex;
  align-items: center;
`;

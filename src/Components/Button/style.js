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
  justify-content: center;
  position: relative;
  overflow: hidden;

  &:hover {
    color: #340431;
    background: transparent;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background: #cdf5fd;
    height: 100%;
    width: 100%;
    z-index: -1;
    transform-origin: bottom left;
    transform: rotate(-90deg);
    transition: transform 0.3s;
  }

  &:hover::before {
    transform: rotate(0deg);
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background: transparent;
  color: #340431;
  border: 2px solid #340431;
`;

export const SecondaryLink = styled(NavLink)`
  text-decoration: none;
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
  justify-content: center;
  position: relative;
  overflow: hidden;

  &:hover {
    color: #340431;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background: #cdf5fd;
    height: 100%;
    width: 100%;
    z-index: -1;
    transform-origin: bottom left;
    transform: rotate(-90deg);
    transition: transform 0.3s;
  }

  &:hover::before {
    transform: rotate(0deg);
  }
`;

export const StyledRegLink = styled.a`
  text-decoration: none;
  padding: 1rem;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  background: transparent;
  color: #340431;
  border: 2px solid #340431;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &:hover {
    color: #340431;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background: #cdf5fd;
    height: 100%;
    width: 100%;
    z-index: -1;
    transform-origin: bottom left;
    transform: rotate(-90deg);
    transition: transform 0.3s;
  }

  &:hover::before {
    transform: rotate(0deg);
  }
`;

export const ScrollToTopBtn = styled.button`
  position: fixed;
  bottom: 75px;
  right: 15px;
  background: #fed103;
  background: #cdf5fd;
  color: #340431;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid #fed103;
  font-size: 1.5rem;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0px 15px 10px -15px;

  &:hover {
    opacity: 0.8;
    background: #fed103;
  }
`;
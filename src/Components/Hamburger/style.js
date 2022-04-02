import styled from "styled-components";

export const StyledHamburger = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    position: relative;
    background: transparent;
    border: 1px solid transparent;
    align-self: flex-end;
    margin-right: 1rem;
    cursor: pointer;

    @media all and (min-width: 768px){
        display: none;
    }
`;

export const Line = styled.span`
    width: 100%;
    height: 4px;
    background: black;
    border-radius: 8px;
    background: purple;
`;

export const MiddleLine = styled(Line)`
  opacity: ${({ openMenu }) => (openMenu ? "0" : "1")};
  transition: opacity 0s;
`;

export const TopLine = styled(Line)`
  position: absolute;
  content: "";
  //transform: translateY(-10px);
  transform: ${({ openMenu }) =>
    openMenu ? "rotate(45deg)" : "translateY(-10px)"};
  transition: all 0.3s ease;
`;

export const BottomLine = styled(Line)`
  position: absolute;
  content: "";
  //transform: translateY(10px);
  transform: ${({ openMenu }) =>
    openMenu ? "rotate(-45deg)" : "translateY(10px)"};
  transition: all 0.3s ease;
`;
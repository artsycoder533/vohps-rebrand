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

    @media all and (min-width: 768px){
        display: none;
    }
`;

export const Line = styled.span`
    width: 100%;
    height: 4px;
    background: black;
    border-radius: 8px;
`;

export const MiddleLine = styled(Line)`
`;

export const TopLine = styled(Line)`
    position: absolute;
    content: "";
    transform: translateY(-10px);
`;

export const BottomLine = styled(Line)`
  position: absolute;
  content: "";
  transform: translateY(10px);
`;
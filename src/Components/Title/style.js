import styled from "styled-components";

export const Container = styled.section`
    height: 150px;
    height: auto;
    display: flex;
    justify-content: center;
`;

export const StyledTitle = styled.h2`
  font-size: 3rem;
  position: relative;
  padding: 3rem 0;
  text-align: center;
  color: purple;

  @media all and (min-width: 600px) {
    &::after {
      position: absolute;
      content: "";
      height: 4px;
      width: 100%;
      background: purple;
      bottom: 25%;
      left: 0;
    }
  }
`;
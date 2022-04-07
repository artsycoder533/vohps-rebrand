import styled from "styled-components";

export const Container = styled.section`
    height: 150px;
    display: flex;
    justify-content: center;
`;

export const StyledTitle = styled.h2`
    font-size: 3rem;
    position: relative;
    padding: 3rem 0;

  &::after {
    position: absolute;
    content: "";
    height: 4px;
    width: 100%;
    background: purple;
    bottom: 25%;
    left: 0;
  }
`;
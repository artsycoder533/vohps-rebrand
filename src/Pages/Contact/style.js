import styled from "styled-components";

export const Container = styled.main`
  background: #340431;
  display: flex;
  flex-direction:column;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media all and (min-width: 1100px){
    flex-direction: row;
  }
`;

export const SpecialTitle = styled.h2`
  color: white;
  padding: 4rem;
  text-align: center;
  font-size: 3rem;
`;




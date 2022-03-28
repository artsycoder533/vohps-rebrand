import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 200px;
    margin-top: 1rem;
  }

  p {
    padding: 1rem;
    background: purple;
    width: 100%;
    text-align: center;
    color: white; 
  }
`;
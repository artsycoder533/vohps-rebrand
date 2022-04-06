import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  background: white;
  padding: 1rem;
  max-width: 600px;
  justify-content: center;
  text-align: center;
  background: #cdf5fd;

   div {
    display: flex;
    flex-direction: column;
    width: 100%;

    span {
      display: block;
    }
  }
`;
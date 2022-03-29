import styled from "styled-components";

export const Container = styled.section`
  height: 200px;
  background: #340431;
  margin-top: 4rem;
  display: flex;
  align-items: center;
  background-position: fixed;

  blockquote, p {
    font-size: 1.5rem;
    color: white;
    text-align: center;
  }

  div {
      display: flex;
      flex-direction: column;
      gap: 2rem;
  }

`;
import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 1rem;
  max-width: 600px;
  justify-content: center;
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-align: left;
    gap: 1rem;
    padding: 1rem;
    background: #fcd20a;   
    
    span {
      display: block;
      padding-left: 1rem;
    }

    h3 {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    address {
      line-height: 1.5;
    }
  }
`;
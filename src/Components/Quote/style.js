import styled from "styled-components";

export const Container = styled.section`
  background: #340431;
  margin-top: 4rem;
  display: flex;
  align-items: center;
  padding: 2rem;

  blockquote,
  p {
    font-size: 1.5rem;
    text-align: center;
    line-height: 1.5;
    color: white;
  }

  p {
    color: #fecf06;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-left: auto;
    position: relative;
  }

  span {
    display: none;
    font-family: sans-serif;
    padding: 1rem;
  }

  @media all and (min-width: 992px) {
    span {
      color: #eee;
      font-size: 4rem;
      position: absolute;
      transform: translate(-125px, -100px);
      font-size: 15rem;
      top: 20px;
      display: block;
    }

    div {
      width: 70%;
    }
  }
`;

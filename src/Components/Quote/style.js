import styled from "styled-components";

export const Container = styled.section`
  //height: 250px;
  background: #340431;
  //background: #4C005E;
  margin-top: 4rem;
  display: flex;
  align-items: center;
  //background-position: fixed;
  //position: relative;
  padding: 2rem;

  blockquote,
  p {
    font-size: 1.5rem;
    color: white;
    text-align: center;
    line-height: 1.5;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    //width: 70%;
    margin-left: auto;
    position: relative;
  }

  span {
    display: none;
  }

  @media all and (min-width: 992px) {
    span {
      color: #eee;
      font-size: 4rem;
      position: absolute;
      transform: translate(-125px, -100px);
      font-size: 15rem;
      top: 10px;
    }
  }
`;

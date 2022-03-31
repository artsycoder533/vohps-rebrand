import styled from "styled-components";
import { RiDoubleQuotesL } from "react-icons/ri";

export const Container = styled.section`
  height: 250px;
  background: #340431;
  margin-top: 4rem;
  display: flex;
  align-items: center;
  background-position: fixed;
  position: relative;

  blockquote, p {
    font-size: 1.5rem;
    color: white;
  }


  div {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 70%;
      margin-left: auto;
      position: relative;
  }

  span {
    color: #eee;
    font-size: 4rem;
    position: absolute;
    transform: translate(-125px, -100px);
    font-size: 15rem;
    top: 10px;
  }


`;

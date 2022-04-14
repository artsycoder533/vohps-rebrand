import styled from "styled-components";
import img3 from "../../Images/hero3.jpg";

export const Container = styled.section`
  background: url(${img3}) center / cover no-repeat;
  background-color: purple;
  background-blend-mode: multiply;
  clip-path: ellipse(171% 100% at 5.23% 0%);
  height: 50vh;
  display: flex;

  article {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    gap: 2rem;
  }

  h1 {
    font-size: 2rem;
    color: white;
    text-align: center;

    em {
      color: #ffd303;
    }

    @media all and (min-width: 768px){
        width: 70%;
        font-size: 4rem;
    }

    @media all and (min-width: 992px){
      width: 60%;
    }
  }

  @media all and (min-width: 768px){
    h1 {
      text-align: left;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media all and (min-width: 768px){
    flex-direction: row;
  }
`;

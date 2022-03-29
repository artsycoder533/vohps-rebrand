import styled from "styled-components";
import img from "../../Images/hero.jpg";
import img2 from "../../Images/hero2.jpg";
import img3 from "../../Images/hero3.jpg";

export const Container = styled.section`
  background: url(${img3}) center / cover no-repeat;
  background-color: purple;
  background-blend-mode: multiply;
  clip-path: ellipse(171% 100% at 5.23% 0%);
  height: 40vh;
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
    font-size: 4rem;
    width: 50%;
    color: white;

    em {
      color: #ffd303;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

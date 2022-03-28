import styled from "styled-components";
import img from "../../Images/hero.jpg";

export const Container = styled.section`
  background-image: url(${img});
  clip-path: ellipse(171% 100% at 5.23% 0%);
  height: 60vh;
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
  }
  
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 1rem;
`;


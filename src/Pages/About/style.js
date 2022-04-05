import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    align-items: center;
    margin: 4rem 0;
    height: 100%;
    justify-content: center;
`;

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;

  @media all and (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
   justify-content: center;
  }
`;

export const BioText = styled.article`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    line-height: 1.5;
    margin: 2rem 0;
`;

export const BioStats = styled.article`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.5rem;
  margin-top: 2rem;
  align-items: center;
  max-width: 400px;
  width: 100%;

  img {
    position: relative;

    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background: red;
    }
  }

  @media all and (min-width: 768px){
      margin-top: 0;
  }
`;
import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    align-items: center;
    margin-bottom: 4rem;
    height: 100%;
    justify-content: center;
    flex-direction: column;
`;

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;

  @media all and (min-width: 768px) {
    flex-direction: row;
    gap: 4rem;
    justify-content: center;
  }
`;

export const BioText = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  line-height: 1.5;
  margin: 2rem 0;
  width: 100%;

  p:nth-of-type(1)::first-letter {
    font-size: 4rem;
  }

  @media all and (min-width: 768px) {
    flex: 2;
  }

  @media all and (min-width: 992px){
      flex: 1;
  }
`;

export const BioStats = styled.article`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  margin-top: 2rem;
  align-items: center;

  img {
    border-radius: 50%;
    max-width: 400px;
  }

  @media all and (min-width: 768px){
      margin-top: 0;
      flex: 1;
  }
`;
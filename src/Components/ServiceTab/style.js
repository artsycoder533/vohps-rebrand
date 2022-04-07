import styled from "styled-components";

export const Container = styled.article`
    padding: 2rem;
    display: flex;
    gap: 4rem;
    flex-direction: column;
    align-items: center;

    img {
        border-radius: 1rem;
        max-width: 100%;
    }

    @media all and (min-width: 992px){
        flex-direction: row;
        padding: 2rem;

        div {
            flex: 1;
        }
    }
`;

export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  line-height: 1.5;
  gap: 2rem;

  h3 {
    font-size: 2rem;
  }

  p:nth-of-type(2) {
    background: #cdf5fd;
  }

  @media all and (min-width: 992px) {
    padding: 0 2rem;
  }
`;
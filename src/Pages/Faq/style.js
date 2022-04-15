import styled from "styled-components";

export const Container = styled.section`
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5;

  p {
    text-indent: 2rem;
    max-width: 800px;
    margin: 0 auto;
  }
`;

export const StyledArticle = styled.article`
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h4,
    p:first-of-type,
    p:last-of-type {
        text-align: center;
    }

    ul {
        max-width: 500px;
        margin: 0 auto;
        margin: 1rem auto;
    }

    p:last-of-type {
        display: inline;
    }

    a {
        color: blue;
    }

`;
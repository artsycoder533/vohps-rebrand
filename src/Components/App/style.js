import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
      
    }
`;

export const Center = styled.div`
  max-width: 1400px;
  width: 90vw;
  margin: 0 auto;
`;

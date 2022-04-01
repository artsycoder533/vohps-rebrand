import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        
    }

    main {

    }
`;

export const Center = styled.div`
  max-width: 1400px;
  width: 90vw;
  margin: 0 auto;
`;

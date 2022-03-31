import styled from "styled-components";

export const Container = styled.section`
  article {
    display: flex;
    gap: 2rem;
    margin-top: 3rem;
    align-items: center;
    justify-content: space-between;

    div {
      padding: 2rem;
      width: 400px;
        border-right: 3px solid purple;

      h2 {
        text-align: center;
        margin-bottom: 1rem;
        color: purple;
      }

      p {
          line-height: 1.5;
      }
    }
  }
`;
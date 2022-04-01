import styled from "styled-components";

export const Container = styled.section`
  article {
    display: flex;
    gap: 2rem;
    margin-top: 3rem;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    div {
      padding: 2rem;
      width: 400px;

      h2 {
        text-align: center;
        margin-bottom: 1rem;
        color: purple;
      }

      p {
        line-height: 1.5;
      }
    }

    @media all and (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }

    @media all and (min-width: 992px) {
      flex-wrap: nowrap;
      justify-content: space-between;

      div {
        border-right: 6px solid purple;
      }
    }
  }
`;
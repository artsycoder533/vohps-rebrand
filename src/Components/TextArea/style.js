import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  textarea {
    padding: 0.5rem;
    font-size: 1rem;
    height: 10rem;
    border: 1px solid transparent;
    border-bottom: 2px solid purple;

    &:hover,
    &:focus {
      border: 2px solid purple;
      background: #ffefff;
    }
  }

  label {
    font-weight: bold;
  }
`;
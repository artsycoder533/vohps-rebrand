import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input[type="checkbox"] {
    width: 30px;
    height: 30px;
  }

  label {
    color: #fed004;
    font-weight: bold;
  }
`;
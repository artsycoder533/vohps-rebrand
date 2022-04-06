import styled from "styled-components";
import { PrimaryButton } from "../Button/style";

export const Container = styled.section`
    padding: 4rem 0;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //align-items: center;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  color: white;

  p {
    align-self: flex-start;
    line-height: 1.5;
    font-size: 1rem;
  }

  p:nth-of-type(1) {
    margin-top: 1rem;
  }

  h3 {
    text-align: center;
  }
`;

export const FormButton = styled(PrimaryButton)`
    margin-left: auto;
`;
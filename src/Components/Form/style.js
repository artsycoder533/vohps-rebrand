import styled from "styled-components";
import { PrimaryButton } from "../Button/style";

export const Container = styled.section`
    padding: 4rem 0;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  color: white;

  p {
    align-self: flex-start;
    line-height: 1.5;
    font-size: 1.1rem;
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
  position: relative;
  transition: all 0.2s;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    transition: all 0.4s;
    z-index: -1;
  }

  &:hover::before {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
import styled from "styled-components";
import { PrimaryButton } from "../Button/style";

export const Container = styled.section`
    padding: 4rem 0;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
`;

export const FormButton = styled(PrimaryButton)`
    margin-left: auto;
`;
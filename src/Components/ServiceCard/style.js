import styled from "styled-components";
import { GiPerson } from "react-icons/gi";

export const Container = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    border: 1px solid red;
    width: 200px;
    padding: 1rem;
`;

export const StyledIcon = styled(GiPerson)`
    font-size: 3rem;
`;
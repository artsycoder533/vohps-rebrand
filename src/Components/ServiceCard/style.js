import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 300px;
    padding: 1rem;
    text-align: center;
    

    img {
        max-width: 100%;
    }
`;

export const StyledLink = styled(Link)`
  font-size: 1.2rem;
  color: #340431;
`;


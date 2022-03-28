import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.nav`
    width: 100%;

    ul {
        display: flex;
        justify-content: center;
        //gap: 2rem;
        list-style-type: none;
        //padding: 1rem;
        background: purple;
    }

    a {
        text-decoration: none;
        color: white;
        display: block;
        padding: 1rem;
        letter-spacing: 1px;

        &:hover {
            //border: 1px solid white;
            background: white;
            color: purple;
        }
    }
`;

export const StyledLink = styled(NavLink)`
    text-decoration: none;
`;
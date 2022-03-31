import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledFooter = styled.footer`
    background: black;
    color: #eee;
`;

export const LinkWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    div {
        display: flex;
        flex-direction: column;
    }
`;

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    justify-content: space-between;

    img {
        max-width: 200px;
    }
    
`;

export const Container = styled.ul`
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    width: 100%;
`;

export const StyledLink = styled(NavLink)`
    display: block;
    padding: 0.5rem;
    display: flex;
    gap: 0.25rem;
    align-items: center;
    text-decoration: none;
    color: #eee;
`;

export const SocialLinks = styled.ul`
    display: flex;
    list-style-type: none;
    justify-content: center;
    gap: 2rem;
`;

export const ContactDiv = styled.div`
    display: flex;
    gap: 1rem;
    line-height: 1.5;
`;

export const StyledAttrition = styled.p`
    text-align: center;
`;
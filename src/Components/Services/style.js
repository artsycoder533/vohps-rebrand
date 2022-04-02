import styled from "styled-components";
import { PrimaryLink } from "../Button/style";

export const Container = styled.section`
  margin: 4rem 0;
`;

export const ServicesWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;

  @media all and (min-width: 768px){
    flex-direction: row;
  }

`;

export const StyledPrimaryLink = styled(PrimaryLink)`
  align-self: center;
  margin-top: 2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
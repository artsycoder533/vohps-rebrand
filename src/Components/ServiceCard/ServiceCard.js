import React from "react";
import { Container, StyledLink } from "./style";

const ServiceCard = ({text, url, image}) => {
  return (
    <Container>
      <StyledLink to={url}>
        <img src={image} alt={text} />
        {text}
      </StyledLink>
    </Container>
  );
};

export default ServiceCard;

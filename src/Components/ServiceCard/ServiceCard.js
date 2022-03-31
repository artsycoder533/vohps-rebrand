import React from "react";
import { Container, StyledIcon, StyledLink } from "./style";
import { Link } from "react-router-dom";

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

import React from "react";
import { Container, StyledIcon } from "./style";
import { Link } from "react-router-dom";

const ServiceCard = ({text, url, image}) => {
  return (
    <Container>
      <img src={image} alt={text} />
      <Link to={url}>{text}</Link>
    </Container>
  );
};

export default ServiceCard;

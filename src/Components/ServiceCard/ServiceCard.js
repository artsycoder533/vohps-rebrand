import React from "react";
import { Container, StyledIcon } from "./style";
import { Link } from "react-router-dom";

const ServiceCard = ({icon, link, path}) => {
  return (
    <Container>
      {icon}
      <Link to={path}>{link}</Link>
    </Container>
  );
};

export default ServiceCard;

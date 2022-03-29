import React from "react";
import { Container, StyledIcon } from "./style";
import { Link } from "react-router-dom";
import { GiPerson } from "react-icons/gi";

const ServiceCard = () => {
  return (
    <Container>
      {/* <h2>Individual Therapy</h2> */}
      <StyledIcon />
      <Link to="therapy">Individual Therapy</Link>
    </Container>
  );
};

export default ServiceCard;

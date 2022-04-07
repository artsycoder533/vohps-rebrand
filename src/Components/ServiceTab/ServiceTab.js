import React, {useState} from "react";
import { Container, StyledDescription } from "./style";
import { PrimaryLink } from "../Button/style";

const ServiceTab = ({ service, view, index }) => {
    const { title, description, description1, description2, btn, img, url } = service;
    console.log(view, index);

  if (title === "Group Therapy" || title === "Psychological Evaluations") {
    return (
      <Container index={index} view={view}>
        <StyledDescription>
          <h3>{title}</h3>
          <p>{description1}</p>
          <p>{description2}</p>
          <PrimaryLink to={url}>{btn}</PrimaryLink>
        </StyledDescription>
        <div>
          <img src={img} alt="" />
        </div>
      </Container>
    );
  } else {
    return (
      <Container>
        <StyledDescription>
          <h3>{title}</h3>
          <p>{description}</p>
          <PrimaryLink to={url}>{btn}</PrimaryLink>
        </StyledDescription>
        <div>
          <img src={img} alt="" />
        </div>
      </Container>
    );
  }
};

export default ServiceTab;

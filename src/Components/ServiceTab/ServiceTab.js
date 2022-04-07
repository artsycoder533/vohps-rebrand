import React from "react";
import { Container } from "./style";

const ServiceTab = ({ service }) => {
    const { title, description, description1, description2, btn, img } = service;

  if (title === "Group Therapy" || title === "Psychological Evaluations") {
    return (
      <Container>
        <div>
          <h3>{title}</h3>
          <p>{description1}</p>
          <p>{description2}</p>
          <button>{btn}</button>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
      </Container>
    );
  } else {
    return (
      <Container>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <button>{btn}</button>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
      </Container>
    );
  }
};

export default ServiceTab;

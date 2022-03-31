import React from "react";
import { Container, IconWrapper, StyledPrimaryLink } from "./style";
import { Center } from "../App/style";
import ServiceCard from "../ServiceCard/ServiceCard";
import { ServicesWrapper, Wrapper } from "./style";
import { services } from "../../Utility/data";
import { PrimaryLink } from "../Button/style";

const Services = () => {
  return (
    <Container>
      <Center>
        <Wrapper>
          <ServicesWrapper>
            {services.map((service, index) => {
              const { text, url, image } = service;
              return (
                <ServiceCard key={index} text={text} url={url} image={image} />
              );
            })}
          </ServicesWrapper>
          <StyledPrimaryLink to="/contact">
            Schedule An appointment
          </StyledPrimaryLink>
        </Wrapper>
      </Center>
    </Container>
  );
};

export default Services;

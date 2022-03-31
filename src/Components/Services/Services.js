import React from "react";
import { Container, IconWrapper } from "./style";
import { Center } from "../App/style";
import ServiceCard from "../ServiceCard/ServiceCard";
import { StyledPersonIcon, StyledManIcon, StyledWomanIcon, StyledUserIcon, StyledClipboard, Wrapper } from "./style";
import { services } from "../../Utility/data";

const Services = () => {
  return (
    <Container>
      <Center>
        <Wrapper>
          {services.map((service, index)=>{
            const { text, url, image } = service;
            return (
              <ServiceCard key={index} text={"Individual Therapy"} url={"/individual"} image={image} />
            );
          })}
        </Wrapper>
      </Center>
    </Container>
  );
};

export default Services;

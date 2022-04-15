import React from 'react';
import { Center } from "../../Components/App/style";
import { ButtonContainer, Container } from "./style";
import { PrimaryLink, SecondaryLink } from "../../Components/Button/style";

const Hero = () => {
  return (
    <Container>
        <Center>
          <article>
            <h1>
              Finding Clarity Through <em>Healing</em>
            </h1>
            <ButtonContainer>
              <PrimaryLink to="/contact">Schedule Appointment</PrimaryLink>
              <SecondaryLink to="">Learn More</SecondaryLink>
            </ButtonContainer>
          </article>
        </Center>
      </Container>
  );
}

export default Hero
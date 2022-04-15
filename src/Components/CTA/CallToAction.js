import React from 'react';
import { PrimaryLink } from "../../Components/Button/style";
import { Container } from './style';

const CallToAction = () => {
  return (
    <Container>
      <PrimaryLink to="/contact">Schedule Appointment</PrimaryLink>
    </Container>
  );
}

export default CallToAction
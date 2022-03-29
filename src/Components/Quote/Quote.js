import React from 'react'
import { Container } from './style';
import { Center } from '../App/style';

const Quote = () => {
  return (
    <Container>
      <Center>
        <div>
          <blockquote>
            "With over 14 years of professional experience, our hallmark has
            been focused on attention to individual needs, competently delivered
            with compassion and sensitivity."
          </blockquote>
          <p>- Dr. Selisha Nelson-Smith PhD, LCP </p>
        </div>
      </Center>
    </Container>
  );
}

export default Quote
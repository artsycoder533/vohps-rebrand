import React from 'react';
import{ Center} from '../../Components/App/style';
import { ButtonContainer, Container } from './style';
import { PrimaryLink } from '../../Components/Button/style';

const Home = () => {
  return (
    <main>
      <Container>
        <Center>
          <article>
            <h1>Finding Clarity Through Healing</h1>
            <ButtonContainer>
              <PrimaryLink to="">Schedule Appointment</PrimaryLink>
              <PrimaryLink to="">Learn More</PrimaryLink>
            </ButtonContainer>
          </article>
        </Center>
      </Container>
      <div></div>
    </main>
  );
}

export default Home
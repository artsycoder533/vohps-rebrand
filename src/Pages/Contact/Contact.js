import React from 'react';
import { Center } from '../../Components/App/style';
import ContactForm from '../../Components/Form/ContactForm';
import { Container } from './style';
import Map from '../../Components/Map/Map';
import ContactInfo from '../../Components/ContactInfo/ContactInfo';
import { Wrapper } from './style';
import BackToTopButton from '../../Components/BackToTopButton/BackToTopButton';

const Contact = () => {
  return (
    <Container>
      <Center>
        <Wrapper>
          <ContactForm title="Have a question? Contact Us Today!" />
          <ContactInfo />
        </Wrapper>
      </Center>
      <Map />
      <BackToTopButton />
    </Container>
  );
}

export default Contact
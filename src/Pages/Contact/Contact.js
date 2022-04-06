import React from 'react';
import { Center } from '../../Components/App/style';
import ContactForm from '../../Components/Form/ContactForm';
import { Container } from './style';
import Map from '../../Components/Map/Map';

const Contact = () => {
  return (
    <Container>
      <Center>
        <ContactForm title="Have a question? Contact Us Today!" />
      </Center>
      <Map />
    </Container>
  );
}

export default Contact
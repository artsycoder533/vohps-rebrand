import React from 'react';
import { Center } from '../../Components/App/style';
import ContactForm from '../../Components/Form/ContactForm';
import { Container } from './style';

const Contact = () => {
  return (
    <Container>
      <Center>
        <ContactForm title="Have a question? Contact Us Today!" />
      </Center>
    </Container>
  );
}

export default Contact
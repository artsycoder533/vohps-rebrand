import React from 'react';
import { Center } from '../../Components/App/style';
import ContactForm from '../../Components/Form/ContactForm';

const Contact = () => {
  return (
    <main>
      <Center>
        <ContactForm title="Have a question? Contact Us Today!" />
      </Center>
    </main>
  );
}

export default Contact
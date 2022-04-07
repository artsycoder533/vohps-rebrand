import React from 'react';
import { Center } from '../../Components/App/style';
import ContactForm from '../../Components/Form/ContactForm';
import { Container, SpecialTitle } from './style';
import Map from '../../Components/Map/Map';
import ContactInfo from '../../Components/ContactInfo/ContactInfo';
import { Wrapper } from './style';
import Title from '../../Components/Title/Title';


const Contact = () => {
  return (
    <Container>
      {/* <SpecialTitle>Contact Us</SpecialTitle> */}
      <Center>
        <Wrapper>
          <ContactForm title="Have a question? Contact Us Today!" />
          <ContactInfo />
        </Wrapper>
      </Center>
      <Map />
    </Container>
  );
}

export default Contact
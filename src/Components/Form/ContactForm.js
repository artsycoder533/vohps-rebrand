import React from "react";
import FormInput from "../FormInput/FormInput";
import { Container, FormButton, StyledForm } from "./style";
import { Center } from "../App/style";
import TextArea from "../TextArea/TextArea";

const ContactForm = ({ title }) => {
  return (
    <Container>
      <Center>
        <StyledForm>
          <h3>{title}</h3>
          <FormInput
            label="Name:"
            type="text"
            name="name"
            id="name"
            htmlFor="name"
          />
          <FormInput
            label="Email:"
            type="email"
            name="email"
            id="email"
            htmlFor="email"
          />
          <TextArea
            label="Message:"
            name="message"
            id="email"
            htmlFor="message"
            placeholder="We are committed to your privacy.  Please only include general non-confidential information"
          />
          <FormButton>Send Message</FormButton>
        </StyledForm>
      </Center>
    </Container>
  );
};

export default ContactForm;

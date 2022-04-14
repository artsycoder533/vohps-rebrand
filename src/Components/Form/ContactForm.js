import React from "react";
import FormInput from "../FormInput/FormInput";
import { Container, FormButton, StyledForm } from "./style";
import TextArea from "../TextArea/TextArea";
import FormCheckbox from "../FormCheckbox/FormCheckbox";

const ContactForm = ({ title }) => {
  return (
    <Container>
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
        <p>Terms of Use</p>
        <p>
          By Submitting this form via this web portal, you acknowledge and
          accept that risks of communicating your health information via this
          unencrypted email and electronic messaging and wish to continue
          despite those risks. By clicking "Yes, I want to submit this form",
          you agree to hold Visions of Hope Psychological Services, LLC harmless
          for unauthorized use, disclosure, or access of your protected health
          information sent via this electronic means.
        </p>
        <FormCheckbox
          label="Yes, I want to submit this form"
          type="checkbox"
          name="submit"
          id="submit"
          htmlFor="submit"
        />
        <FormButton>Send Message</FormButton>
      </StyledForm>
    </Container>
  );
};

export default ContactForm;

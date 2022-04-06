import React from "react";
import { Container } from "./style";

const TextArea = ({ label, name, id, htmlFor, placeholder }) => {
  return (
    <Container>
      <label htmlFor={htmlFor}>{label}</label>
      <textarea name={name} id={id} placeholder={placeholder} required />
    </Container>
  );
};

export default TextArea;

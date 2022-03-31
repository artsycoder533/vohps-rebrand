import React from 'react'
import { Container } from './style'

const FormInput = ({label, type, name, id, htmlFor }) => {
  return (
      <Container>
          <label htmlFor={htmlFor}>{label}</label>
          <input type={type} name={name} id={id} required/>
    </Container>
  )
}

export default FormInput
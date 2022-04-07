import React from 'react'
import { Container, StyledTitle } from './style'

const Title = ({title}) => {
    
  return (
      <Container>
          <StyledTitle>{title}</StyledTitle>
      </Container>
  )
}

export default Title
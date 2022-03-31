import React from 'react'
import { Container } from './style';
import { Center } from '../App/style';

const Quote = ({quote}) => {
  const { text, author } = quote;

  return (
    <Container>
      <Center>
        <div>
          <span>&ldquo;</span>
          <blockquote>"{text}"</blockquote>
          <p>{author}</p>
        </div>
      </Center>
    </Container>
  );
}

export default Quote
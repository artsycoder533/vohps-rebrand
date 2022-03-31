import React from 'react'
import { Container } from './style';
import { Center } from '../App/style';

const Quote = ({quote}) => {
  const { text, author } = quote;

  return (
    <Container>
      <Center>
        <div>
          <blockquote>
            "{text}"
          </blockquote>
          <p>{author}</p>
        </div>
      </Center>
    </Container>
  );
}

export default Quote
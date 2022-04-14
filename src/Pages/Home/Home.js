import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Services from '../../Components/Services/Services';
import Mission from '../../Components/Mission/Mission';
import Quote from '../../Components/Quote/Quote';
import { quotes } from '../../Utility/data';

const Home = () => {
  return (
    <main>
      <Hero />
      <Mission />
      <Quote quote={quotes[0]} />
      <Services />
      <Quote quote={quotes[1]} />
    </main>
  );
}

export default Home
import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Services from '../../Components/Services/Services';
import Mission from '../../Components/Mission/Mission';
import Quote from '../../Components/Quote/Quote';

const Home = () => {
  return (
    <main>
      <Hero />
      <Mission />
      <Quote />
      <Services />
    </main>
  );
}

export default Home
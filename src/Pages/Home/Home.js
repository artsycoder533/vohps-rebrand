import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Services from '../../Components/Services/Services';
import Mission from '../../Components/Mission/Mission';

const Home = () => {
  return (
    <main>
      <Hero />
      <Mission />
      <Services />
    </main>
  );
}

export default Home
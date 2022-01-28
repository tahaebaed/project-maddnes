import React from 'react';
import About from '../layout/About';
import Features from '../layout/Features';
import Footer from '../layout/Footer';
import HeroBox from '../layout/HeroBox';

function Home() {
  return (
    <main>
      <HeroBox />
      <Features />
      <About />
      <Footer />
    </main>
  );
}

export default Home;

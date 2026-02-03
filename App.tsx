import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Results from './components/Results';
import TrustFactors from './components/TrustFactors';
import IntermediateCTA from './components/IntermediateCTA';
import HowItWorks from './components/HowItWorks';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StickyBottomCTA from './components/StickyBottomCTA';

const App: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Hero />
      <About />
      <Results />
      <TrustFactors />
      <IntermediateCTA />
      <HowItWorks />
      <FinalCTA />
      <Footer />
      <StickyBottomCTA />
    </main>
  );
};

export default App;
import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import FeatureCards from './components/sections/FeatureCards';
import MainVisual from './components/sections/MainVisual';
import HowItWorks from './components/sections/HowItWorks';
import TechStack from './components/sections/TechStack';
import Programs from './components/sections/Programs';
import CallToAction from './components/sections/CallToAction';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <FeatureCards />
        <MainVisual />
        <HowItWorks />
        <TechStack />
        <Programs />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;

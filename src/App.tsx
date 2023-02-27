import React from 'react';
import { motion } from 'framer-motion';
import './app.scss';
import { Rounded } from './app/components/elements/rounded-background/RoundedBG';
import { Home } from './app/components/screens/home/Home';
import { Header } from './app/components/elements/header/Header';
import { About } from './app/components/screens/about/About';
import { Skills } from './app/components/screens/skills/Skills';
import { Works } from './app/components/screens/works/Works';
import { Footer } from './app/components/elements/footer/Footer';
import { WorksCard } from './app/components/elements/works-card/WorksCard';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Skills />
      <About />
      <Works />
      <Footer />
      <WorksCard />
    </>
  );
}

export default App;

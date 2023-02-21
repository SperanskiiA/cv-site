import React from 'react';
import { motion } from 'framer-motion';
import './app.scss';
import { Rounded } from './app/components/elements/rounded-background/RoundedBG';
import { Home } from './app/components/screens/home/Home';
import { Header } from './app/components/elements/header/Header';
import { About } from './app/components/screens/about/About';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
    </>
  );
}

export default App;

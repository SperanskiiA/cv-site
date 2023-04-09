import React from 'react';
import { Home } from './app/components/screens/home/Home';
import { Header } from './app/components/elements/header/Header';
import { About } from './app/components/screens/about/AnotherAbout';
import { Footer } from './app/components/elements/footer/Footer';
import WorksLayout from './app/components/screens/works/WorksLayout';
import SkillsLayout from './app/components/screens/skills/SkillsLayout';

function App() {
  const about = React.useRef<HTMLDivElement | null>(null);
  const works = React.useRef<HTMLDivElement | null>(null);
  const skills = React.useRef<HTMLDivElement | null>(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const scrollToRef = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header
        handleScroll={scrollToRef}
        about={about}
        works={works}
        skills={skills}
      />
      <Home handleClose={handleClose} handleOpen={handleOpen} open={open} />
      <WorksLayout ref={works} />
      <SkillsLayout ref={skills} />
      <About ref={about} />
      <Footer />
    </>
  );
}

export default App;

import React from 'react';
import { Home } from './app/components/screens/home/Home';
import { Header } from './app/components/elements/header/Header';
import { About } from './app/components/screens/about/AnotherAbout';
import { Footer } from './app/components/elements/footer/Footer';
import WorksLayout from './app/components/screens/works/WorksLayout';
import SkillsLayout from './app/components/screens/skills/SkillsLayout';
import { Layout } from './app/components/layout/Layout';
import { ToTopButton } from './app/components/elements/totop-button/toTopButton';

function App() {
  const about = React.useRef<HTMLDivElement | null>(null);
  const works = React.useRef<HTMLDivElement | null>(null);
  const skills = React.useRef<HTMLDivElement | null>(null);

  const [open, setOpen] = React.useState(false);
  const [btnVisible, setBtnVisible] = React.useState(false);
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
    <div>
      <Header
        handleScroll={scrollToRef}
        about={about}
        works={works}
        skills={skills}
      />
      <Home
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
        setVisible={setBtnVisible}
      />
      <WorksLayout ref={works} setVisible={setBtnVisible} />
      <SkillsLayout ref={skills} />
      <About ref={about} />
      <Footer />

      <ToTopButton visible={btnVisible} />
    </div>
  );
}

export default App;

import { Header, Footer } from '../elements';
import React from 'react';

import { ToTopButton } from '../elements/totop-button/toTopButton';
import { Home, Works, Skills, About } from '../screens';

type layoutWrap = {
  children: React.ReactNode;
};
export const Layout: React.FC<layoutWrap> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

const LazyLayout = () => {
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
    <Layout>
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
      <Works ref={works} setVisible={setBtnVisible} />
      <Skills ref={skills} />
      <About ref={about} />
      <Footer />

      <ToTopButton visible={btnVisible} />
    </Layout>
  );
};

export default LazyLayout;

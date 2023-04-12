import { Header, Footer } from '../elements';
import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import styles from './Layout.module.scss';
import { useInView } from 'react-intersection-observer';
import { ToTopButton } from '../elements/totop-button/toTopButton';

export type layout = {
  children: React.ReactNode;
  title?: string;
  subTitle?: string;
  color?: string;
  desc?: string;
  open?: boolean;
};

export const Layout: React.FC<layout> = ({ children }) => {
  const [btnVisible, setBtnVisible] = useState(false);
  const { ref: observerRef, inView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) setBtnVisible(true);
    console.log(inView);
  }, [inView]);
  return (
    <>
      <div ref={observerRef} className={styles.wrapper}>
        <div className={styles.main}>{children}</div>
        <ToTopButton visible={btnVisible} />
      </div>
    </>
  );
};

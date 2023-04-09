import { Header, Footer } from '../elements';
import React from 'react';
import { Typography } from '@mui/material';
import styles from './Layout.module.scss';
export type layout = {
  children: React.ReactNode;
  title?: string;
  subTitle?: string;
  color?: string;
  desc?: string;
  open?: boolean;
};

export const Layout: React.FC<layout> = ({ children, open }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.main}>{children}</div>
      </div>
    </>
  );
};

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
};

export const Layout: React.FC<layout> = ({ children, title }) => {
  return (
    <>
      <div className={styles.layout}>
        <div>
          <Typography variant="h2"> {title} </Typography>
        </div>
        <div className={styles.main}>{children}</div>
      </div>
    </>
  );
};

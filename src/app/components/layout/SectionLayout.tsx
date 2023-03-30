import { Typography } from '@mui/material';
import React from 'react';
import { layout } from './Layout';
import styles from './Layout.module.scss';

export const SectionLayout: React.FC<layout> = ({
  children,
  title,
  subTitle,
  color,
  desc,
}) => {
  return (
    <section
      style={{ background: color || 'transparent', minHeight: '100vh' }}
      className={styles.layout}
    >
      <div className={styles.content}>
        <div className={styles.wrap}>
          <div className={styles.title}>
            <Typography variant="h2">{title}</Typography>
            <p className={styles.subTitle}>{subTitle}</p>
          </div>
          {desc && <p className={styles.desc}>{desc}</p>}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
};

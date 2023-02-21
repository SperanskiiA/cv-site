import { Grid } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { Container } from '../container/Container';
import styles from './Header.module.scss';

export const Header = () => {
  const links = ['home', 'works', 'contacts'];
  return (
    <Container>
      <Grid container spacing={2} direction="row">
        <Grid item xs={4}>
          <div style={{ fontWeight: 800, color: '#e1ff00' }}>ICON</div>
        </Grid>
        <Grid item xs={8}>
          <motion.div className={styles.flex}>
            {links.map((item) => (
              <motion.a
                className={styles.flex_item}
                whileHover={{ scale: 1.2 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

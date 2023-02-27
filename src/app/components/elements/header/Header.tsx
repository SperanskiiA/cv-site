import { Grid } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { yellow } from '../../../assets/colors';

import { Container } from '../container/Container';
import { Image } from '../svg-img/SvgImage';
import styles from './Header.module.scss';

export const Header = () => {
  const links = ['home', 'works', 'contacts'];
  return (
    <Container>
      <div style={{ height: '40px', padding: '0 10px' }}>
        <Grid container spacing={2} direction="row">
          <Grid item xs={4}>
            <div>
              <p style={{ margin: '0', fontWeight: '700', color: yellow }}>
                icon
              </p>
            </div>
          </Grid>
          <Grid item xs={8}>
            <motion.div className={styles.flex}>
              {links.map((item) => (
                <motion.a
                  key={item}
                  className={styles.flex_item}
                  whileHover={{ scale: 1.2 }}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

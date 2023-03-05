import { Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { abort } from 'process';
import React, { FC } from 'react';
import { yellow } from '../../../assets/colors';

import { Container } from '../container/Container';
import { Image } from '../svg-img/SvgImage';
import styles from './Header.module.scss';
type HeaderRefLinks = {
  handleScroll: (ref: React.MutableRefObject<HTMLDivElement | null>) => void;
  about: React.MutableRefObject<HTMLDivElement | null>;
  works: React.MutableRefObject<HTMLDivElement | null>;
  contacts: React.MutableRefObject<HTMLDivElement | null>;
};
export const Header = ({
  handleScroll,
  about,
  works,
  contacts,
}: HeaderRefLinks) => {
  const links = [
    { title: 'about', ref: about },
    { title: 'works', ref: works },
    { title: 'contacts', ref: contacts },
  ];
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
                  key={item.title}
                  className={styles.flex_item}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => handleScroll(item.ref)}
                >
                  {item.title.toUpperCase()}
                </motion.a>
              ))}
            </motion.div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

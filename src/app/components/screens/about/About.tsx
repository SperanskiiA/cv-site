import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

import React from 'react';
import {
  blue,
  darkGrey,
  gradient,
  grey,
  lightBlue,
  orange,
  pink,
  red,
  yellow,
} from '../../../assets/colors';
import { Container } from '../../elements/container/Container';
import { Rounded } from '../../elements/rounded-background/RoundedBG';
import styles from './About.module.scss';

export const About = React.forwardRef(
  (props, ref: React.LegacyRef<HTMLDivElement>) => {
    return (
      <Container bg={darkGrey}>
        <div ref={ref} className={styles.grid}>
          <motion.div
            initial={{
              boxShadow: '-2px 3px 12px 0px rgba(0, 0, 0, 0.7)',
            }}
            whileHover={{
              boxShadow: `-2px 3px 12px 0px ${orange}`,
              scale: 1.05,
            }}
            className={styles.grid_content}
          >
            <Typography>Hi there! Here will be some info about me!</Typography>
          </motion.div>
          <div className={styles.blue}>
            <Rounded
              color1={blue}
              color2={lightBlue}
              size="100%"
              animate={false}
            />
          </div>
          <div className={styles.red}>
            <Rounded color1={red} color2={pink} size="80%" animate={false} />
          </div>
          <div className={styles.yellow}>
            <Rounded
              color1={orange}
              color2={yellow}
              size="80%"
              animate={false}
            />
          </div>
        </div>
      </Container>
    );
  }
);

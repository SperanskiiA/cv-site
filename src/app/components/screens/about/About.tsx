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
    const text = ``;
    return (
      <Container bg={darkGrey}>
        <div ref={ref} className={styles.grid}>
          <motion.div
            initial={{
              boxShadow: '-2px 3px 12px 0px rgba(0, 0, 0, 0.7)',
            }}
            className={styles.grid_content}
          >
            <p>
              {' '}
              Hello!
              <br />
              Let me introduce myself once more, my name is Aron and I am a web
              developer with a year and a half of commercial experience.
              <br />
              Why the web?
              <br />
              There are two reasons why.
              <br />
              Firstly, the web allows me to see the result of my work
              immediately.
              <br /> Secondly, each of us at least once thoughts when visited a
              certain site, "Wow, that's so cool. I wonder how it's done?",
              aren't we?
              <br /> I decided to go further and now every day I improve my
              programming skills to create cool interfaces so that one day
              someone visits my site and thinks "wow, how cool is that, I want
              to be able to do the same!".
              <br /> p.s. And also I love money! :)
            </p>
            <span className={styles.title}>
              <p>about me</p>
            </span>
          </motion.div>
          <div className={styles.blue}>
            <Rounded color1={blue} color2={lightBlue} animate={true} />
          </div>
          <div className={styles.red}>
            <Rounded color1={red} color2={pink} animate={true} />
          </div>
          <div className={styles.yellow}>
            <Rounded color1={orange} color2={yellow} animate={true} />
          </div>
        </div>
      </Container>
    );
  }
);

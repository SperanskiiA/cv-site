import { Typography, useMediaQuery } from '@mui/material';
import { newYellow } from '../../../assets/colors';
import { easeInOut, motion } from 'framer-motion';
import ExpirienceItem from '../../elements/ExpirienceItem/ExpirienceItem';
import { SectionLayout } from '../../layout/SectionLayout';
import styles from './About.module.scss';
import React from 'react';

const educationVariants = {
  rest: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.4,
      type: easeInOut,
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.4,
      type: easeInOut,
    },
  },

  initial: {
    opacity: 0,
  },
};

export const About = React.forwardRef((_, ref: React.Ref<HTMLDivElement>) => {
  const mouseDevice = useMediaQuery('(hover: hover) and (pointer: fine)');

  return (
    <div className={styles.container} ref={ref}>
      <SectionLayout title="About Me" subTitle="hello ;)">
        <motion.div className={styles.flex}>
          <motion.div
            whileInView="rest"
            whileHover={mouseDevice ? 'hover' : ''}
            initial="initial"
            variants={educationVariants}
            viewport={{ once: true }}
            className={styles.education}
          >
            <Typography className={styles.sub} variant="h3">
              Education
            </Typography>
            <ExpirienceItem
              title="Programing course: Java, Android, Web"
              company="Tel-Ran, Educational Center"
              date="09.2019- 05.2020"
            />
            <ExpirienceItem
              title="Economics, bachelor degree"
              company="Kuban State Agrarian University"
              date="09.2014- 07.2018"
            />
          </motion.div>
          <div className={styles.about}>
            <Typography variant="h4">Hello World!</Typography>
            <Typography variant="body1" paragraph>
              Let me introduce myself once more, my name is Aron and I am a web
              developer with a year and a half of commercial experience.
            </Typography>
            <Typography variant="h5" style={{ padding: '12px 0' }}>
              Why the web?
            </Typography>
            <Typography variant="body1">
              <b>Firstly</b>, the web allows me to see the result of my work
              immediately.
            </Typography>
            <Typography variant="body1" paragraph>
              <b>Secondly</b>, each of us at least once thoughts when visited a
              certain site, "Wow, that's so cool. I wonder how it's done?",
              aren't we?
            </Typography>
            <div className={styles.conclusion}>
              <Typography variant="h6" style={{ padding: '8px 0' }}>
                I decided to go further and now every day I improve my
                programming skills to create cool interfaces so that one day
                someone visits my site and thinks "wow, how cool is that, I want
                to be able to do the same!".
              </Typography>
              <Typography variant="body1">
                p.s. <strong>And also I love money!</strong>
              </Typography>
            </div>
          </div>
        </motion.div>
      </SectionLayout>
      {/* <WaveBg className={styles.bg} /> */}
    </div>
  );
});

// <div
// style={{
//   width: '60%',
//   maxHeight: 'fit-content',
//   background: 'transparent',
//   boxShadow: '1px 2px 12px #000',
//   borderRadius: '16px',
//   margin: '0 auto',
// }}
// >
// <div
//   style={{ padding: '12px', textAlign: 'justify', color: '#fff' }}
// >
//   <p>
//     {' '}
//     <b> Hello!</b>
//     <br />
//     Let me introduce myself once more, my name is Aron and I am a
//     web developer with a year and a half of commercial experience.
//     <br />
//     Why the web?
//     <br />
//     There are two reasons why.
//     <br />
//     Firstly, the web allows me to see the result of my work
//     immediately.
//     <br /> Secondly, each of us at least once thoughts when visited
//     a certain site, "Wow, that's so cool. I wonder how it's done?",
//     aren't we?
//     <br /> I decided to go further and now every day I improve my
//     programming skills to create cool interfaces so that one day
//     someone visits my site and thinks "wow, how cool is that, I want
//     to be able to do the same!".
//     <br /> p.s. And also I love money! :)
//   </p>
// </div>
// </div>

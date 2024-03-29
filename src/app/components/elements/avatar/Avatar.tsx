import { useMediaQuery } from '@mui/material';
import { easeInOut, easeOut, motion } from 'framer-motion';
import React, { FC } from 'react';
import { newYellow } from '../../../assets/colors';
import { titleData } from '../../../data';
import { Rounded } from '../rounded-background/RoundedBG';
import styles from './Avatar.module.scss';

type AvatarProps = {
  img: string;
};

const roundedVariants = {
  rest: {
    rotate: 0,
    scale: 1,
    transition: {
      duration: 1.5,
      type: easeInOut,
    },
  },
  hover: {
    rotate: 360,
    scale: 1.05,
    repeatType: 'mirror',
    transition: {
      duration: 1.5,
      repeat: 0,
      repeatDelay: 2,

      type: easeOut,
    },
  },
  inView: {
    rotate: 360,
    scale: 1.0,
    repeatType: 'mirror',
    transition: {
      duration: 2,

      delay: 0.4,

      type: easeInOut,
    },
  },
};
const imageVariants = {
  rest: {
    scale: 1,
    transition: {
      duration: 1.5,
      type: easeInOut,
    },
    filter: 'none',
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 1.5,
      type: easeOut,
    },
  },
};
const pinkVariants = {
  rest: {
    x: 0,
    y: 5,
    transition: {
      duration: 1.5,
    },
  },
  hover: {
    x: -20,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};
const blueVariants = {
  rest: {
    x: -5,
    y: 5,
    transition: {
      duration: 1.5,
    },
  },
  hover: {
    x: 5,
    y: -5,
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

export const Avatar: FC<AvatarProps> = ({ img }) => {
  const mouseDevice = useMediaQuery('(hover: hover) and (pointer: fine)');
  return (
    <motion.div
      initial="rest"
      whileHover={mouseDevice ? 'hover' : ''}
      animate="rest"
      whileInView="inView"
      className={styles.box}
    >
      <motion.div variants={roundedVariants}>
        <Rounded
          data={titleData}
          animate={true}
          color1="#3125de"
          color2={newYellow}
        />
      </motion.div>
      <motion.div className={styles.img}>
        <motion.span className={styles.span} variants={blueVariants} />
        <motion.span className={styles.span_pink} variants={pinkVariants} />

        <motion.img variants={imageVariants} src={img} />
      </motion.div>
    </motion.div>
  );
};

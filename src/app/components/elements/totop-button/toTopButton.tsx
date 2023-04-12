import { IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import React, { FC } from 'react';
import styles from './toTopButton.module.scss';
import {
  darkBlue,
  darkGrey,
  grey,
  white,
  yellow,
} from '../../../assets/colors';
import { m, motion } from 'framer-motion';

export type toTopBtnProps = {
  visible: boolean;
};

const btnVariants = {
  initial: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 0.2,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const btnVisible = {
  position: 'fixed',
  bottom: '25px',
  right: '25px',
  zIndex: 10,
  backgroundColor: darkGrey,
  color: white,
  '&:hover': {
    backgroundColor: grey,
    color: yellow,
  },
};

// const btnInvisible = {
//   display: 'block',
// };

export const ToTopButton: FC<toTopBtnProps> = ({ visible }, ref: any) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <IconButton
      component={motion.a}
      variants={btnVariants}
      initial="initial"
      animate={visible ? 'visible' : 'initial'}
      sx={btnVisible}
      onClick={handleClick}
    >
      <ArrowUpwardIcon fontSize="large" />
    </IconButton>
  );
};

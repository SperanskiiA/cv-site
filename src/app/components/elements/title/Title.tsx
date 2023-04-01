import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { pink, yellow } from '../../../assets/colors';
import styles from './Title.module.scss';
import resume from '../../../assets/CV_SperanskiiAron.pdf';
import { Popup } from '../pdf-popup/popup';

const contentVariants = {
  rest: {
    opacity: 0,
    y: 0,
  },
  hover: {
    opacity: 1,
    y: -20,
  },
  animate: {
    opacity: 1,
    scale: 1.05,
    transition: {
      duration: 0.7,
    },
  },
};

export const Title = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <motion.div className={styles.wrap}>
      <motion.div
        initial="rest"
        animate="animate"
        whileHover={isMobile ? 'animate' : 'hover'}
        variants={contentVariants}
        className={styles.content}
      >
        <Typography variant="h3">H1 there!!!</Typography>
        <Typography variant="body1">jfdskjfeiufnveiufsjc</Typography>
        {/* <Typography className={styles.text} variant="h5" fontSize="20px">
          Hi there!
        </Typography>
        <Typography className={styles.text} variant="h4" fontSize="28px">
          I'm Aron Speranskii
        </Typography>
        <Typography className={styles.text} variant="body1" fontSize="16px">
          I'm web developer with about 1.5 years of expirience. And I really
          like that I do!
        </Typography> */}
      </motion.div>
      <div className={styles.btn_wrap}>
        <Button
          sx={{
            background: yellow,
            color: '#000',
            marginTop: '16px',
            ':hover': {
              color: '#fff',
              background: pink,
            },
            ':focus': {
              color: '#fff',
              background: pink,
            },
          }}
          variant="contained"
          onClick={handleOpen}
        >
          Get my CV
        </Button>
      </div>
      <Popup open={open} handleClose={handleClose} />
    </motion.div>
  );
};

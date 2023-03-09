import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { motion } from 'framer-motion';
import React from 'react';
import { pink, yellow } from '../../../assets/colors';
import styles from './Title.module.scss';

export const Title = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, y: 30, x: -10 }}
      initial={{ opacity: 0, y: 0, x: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      }}
      className={styles.wrap}
    >
      <div style={{ padding: '20px' }}>
        <Typography className={styles.text} variant="h5" fontSize="20px">
          Hi there!
        </Typography>
        <Typography
          className={styles.text}
          variant="h4"
          fontSize="28px"
          sx={{ padding: '8px 0' }}
        >
          I'm Aron Speranskii
        </Typography>
        <Typography className={styles.text} variant="body1" fontSize="16px">
          I'm web developer with about 1.5 years of expirience. And I really
          like that I do!
        </Typography>
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
        >
          Get my CV
        </Button>
      </div>
    </motion.div>
  );
};

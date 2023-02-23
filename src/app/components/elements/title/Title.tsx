import { Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { motion } from 'framer-motion';
import React from 'react';
import styles from './Title.module.scss';

export const Title = () => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className={styles.wrap}>
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
      </div>
    </motion.div>
  );
};

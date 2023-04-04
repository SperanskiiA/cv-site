import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { pink, yellow } from '../../../assets/colors';
import styles from './Title.module.scss';
import resume from '../../../assets/CV_SperanskiiAron.pdf';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Popup } from '../pdf-popup/popup';
import { useScrollbarWidth } from '../../../hooks';
import { StyledEngineProvider } from '@mui/styled-engine';

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
  const handleOpen = () => {
    setOpen(true);
    const html = document.body.parentNode as HTMLElement | null;
    html!.style.paddingRight = '17pxpx';
  };
  const handleClose = () => {
    setOpen(false);
    const html = document.body.parentNode as HTMLElement | null;
    html!.style.paddingRight = '0px';
  };
  const isMobile = useMediaQuery('(max-width: 820px)');
  const width = useScrollbarWidth();
  const bodyWidth = open ? `calc(100% + ${width})` : '100%';
  console.log(width);

  // useEffect(() => {
  //   document.body.style.paddingRight = open ? `-${width}px !important` : '0px';
  //   console.log(width);
  // }, [open]);

  return (
    <StyledEngineProvider injectFirst>
      <motion.div className={styles.wrap}>
        <motion.div
          initial="rest"
          animate="animate"
          whileHover={isMobile ? '' : 'hover'}
          variants={contentVariants}
          className={styles.content}
        >
          <Typography variant="h3" style={{ padding: '8px 0' }}>
            {' '}
            I'm Aron Speranskii
          </Typography>
          <Typography variant="h5">
            And I have an addiction... of writing code
          </Typography>
        </motion.div>
        <div className={styles.btn_wrap}>
          <Button
            className={styles.btn_primary}
            variant="contained"
            endIcon={<TelegramIcon />}
            href="https://t.me/sp_aron"
            target="_blank"
          >
            Contact me
          </Button>
          <Button
            className={styles.btn_secondary}
            variant="outlined"
            onClick={handleOpen}
          >
            Get my CV
          </Button>
        </div>
        <Popup open={open} handleClose={handleClose} />
      </motion.div>
    </StyledEngineProvider>
  );
};

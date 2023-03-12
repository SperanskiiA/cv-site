import { Grid, Icon, IconButton, Typography } from '@mui/material';
import { Box, StyledEngineProvider } from '@mui/system';
import React, { FC, useState } from 'react';
import { Container } from '../container/Container';
import styles from './WorksCard.module.scss';
import img from '../../../assets/images/blog-mobile.jpg';

import { blue, yellow } from '../../../assets/colors';
import { workDataProps } from '../../../data';
import useMediaQuery from '@mui/material/useMediaQuery';

export const WorksCard: FC<workDataProps> = ({ img, title, desc, link }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <Container>
      <StyledEngineProvider injectFirst>
        <div className={styles.wrap}>
          <Box className={styles.flex}>
            <Box className={styles.flex_img}>
              <img src={img} />
            </Box>
            <Box className={styles.flex_content}>
              <Typography className={styles.flex_content_title} variant="h4">
                {title}
              </Typography>
              <p className={styles.flex_content_desc}>
                {isMobile ? desc.short : desc.long}
              </p>
            </Box>
          </Box>
        </div>
      </StyledEngineProvider>
    </Container>
  );
};

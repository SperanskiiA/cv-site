import { Grid, Typography } from '@mui/material';
import { Box, StyledEngineProvider } from '@mui/system';
import React from 'react';
import { Container } from '../container/Container';
import styles from './WorksCard.module.scss';
import img from '../../../assets/images/blog-mobile.jpg';
// import img from '../../../assets/images/photo_2023-02-27_19-51-20.jpg';

export const WorksCard = () => {
  return (
    <Container>
      <StyledEngineProvider injectFirst>
        <div style={{ padding: '24px' }}>
          <Box className={styles.flex}>
            <Box className={styles.flex_img}>
              <img src={img} />
            </Box>
            <Box className={styles.flex_content}>
              <Typography className={styles.flex_content_title} variant="h4">
                Blog App
              </Typography>
              <p className={styles.flex_content_desc}>
                There is a simple blog app on MERN stack.
                <br />
                This app allow you register an account and login later, add
                posts and comments, and manage your profile, posts and comments
                as well.
                <br />
                Server side was created with Node and Express, as data base here
                used MongoDB. Authorization created with JWT, and BCRYPT to hash
                passwords, uploading images made with Multer.
                <br />
                Client side was create with React, as state manager here used
                Redux Toolkit, dezign created with MUI and SCSS.
              </p>
            </Box>
          </Box>
        </div>
      </StyledEngineProvider>
    </Container>
  );
};

import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Container } from '../container/Container';
import styles from './WorksCard.module.scss';

export const WorksCard = () => {
  return (
    <Container>
      <div style={{ padding: '24px' }}>
        <Box className={styles.flex}>
          <Box className={styles.flex_img}></Box>
          <Box className={styles.flex_content}>
            <Typography className={styles.flex_content_title} variant="h4">
              Blog App
            </Typography>
            <Typography className={styles.flex_content_desc}>
              There is a simple blog app on MERN stack.
              <br />
              This app allow you register account and login later, add posts and
              comments, and manage your profile, posts and comments as well.
              <br />
              Server side was created with Node and Express, as data base here
              used MongoDB. Authorization created with JWT, and BCRYPT to hash
              passwords, uploading images made with Multer.
              <br />
              Client side was create with React, as state manager here used
              Redux Toolkit, dezign created with MUI and scss.
            </Typography>
          </Box>
        </Box>
      </div>
    </Container>
  );
};

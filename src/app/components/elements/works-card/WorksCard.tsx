import { Grid, Icon, IconButton, Typography } from '@mui/material';
import { Box, StyledEngineProvider } from '@mui/system';
import React, { useState } from 'react';
import { Container } from '../container/Container';
import styles from './WorksCard.module.scss';
import img from '../../../assets/images/blog-mobile.jpg';
import InstallDesktopIcon from '@mui/icons-material/InstallDesktop';
import InstallMobileIcon from '@mui/icons-material/InstallMobile';
import { blue, yellow } from '../../../assets/colors';

export const WorksCard = () => {
  const [visible, setVisible] = useState(false);
  const [layout, setLayout] = useState('mobile');

  return (
    <Container>
      <StyledEngineProvider injectFirst>
        <div style={{ padding: '24px', maxHeight: 'calc(100vh - 48px)' }}>
          <Box className={styles.flex}>
            <Box className={styles.flex_img}>
              <img src={img} />
              {/* <div className={styles.buttons}>
                <IconButton>
                  <InstallDesktopIcon htmlColor={blue} fontSize="large" />
                </IconButton>
                <IconButton>
                  <InstallMobileIcon htmlColor={blue} fontSize="large" />
                </IconButton>
              </div> */}
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

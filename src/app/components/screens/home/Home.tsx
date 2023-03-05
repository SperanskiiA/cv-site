import { Grid, useMediaQuery } from '@mui/material';
import React from 'react';
import {
  blue,
  darkGrey,
  gradient,
  grey,
  lightBlue,
  pink,
  red,
} from '../../../assets/colors';
import { titleData } from '../../../data';
import { Container } from '../../elements/container/Container';
import { Rounded } from '../../elements/rounded-background/RoundedBG';
import { Title } from '../../elements/title/Title';
import styles from './Home.module.scss';

export const Home = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <Container bg={gradient(darkGrey, grey)}>
      <div className={styles.wrap} style={{ width: '90%', margin: '0 auto' }}>
        <Grid
          container
          spacing={2}
          rowGap={4}
          direction={isMobile ? 'column-reverse' : 'row'}
        >
          <Grid item sm={6}>
            <Title />
          </Grid>
          <Grid
            sx={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}
            item
            sm={6}
          >
            <Rounded data={titleData} animate={true} />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

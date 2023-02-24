import { Grid, useMediaQuery } from '@mui/material';
import React from 'react';
import { blue, lightBlue, pink, red } from '../../../assets/colors';
import { titleData } from '../../../data';
import { Container } from '../../elements/container/Container';
import { Rounded } from '../../elements/rounded-background/RoundedBG';
import { Title } from '../../elements/title/Title';

export const Home = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <Container bg="#2d2d2d">
      <div style={{ padding: '40px 0', width: '90%', margin: '0 auto' }}>
        <Grid
          container
          spacing={2}
          rowGap={4}
          direction={isMobile ? 'column-reverse' : 'row'}
        >
          <Grid item sm={6} sx={{ paddingLeft: 0 }}>
            <Title />
          </Grid>
          <Grid item sm={6} sx={{ paddingLeft: 0 }}>
            <Rounded data={titleData} animate={true} />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

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
import img from '../../../assets/images/portfolio-photo-title.png';
import { Avatar } from '../../elements/avatar/Avatar';

export const Home = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <Container bg={gradient(darkGrey, grey)}>
      <div className={styles.wrap} style={{ width: '90%', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column-reverse' : 'row',
            gap: isMobile ? '40px' : '20px',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px 0',
          }}
        >
          <Title />
          <Avatar img={img} />
        </div>
      </div>
    </Container>
  );
};
{
  /* <Grid
container
spacing={2}
rowGap={4}
direction={isMobile ? 'column-reverse' : 'row'}
sx={{ height: '100%' }}
>
<Grid item sm={6}>
  <Title />
</Grid>
<Grid
  sx={{ height: 'fit-content', boxSizing: 'content-box' }}
  item
  sm={6}
>
  <Avatar img={img} />
</Grid>
</Grid> */
}

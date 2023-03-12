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
  return (
    <Container bg={gradient(darkGrey, grey)}>
      <div className={styles.wrap}>
        <div className={styles.inner}>
          <Title />
          <Avatar img={img} />
        </div>
      </div>
    </Container>
  );
};

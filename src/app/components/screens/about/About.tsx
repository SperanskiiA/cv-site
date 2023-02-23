import { Typography } from '@mui/material';

import React from 'react';
import {
  blue,
  darkGrey,
  grey,
  lightBlue,
  pink,
  yellow,
} from '../../../assets/colors';
import { Container } from '../../elements/container/Container';
import { Rounded } from '../../elements/rounded-background/RoundedBG';

export const About = () => {
  return (
    <Container bg={darkGrey}>
      <div
        style={{
          width: '80%',
          margin: '40px auto',
          position: 'relative',
          minHeight: '600px',
          zIndex: 400,
          background: yellow,
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            zIndex: 20,
            background: pink,
            height: '600px',
            width: '100%',
          }}
        >
          <Typography>Hi there! Here will be some info about me!</Typography>
        </div>
        <div
          style={{
            position: 'absolute',
            left: '-17%',
            top: '-17%',
            zIndex: -2,

            height: '200px',
            width: '200px',
          }}
        >
          <Rounded color1={blue} color2={lightBlue} />
        </div>
      </div>
    </Container>
  );
};

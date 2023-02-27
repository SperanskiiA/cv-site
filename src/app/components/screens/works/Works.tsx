import { Container } from '../../elements/container/Container';
import React from 'react';
import { darkGrey, grey, textShadow, yellow } from '../../../assets/colors';
import Typography from '@mui/material/Typography';
import { Carousel, CarouselItem } from '../../elements/carousel/Carousel';
import { useMediaQuery } from '@mui/material';

export const Works = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <Container bg={grey}>
      <div>
        <Typography
          style={{
            textShadow: textShadow,
            color: yellow,
            fontWeight: 600,
          }}
          variant="h5"
          textAlign="center"
        >
          Resent works
        </Typography>
      </div>
      <div
        style={{
          width: isMobile ? '100%' : '80%',

          margin: '24px auto',
          background: darkGrey,
          borderRadius: '12px',
          boxShadow: '-2px 3px 12px 0px rgba(0, 0, 0, 0.7)',
        }}
      >
        <Carousel>
          <CarouselItem width="100%">
            <h1>hello world</h1>
          </CarouselItem>
          <CarouselItem width="100%">
            <h1>hello world 2</h1>
          </CarouselItem>
          <CarouselItem width="100%">
            <h1>hello world 3</h1>
          </CarouselItem>
        </Carousel>
      </div>
    </Container>
  );
};

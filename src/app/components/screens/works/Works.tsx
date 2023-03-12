import { Container } from '../../elements/container/Container';
import React from 'react';
import { darkGrey, grey, textShadow, yellow } from '../../../assets/colors';
import Typography from '@mui/material/Typography';
import { Carousel, CarouselItem } from '../../elements/carousel/Carousel';
import { StyledEngineProvider, useMediaQuery } from '@mui/material';
import { WorksCard } from '../../elements/works-card/WorksCard';
import styles from './Works.module.scss';
import { worksData } from '../../../data';

export const Works = React.forwardRef(
  (_, ref: React.LegacyRef<HTMLDivElement>) => {
    const isMobile = useMediaQuery('(max-width: 767px)');
    const data = worksData;

    return (
      <StyledEngineProvider>
        <Container bg={grey}>
          <div className={styles.wrap} ref={ref}>
            <div>
              <Typography
                className={styles.title}
                variant="h5"
                textAlign="center"
              >
                Resent works
              </Typography>
            </div>
            <div
              style={{
                margin: '24px auto',
                background: darkGrey,
                borderRadius: '12px',
                boxShadow: '-2px 3px 12px 0px rgba(0, 0, 0, 0.7)',
                maxWidth: isMobile ? '348.5px' : undefined,
              }}
            >
              <Carousel>
                {data.map((item) => {
                  return (
                    <CarouselItem key={item.title} width="100%">
                      <WorksCard {...item} />
                    </CarouselItem>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </Container>
      </StyledEngineProvider>
    );
  }
);

import { Grid, useMediaQuery } from '@mui/material';
import { Container } from '../../elements/container/Container';
import { ImageCard } from '../../elements/image-card/ImageCard';
import { ReactComponent as Css3 } from '../../../assets/icons/css3.svg';
import { Image } from '../../elements/svg-img/SvgImage';
import { cardData } from '../../../data';
import { motion } from 'framer-motion';
import { darkGrey, gradient, grey } from '../../../assets/colors';

export const Skills = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  return (
    <Container bg={grey}>
      <div style={{ width: '80%', margin: '40px auto' }}>
        <Grid container>
          <>
            {cardData.map((item, index) => (
              <Grid key={item.title} item xs={6} sm={4} lg={2}>
                <ImageCard
                  title={item.title}
                  delay={!isMobile ? (index + 1) * 0.1 : 0.15}
                >
                  <Image color="#e1ff00" size="40px">
                    <item.icon />
                  </Image>
                </ImageCard>
              </Grid>
            ))}
          </>
        </Grid>
      </div>
    </Container>
  );
};

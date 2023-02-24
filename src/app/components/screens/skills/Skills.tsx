import { Grid } from '@mui/material';
import { Container } from '../../elements/container/Container';
import { ImageCard } from '../../elements/image-card/ImageCard';
import { ReactComponent as Css3 } from '../../../assets/icons/css3.svg';
import { Image } from '../../elements/svg-img/SvgImage';
import { cardData } from '../../../data';

export const Skills = () => {
  return (
    <Container bg="#414141">
      <div style={{ width: '80%', margin: '40px auto' }}>
        <Grid container>
          <>
            {cardData.map((item) => (
              <Grid key={item.title} item xs={6} sm={4} lg={2}>
                <ImageCard title={item.title}>
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

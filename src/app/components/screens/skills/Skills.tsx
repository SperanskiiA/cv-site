import { Grid, useMediaQuery } from '@mui/material';
import { Container } from '../../elements/container/Container';
import { ImageCard } from '../../elements/image-card/ImageCard';

import { Image } from '../../elements/svg-img/SvgImage';
import { cardData } from '../../../data';
import { LayoutGroup, motion } from 'framer-motion';
import { darkGrey, gradient, grey } from '../../../assets/colors';
import styles from './Skills.module.scss';
import { useState } from 'react';

export const Skills = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  console.log(activeIdx);
  return (
    <Container bg={grey}>
      <motion.div
        onHoverEnd={() => setActiveIdx(null)}
        style={{ width: '80%', margin: '40px auto' }}
      >
        <Grid container>
          <>
            <LayoutGroup>
              {cardData.map((item, index) => {
                const activeIndex = activeIdx === index;
                return (
                  <Grid
                    component={motion.div}
                    className={styles.item}
                    key={item.title}
                    item
                    xs={6}
                    sm={4}
                    lg={2}
                    onHoverStart={() => setActiveIdx(index)}
                  >
                    <div>
                      <ImageCard
                        title={item.title}
                        delay={!isMobile ? (index + 1) * 0.1 : 0.15}
                        bg={grey}
                      >
                        <Image color="#e1ff00" size="40px">
                          <item.icon />
                        </Image>
                      </ImageCard>
                    </div>

                    {activeIndex && (
                      <motion.span
                        className={styles.backdrop}
                        layoutId="backdrop"
                      />
                    )}
                  </Grid>
                );
              })}
            </LayoutGroup>
          </>
        </Grid>
      </motion.div>
    </Container>
  );
};

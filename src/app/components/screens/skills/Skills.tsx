import { Grid, useMediaQuery } from '@mui/material';
import { Container } from '../../elements/container/Container';
import { ImageCard } from '../../elements/image-card/ImageCard';

import { Image } from '../../elements/svg-img/SvgImage';
import { cardData } from '../../../data';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { darkGrey, gradient, gradientBg, grey } from '../../../assets/colors';
import styles from './Skills.module.scss';
import { useState } from 'react';
import { Box } from '@mui/system';

export const Skills = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  console.log(activeIdx);
  return (
    <Container bg={gradientBg('to bottom', grey, darkGrey)}>
      <motion.div
        style={{ width: '80%', margin: '40px auto', display: 'flex' }}
      >
        <Grid container component={motion.div} layout>
          <>
            {cardData.map((item, index) => {
              const activeIndex = activeIdx === index;
              return (
                <Grid
                  layout={index === 0 ? true : false}
                  component={motion.div}
                  className={styles.item}
                  key={item.title}
                  item
                  xs={6}
                  sm={4}
                  lg={2}
                  onHoverStart={() => setActiveIdx(index)}
                  onTap={() => setActiveIdx(index)}
                >
                  <div
                    style={{
                      zIndex: -2,
                      display: 'block',
                    }}
                  >
                    <div
                      style={{
                        margin: '10px auto',
                        width: '100px',
                        height: '100px',
                        background: '#fff',
                        zIndex: 4,
                      }}
                    ></div>
                  </div>

                  {activeIndex && (
                    <motion.span
                      className={styles.backdrop}
                      layoutId="backdrop"
                      layout
                      transition={{ duration: 5 }}
                      exit={{
                        width: '10px',
                        height: '10px',
                      }}
                    />
                  )}
                </Grid>
              );
            })}
          </>
        </Grid>
      </motion.div>
    </Container>
  );
};

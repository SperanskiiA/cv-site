import { Box, StyledEngineProvider } from '@mui/material';

import { darkGrey, yellow } from '../../../assets/colors';
import styles from './Footer.module.scss';
import { useState } from 'react';
import { footerData } from '../../../data';
import { motion } from 'framer-motion';
import { Container } from '../container/Container';

export const Footer = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  return (
    <Container bg={darkGrey}>
      <StyledEngineProvider injectFirst>
        <Box sx={{ bottom: 0, left: 0 }}>
          <motion.ul
            className={styles.box}
            onHoverEnd={() => setActiveIdx(null)}
          >
            {footerData.map((item, index) => {
              const isActive = index === activeIdx;
              return (
                <motion.li
                  key={item.alt}
                  onHoverStart={() => setActiveIdx(index)}
                  onFocus={() => setActiveIdx(index)}
                >
                  {' '}
                  <a target="_blank" href={item.link}>
                    <item.icon
                      className={styles.icon}
                      htmlColor={isActive ? darkGrey : '#fff'}
                    />
                    {isActive && (
                      <motion.span
                        layoutId="shadow"
                        className={styles.shadow}
                        style={{ zIndex: 0 }}
                      />
                    )}
                  </a>
                </motion.li>
              );
            })}
          </motion.ul>
        </Box>
      </StyledEngineProvider>
    </Container>
  );
};

// <IconButton className={styles.button}>
// <a style={{ width: '35px', height: '35px' }}>
//   <LinkedInIcon fontSize="large" htmlColor={yellow} />
//   <span className={styles.shadow} />
// </a>
// </IconButton>
// <IconButton className={styles.button}>
// <FacebookIcon fontSize="large" htmlColor={yellow} />
// </IconButton>
// <IconButton className={styles.button}>
// <TelegramIcon fontSize="large" htmlColor={yellow} />
// </IconButton>

{
  /* <IconButton className={styles.button} key={item.alt}>
<a href={item.link}>
  <item.icon
    className={styles.icon}
    htmlColor={isActive ? '#fff' : yellow}
  />
  {isActive && <span className={styles.shadow} />}
</a>
</IconButton> */
}

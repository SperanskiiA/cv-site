import { motion, AnimateSharedLayout } from 'framer-motion';
import React, { FC, useState } from 'react';
import { Container } from '../container/Container';
import styles from './Header.module.scss';

type HeaderRefLinks = {
  handleScroll: (ref: React.MutableRefObject<HTMLDivElement | null>) => void;
  about: React.MutableRefObject<HTMLDivElement | null>;
  works: React.MutableRefObject<HTMLDivElement | null>;
  contacts: React.MutableRefObject<HTMLDivElement | null>;
};

export const Header: FC<HeaderRefLinks> = ({
  handleScroll,
  about,
  works,
  contacts,
}) => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const links = [
    { title: 'About', ref: about },
    { title: 'Works', ref: works },
    { title: 'Contacts', ref: contacts },
  ];

  return (
    <Container>
      <AnimateSharedLayout>
        <nav>
          <motion.ul
            className={styles.flex}
            onHoverEnd={() => setActiveIdx(null)}
          >
            {links.map((item, index) => {
              const isActive = index === activeIdx;
              return (
                <motion.li
                  key={item.title}
                  onHoverStart={() => setActiveIdx(index)}
                  onFocus={() => setActiveIdx(index)}
                >
                  <a
                    tabIndex={index + 1}
                    onClick={() => handleScroll(item.ref)}
                  >
                    {isActive ? (
                      <motion.span
                        className={styles.shadow}
                        layoutId="shadow"
                      />
                    ) : null}
                    <span style={isActive ? { color: '#000' } : undefined}>
                      {item.title}
                    </span>
                  </a>
                </motion.li>
              );
            })}
          </motion.ul>
        </nav>
      </AnimateSharedLayout>
    </Container>
  );
};

{
  /* <div style={{ height: '40px', padding: '0 10px' }}>
<Grid container spacing={2} direction="row">
  <Grid item xs={4}>
    <div>
      <p style={{ margin: '0', fontWeight: '700', color: yellow }}>
        icon
      </p>
    </div>
  </Grid>
  <Grid item xs={8}>
    <motion.div className={styles.flex}>
      {links.map((item) => (
        <motion.a
          key={item.title}
          className={styles.flex_item}
          whileHover={{ scale: 1.2 }}
          onClick={() => handleScroll(item.ref)}
        >
          {item.title.toUpperCase()}
        </motion.a>
      ))}
    </motion.div>
  </Grid>
</Grid>
</div> */
}
